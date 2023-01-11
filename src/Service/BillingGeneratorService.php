<?php

namespace App\Service;

/**
 * Cette class crée la facture client depuis "App\Controller\BillGeneratorAPI"
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */

use App\Entity\Bill;
use App\Entity\BillStatut;
use App\Repository\BillRepository;
use App\Repository\ItemRepository;
use App\Repository\CustomerRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Repository\BillStatutNameRepository;
use App\Repository\CustomerSessionRepository;
use Symfony\Component\Security\Core\Security;

class BillingGeneratorService
{

    function __construct(
        public Security $security,
        public CustomerRepository $customerRepository,
        public BillStatutNameRepository $billStatutNameRepository,
        public CustomerSessionRepository $customerSessionRepository,
        public ItemRepository $itemRepository,
        public ManagerRegistry $doctrine,
        public BillRepository $billRepository
    ) {
    }

    /**
     * Créer la facture client depuis "App\Controller\BillGeneratorAPI"
     *
     * @param [customer_id, from_at, billing_month, itemList] $data
     * @return bool
     */    public function BillGenerator($data): bool
    {
        //Bill constructor
        $fromAt = new \DateTimeImmutable($data['from_at']);
        //crée l'objet Bill,
        $bill = new Bill($fromAt);
        //Chargement de l'utilisateur courant
        $user = $this->security->getUser();
        //Chargement du customer
        $customer = $this->customerRepository->findOneByMemberShipActive($data['customer_id'], $user->getAssociation());
        //Selection du statut par default de la facture !!!important id = 1!!
        $billStatutName = $this->billStatutNameRepository->findOneBy(['id' => 1]);
        //chargement de l'association courrante
        $asssociation = $user->getAssociation();

        //check customer
        if ($customer === null) {
            return false;
        }

        //check des dates fournies
        $billingDate = \explode('-', $data['billing_month']);
        if ((int)$billingDate[0] > 12 || (int)$billingDate[0] < 1) {
            return false;
        }
        if ((int)$billingDate[1] < 2000 || (int)$billingDate[1] > date('Y')) {
            return false;
        }

        //on format la date si le numéro de mois ne contien pas de 0 devant entre 1 et 9 on l'ajoute
        $billingMonth = str_pad((int)$billingDate[0], 2, 0, STR_PAD_LEFT) . '-' . (int)$billingDate[1];

        //check si une facture pour le même mois n'est pas déjà crée
        if ($this->billRepository->findOneBySameMonth($customer, $billingMonth)) {
            return false;
        }

        //Selection des session à facturer dans le mois
        $total = null;
        $customerSessions = $this->customerSessionRepository->findByMonth($customer, (int)$billingDate[0], (int)$billingDate[1]);
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
        $entityManager = $this->doctrine->getManager();
        $entityManager->persist($bill);
        $entityManager->persist($billStatut);
        $entityManager->flush();

        return true;
    }
}
