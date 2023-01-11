<?php

namespace App\Serializer;

/**
 * Cette fonction est appelée lorsque l'entité implémente l'intérface BillReminderInterface
 * @return BillReminder
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */

use App\Entity\BillReminder;
use App\Repository\BillRepository;
use App\Repository\UserRepository;
use App\OInterface\BillReminderInterface;
use Doctrine\Persistence\ManagerRegistry;
use App\Repository\BillReminderRepository;
use App\Repository\BillStatutNameRepository;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\BillReminderConditionRepository;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface;

class BillReminderDenormalizer implements ContextAwareDenormalizerInterface, DenormalizerAwareInterface
{

    use DenormalizerAwareTrait;

    function __construct(
        private Security $security,
        private UserRepository $userRepository,
        private BillRepository $billRepository,
        private BillReminderRepository $billReminderRepository,
        private BillReminderConditionRepository $billReminderConditionRepository,
        private BillStatutNameRepository $billStatutNameRepository,
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
        return $reflectionClass->implementsInterface(BillReminderInterface::class) && $allreadycalled === false;
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
        $context[$this->allReadyCalledKey($type)] = true;
        $billReminder = $this->denormalizer->denormalize($data, $type, $format, $context);

        $user = $this->userRepository->findOneBy(['id' => $this->security->getUser()]);
        $bill = $this->billRepository->findOneBy(['id' => $data['bill_id'], 'association' => $user->getAssociation()]);
        $billReminderCondition = $this->billReminderConditionRepository->findOneBy(['id' => $data['billReminderCondition_id'], 'association' => $user->getAssociation()]);

        if ($bill === null) {
            $data = ['code' => 500, 'message' => 'Facture introuvable.'];
            return new JsonResponse($data, 500);
        }
        if ($billReminderCondition === null) {
            $data = ['code' => 500, 'message' => 'Condition de rappel introuvable.'];
            return new JsonResponse($data, 500);
        }

        $now = new \DateTimeImmutable();

        //controle de la date d'échéance de la facture
        if ($bill->getToAt() > $now) {
            $data = ['code' => 406, 'message' => 'La date d\'échéance n\'est pas encore atteinte.'];
            return new JsonResponse($data, 406);
        }

        //controle si un autre rappel est déjà en cours
        $reminders = $this->billReminderRepository->findBy(['bill' => $bill], ['id' => 'DESC']); //important laisser le tri en DESC
        foreach ($reminders as $key => $value) {
            //control si le rappel est encore dans les temps de paiement
            //ajout du temps de paiement pour le rappel
            $endDateReminder = $value->getReminderAt()->add(new \DateInterval('P' . $value->getBillReminderCondition()->getDayForPaid() . 'D'));

            if ($endDateReminder > $now) {
                $data = ['code' => 406, 'message' => 'La date d\'échéance du rappel n\'est pas encore atteinte.'];
                return new JsonResponse($data, 406);
            }

            //si pas de retour alors le rappel est arrivé à expiration, on le créer
        }

        //création du rappel
        $billReminder
            ->setBill($bill)
            ->setBillReminderCondition($billReminderCondition)
            ->setReminderAt($now)
            ->setCreatedBy($user);

        $bill
            ->setReminderNumber($bill->getReminderNumber() + 1)
            ->setReminderAmount($bill->getReminderAmount() + $billReminderCondition->getAddAmount());

        $bill->getBillStatut()->setBillStatutName(
            $this->billStatutNameRepository->findOneBy(['id' => 3])
        );

        return $billReminder;
    }

    private function allReadyCalledKey(string $key)
    {
        return $key;
    }
}
