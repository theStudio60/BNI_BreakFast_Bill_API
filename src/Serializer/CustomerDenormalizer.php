<?php

namespace App\Serializer;

use App\Entity\Membership;
use App\Repository\UserRepository;
use App\OInterface\CustomerInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface;

class CustomerDenormalizer implements ContextAwareDenormalizerInterface, DenormalizerAwareInterface{

    use DenormalizerAwareTrait;

	function __construct(private Security $security, private UserRepository $userRepository) {
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
        array $context = [])
    {
        $context[$this->allReadyCalledKey($type)] = true;
        $customer = $this->denormalizer->denormalize($data, $type, $format, $context);

        $user = $this->userRepository->findOneBy(['id' => $this->security->getUser()]);
        $asssociation = $user->getAssociation() ;        

            //set des valeurs
            $customer->setAssociation($asssociation);
            $customer->setCreatedBy($user);
            $customer->setMembership(new Membership());

        return $customer;
    }

    private function allReadyCalledKey(string $key){
        return $key;
    }

}