<?php

namespace App\Controller;

use App\Entity\Bill;
use App\Entity\BillReminder;
use App\Entity\BillReminderCondition;
use App\Repository\BillReminderRepository;
use App\Repository\BillStatutNameRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BillingController extends AbstractController
{

    function __construct(
        public BillReminderRepository $billReminderRepository, 
        public BillStatutNameRepository $billStatutNameRepository,
        public ManagerRegistry $doctrine
    
        ){
    }

    /**
     * Créer un rappel pour une facture(Bill)
     *
     * @param Bill $bill
     * @param BillReminderCondition $billReminderCondition
     * @return JsonResponse
     */
    #[Route('/billing/createReminder/{id}/{billReminderCondition}', name: 'app_billing', methods: ['GET'])]
    public function createReminder(
        Bill $bill, 
        BillReminderCondition $billReminderCondition
    ): JsonResponse
    {
        if($bill->getAssociation() != $billReminderCondition->getAssociation()){
            $data = ['status' => 500, 'message' => 'Une erreur est survenue !'];
            return $this->json($data, $status = 500, $headers = [], $context = []);
        } 
        
        $now = new \DateTimeImmutable();

            //controle de la date d'échéance
            if($bill->getToAt() > $now){
                $data = ['status' => 406, 'message' => 'La date d\'échéance n\'est pas encore atteinte.'];
                return $this->json($data, $status = 406, $headers = [], $context = []);
            }   

            //controle si un autre rappel est déjà en cours
            $reminders = $this->billReminderRepository->findBy(['bill' => $bill], ['id' => 'DESC']); //important laisser le tri en DESC
                foreach ($reminders as $key => $value) {
                    //control si le rappel est encore dans les temps de paiement
                    //ajout du temps de paiement pour le rappel
                    $endDateReminder = $value->getReminderAt()->add(new \DateInterval('P'.$value->getBillReminderCondition()->getDayForPaid().'D'));

                    if($endDateReminder > $now){
                        $data = ['status' => 406, 'message' => 'La date d\'échéance du rappel n\'est pas encore atteinte.'];
                        return $this->json($data, $status = 406, $headers = [], $context = []);
                    }   

                    //si pas de retour alors le rappel est arrivé à expiration, on le créer
                    }

            //création du rappel
            $entityManager = $this->doctrine->getManager();
            $reminder = new BillReminder();
            $reminder
                ->setBill($bill)
                ->setBillReminderCondition($billReminderCondition)
                ->setReminderAt($now);

            $bill
                ->setReminderNumber($bill->getReminderNumber()+1);
            
            $bill->getBillStatut()->setBillStatutName($this->billStatutNameRepository->findOneBy(['id' => 3]));

            $entityManager->persist($bill);
            $entityManager->persist($reminder);

            $entityManager->flush();

            $data = ['status' => 200, 'message' => 'Création du rappel effectué'];
            return $this->json($data, $status = 200, $headers = [], $context = []);
    }
}
