<?php

namespace App\Serializer;

/**
 * Cette fonction est appelée lorsque l'entité implémente l'intérface SessionInterface
 * @return Session
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */

use App\Entity\Session;
use App\Entity\CustomerSession;
use App\Repository\UserRepository;
use App\OInterface\SessionInterface;
use App\Repository\CustomerRepository;
use App\Repository\SessionTypeRepository;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface;

class SessionDenormalizer implements ContextAwareDenormalizerInterface, DenormalizerAwareInterface
{

    use DenormalizerAwareTrait;

    function __construct(
        private Security $security,
        private UserRepository $userRepository,
        private SessionTypeRepository $sessionTypeRepository,
        private CustomerRepository $customerRepository
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
        return $reflectionClass->implementsInterface(SessionInterface::class) && $allreadycalled === false;
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
        $session = $this->denormalizer->denormalize($data, $type, $format, $context);

        $user = $this->userRepository->findOneBy(['id' => $this->security->getUser()]);
        $asssociation = $user->getAssociation();
        $sessionType = $this->sessionTypeRepository->findOneBy(['id' => $data['sessionType_id'], 'association' => $asssociation]);
        $date = new \DateTimeImmutable($data['dayAt']);
        $customers = $this->customerRepository->findBy(['association' => $asssociation]);
        //controle que la sessionType existe bien
        if ($sessionType === null) {
            return new JsonResponse(['message' => 'SessionType inexistante', 'code' => 404], 404);
        }
        //set des valeurs    
        $session
            ->setAssociation($asssociation)
            ->setCreatedBy($user)
            ->setSessionType($sessionType)
            ->setDayAt($date);

        foreach ($customers as $key => $customer) {
            //on control que le membership soit bien actif pour la date de la session puis on l'ajoute
            if ($customer->getMembership()->getMembershipDoneAt() > $data && $customer->getMembership()->getMembershipAt() < $date) {
                $customerSession = new CustomerSession();
                $customerSession
                    ->setCustomer($customer)
                    ->setIsPresent(true)
                    ->setSession($session);
                $session->addCustomerSession($customerSession);
            }
        }
        return $session;
    }

    private function allReadyCalledKey(string $key)
    {
        return $key;
    }
}
