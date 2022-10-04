<?php

namespace App\Serializer;

/**
 * Cette fonction est appelée lorsque l'entité implémente l'intérface BillInterface
 * @return Bill
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */


use App\Entity\BillStatut;
use App\OInterface\BillInterface;
use App\Repository\BillRepository;
use App\Repository\ItemRepository;
use App\Repository\UserRepository;
use App\Repository\CustomerRepository;
use App\Repository\BillStatutRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Repository\BillStatutNameRepository;
use App\Repository\CustomerSessionRepository;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface;

class BillDenormalizer implements ContextAwareDenormalizerInterface, DenormalizerAwareInterface
{

    use DenormalizerAwareTrait;

    function __construct(
        private Security $security,
        private UserRepository $userRepository,
        private BillStatutNameRepository $billStatutNameRepository,
        private BillStatutRepository $billStatutRepository,
        private ItemRepository $itemRepository,
        private CustomerRepository $customerRepository,
        private CustomerSessionRepository $customerSessionRepository,
        private BillRepository $billRepository,
        private ManagerRegistry $doctrine
    ) {
    }
    /**
     * Undocumented function
     *
     * @param mixed $data
     * @param string $type
     * @param string|null $format
     * @param array $context
     * @return boolean
     */
    public function supportsDenormalization(
        mixed $data,
        string $type,
        ?string $format = null,
        array $context = []
    ): bool {
        $reflectionClass = new \ReflectionClass($type);
        $allreadycalled = $context[$this->allReadyCalledKey($type)]  ?? false;
        return $reflectionClass->implementsInterface(BillInterface::class) && $allreadycalled === false;
    }

    /**
     * Undocumented function
     *
     * @param mixed $data
     * @param string $type
     * @param string|null $format
     * @param array $context
     * @return void
     */
    public function denormalize(
        mixed $data,
        string $type,
        ?string $format = null,
        array $context = []
    ) {

        //si la requete est de type collection_operation_name->POSTE (nouvel enregistreemnt)
        if (isset($context['collection_operation_name']) && $context['collection_operation_name'] === 'post') {
            $context[$this->allReadyCalledKey($type)] = true;

            //Bill constructor
            $date = new \DateTimeImmutable($data['from_at']);
            $context[AbstractNormalizer::DEFAULT_CONSTRUCTOR_ARGUMENTS] = [$type => ['bill_at' => $date]];
            //crée l'objet Bill
            $bill = $this->denormalizer->denormalize($data, $type, $format, $context);
            //Chargement de l'utilisateur courant
            $user = $this->userRepository->findOneBy(['id' => $this->security->getUser()]);
            //Chargement du customer
            $customer = $this->customerRepository->findOneByMemberShipActive($data['customer_id'], $user->getAssociation());
            //Selection du statut par default de la facture !!!important id = 1!!
            $billStatutName = $this->billStatutNameRepository->findOneBy(['id' => 1]);
            //chargement de l'association courrante
            $asssociation = $user->getAssociation();

            //check customer
            if ($customer === null) {
                return new JsonResponse(['message' => 'customer inexistant ou a un membership desactivé', 'code' => 404], 404);
            }

            //check des dates fournies
            $billingDate = \explode('-', $data['billing_month']);
            if ((int)$billingDate[0] > 12 || (int)$billingDate[0] < 1) {
                return new JsonResponse(['message' => 'le mois n\'est pas valable (int) de 1 à 12', 'code' => 404], 404);
            }
            if ((int)$billingDate[1] < 2000 || (int)$billingDate[1] > date('Y')) {
                return new JsonResponse(['message' => 'la date doit ce situer après 2000 et ne peut être dans le future', 'code' => 404], 404);
            }
            //on format la date si le numéro de mois ne contien pas de 0 devant entre 1 et 9 on l'ajoute
            $billingMonth = str_pad((int)$billingDate[0], 2, 0, STR_PAD_LEFT) . '-' . (int)$billingDate[1];

            //check si une facture pour le même mois n'est pas déjà crée si oui, on la supprime
            $sameBill = $this->billRepository->findOneBySameMonth($customer, $billingMonth);
            if ($sameBill) {
                $this->doctrine->getManager()->remove($this->billRepository->findOneBySameMonth($customer, $billingMonth));
                $this->doctrine->getManager()->flush();
            }

            //Selection des session à facturer dans le mois
            $total = null;
            $customerSessions = $this->customerSessionRepository->findByMonth($customer, (int)$billingDate[0]);
            foreach ($customerSessions as $key => $value) {
                $total += $value->getSession()->getSessionType()->getPriceOf();
            }

            //Set des valeurs necessaire 
            $billStatut = new BillStatut();
            $billStatut
                ->setUpdatedBy($user)
                ->setBalance(null)
                ->setBillStatutName($billStatutName);

            $bill
                ->setAssociation($asssociation)
                ->setCreatedBy($user)
                ->setCustomer($customer)
                ->setBillStatut($billStatut)
                ->setBillingMonth($billingMonth);

            //ajout des items
            foreach ($data['itemList'] as $key => $value) {
                //control que les items ajouté soient bien en relation avec l'association
                $item = $this->itemRepository->findOneBy(['id' => $value, 'association' => $user->getAssociation()]);
                if ($item != null) {
                    $bill->addItem($item);
                    $total += $item->getPriceOf();
                }
            }
            $bill->setAmount($total);
            //retourne l'objet avec les valeurs ajoutée
            return $bill;
        }


        //---------------------------------------------------------------------------
        //---------------------------------------------------------------------------


        //si la requete est de type item_operation_name->PUT (mise à jour)
        if (isset($context['item_operation_name']) && $context['item_operation_name'] === 'put') {
            $context[$this->allReadyCalledKey($type)] = true;
            //crée l'objet Bill
            $bill = $this->denormalizer->denormalize($data, $type, $format, $context);

            //on récupère le statut
            $billStatut = $this->billStatutRepository->findOneBy(['id' => $bill->getBillStatut()]);

            //si le montant de la facture corresopond au montant de la balance, la facture est payée
            if ($bill->getAmount() == $billStatut->getBalance() + $data['balance']) {
                $billStatutName = $this->billStatutNameRepository->findOneBy(['id' => 2]); //on met le statut comme payé
            } else {
                $billStatutName = $billStatut->getBillStatutName(); //sinon on laisse le statut actuel
            }
            //Set des valeurs necessaire 
            $bill
                ->setAmount($data['amount'])
                ->setIsArchived($data['isArchived']);
            $billStatut
                ->setUpdatedBy($this->security->getUser())
                ->setUpdatedAt(new \DateTimeImmutable)
                ->setBillStatutName($billStatutName)
                ->setBalance($billStatut->getBalance() + $data['balance']);

            //retourne l'objet avec les valeurs ajoutée
            return $bill;
        }
    }

    private function allReadyCalledKey(string $key)
    {
        return $key;
    }
}
