<?php

namespace App\Serializer;

use App\Entity\BillStatut;
use App\OInterface\BillInterface;
use App\Repository\ItemRepository;
use App\Repository\UserRepository;
use App\Repository\CustomerRepository;
use App\Repository\BillStatutRepository;
use App\Repository\BillStatutNameRepository;
use App\Repository\CustomerSessionRepository;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface;

class BillDenormalizer implements ContextAwareDenormalizerInterface, DenormalizerAwareInterface{

    use DenormalizerAwareTrait;

	function __construct(
        private Security $security, 
        private UserRepository $userRepository, 
        private BillStatutNameRepository $billStatutNameRepository, 
        private BillStatutRepository $billStatutRepository, 
        private ItemRepository $itemRepository,
        private CustomerRepository $customerRepository,
        private CustomerSessionRepository $customerSessionRepository
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
        array $context = []): bool
    {
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
        array $context = [])
    {

            //si la requete est de type collection_operation_name->POSTE (nouvel enregistreemnt)
            if(isset($context['collection_operation_name']) && $context['collection_operation_name'] === 'post')
            {
                $context[$this->allReadyCalledKey($type)] = true;
                
                //Bill constructor
                $date = new \DateTimeImmutable($data['from_at']);
                $context[AbstractNormalizer::DEFAULT_CONSTRUCTOR_ARGUMENTS] = [$type => ['bill_at' => $date]];
                //crée l'objet Bill
                $bill = $this->denormalizer->denormalize($data, $type, $format, $context);
                //Chargement de l'utilisateur courant
                $user = $this->userRepository->findOneBy(['id' => $this->security->getUser()]);
                //Chargement du customer
                $customer = $this->customerRepository->findOneBy(['id' => $data['customer_id'], 'association' => $user->getAssociation()]);
                //Selection du statut par default de la facture !!!important id = 1!!
                $billStatutName = $this->billStatutNameRepository->findOneBy(['id' => 1]);
                //chargement de l'association courrante
                $asssociation = $user->getAssociation();

                if($customer === null){
                    return new JsonResponse(['error' => 'customer inexistant', 'status' => 404], 404);
                }

                $billingDate = \explode('-', $data['billing_month']);
                if((int)$billingDate[0] > 12 || (int)$billingDate[0] < 1 ){
                    return new JsonResponse(['error' => 'le mois n\'est pas valable (int) de 1 à 12', 'status' => 404], 404);
                }
                if((int)$billingDate[1] < 2000 || (int)$billingDate[1] > date('Y')){
                    return new JsonResponse(['error' => 'la date doit ce situer après 2000 et ne peut être dans le future', 'status' => 404], 404);
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
                        ->setBillingMonth($data['billing_month']);
                    
                    //ajout des items
                    foreach ($data['itemList'] as $key => $value) {
                        //control que les items ajouté soient bien en relation avec l'association
                        $item = $this->itemRepository->findOneBy(['id' => $value, 'association' => $user->getAssociation()]);
                        if($item != null){
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
            if(isset($context['item_operation_name']) && $context['item_operation_name'] === 'put')
            {
                $context[$this->allReadyCalledKey($type)] = true;
                //crée l'objet Bill
                $bill = $this->denormalizer->denormalize($data, $type, $format, $context);

                //on récupère le statut
                $billStatut = $this->billStatutRepository->findOneBy(['id' => $bill->getBillStatut()]);

                //si le montant de la facture corresopond au montant de la balance, la facture est payée
                if($bill->getAmount() == $billStatut->getBalance()+$data['balance']){
                    $billStatutName = $this->billStatutNameRepository->findOneBy(['id' => 2]); //on met le statut comme payé
                }else{
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
                        ->setBalance($billStatut->getBalance()+$data['balance']);         

                //retourne l'objet avec les valeurs ajoutée
                return $bill;
            }
        }        

    private function allReadyCalledKey(string $key){
        return $key;
    }

}