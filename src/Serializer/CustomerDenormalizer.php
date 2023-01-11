<?php

namespace App\Serializer;

/**
 * Cette fonction est appelée lorsque l'entité implémente l'intérface CustomerInterface
 * @return Customer
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */

use App\Entity\Customer;
use App\Entity\Membership;
use App\Entity\CustomerSession;
use App\Repository\UserRepository;
use App\OInterface\CustomerInterface;
use App\Repository\SessionRepository;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface;

class CustomerDenormalizer implements ContextAwareDenormalizerInterface, DenormalizerAwareInterface
{

    use DenormalizerAwareTrait;

    function __construct(
        private Security $security,
        private UserRepository $userRepository,
        private SessionRepository $sessionRepository
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
        return $reflectionClass->implementsInterface(CustomerInterface::class) && $allreadycalled === false;
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
        $customer = $this->denormalizer->denormalize($data, $type, $format, $context);

        $user = $this->userRepository->findOneBy(['id' => $this->security->getUser()]);
        $asssociation = $user->getAssociation();
        $memberShipAt = new \DateTimeImmutable($data['memberShip_at']);
        //set des valeurs
        $customer->setAssociation($asssociation);
        $customer->setCreatedBy($user);
        $customer->setMembership(new Membership($memberShipAt));

        //ajout du customers aux futures sessions
        //selection des session disponible entre le membership et la date de la session
        $sessions = $this->sessionRepository->findByAtDone(
            $asssociation,
            $customer->getMembership()->getMembershipAt(),
            $customer->getMembership()->getMembershipDoneAt()
        );
        foreach ($sessions as $key => $value) {
            $customerSession = new CustomerSession();
            $customerSession
                ->setCustomer($customer)
                ->setSession($value);
            $customer->addCustomerSession($customerSession);
        }


        return $customer;
    }

    private function allReadyCalledKey(string $key)
    {
        return $key;
    }
}
