<?php

namespace App\Serializer;

use App\Repository\UserRepository;
use App\OInterface\SessionInterface;
use App\Repository\SessionTypeRepository;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface;

class SessionDenormalizer implements ContextAwareDenormalizerInterface, DenormalizerAwareInterface{

    use DenormalizerAwareTrait;

	function __construct(
        private Security $security, 
        private UserRepository $userRepository,
        private SessionTypeRepository $sessionTypeRepository
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
        array $context = [])
    {
        $context[$this->allReadyCalledKey($type)] = true;
        $session = $this->denormalizer->denormalize($data, $type, $format, $context);

        $user = $this->userRepository->findOneBy(['id' => $this->security->getUser()]);
        $asssociation = $user->getAssociation() ; 
        $sessionType = $this->sessionTypeRepository->findOneBy(['id' => $data['sessionType_id'], 'association' => $asssociation]);
        $date = new \DateTimeImmutable($data['dayAt']);
        //controle que la sessionType existe bien
        if($sessionType === null){
            return new JsonResponse(['error' => 'SessionType inexistante', 'status' => 404], 404); 
        }
        //set des valeurs    
            $session
                ->setAssociation($asssociation)
                ->setCreatedBy($user)
                ->setSessionType($sessionType)
                ->setDayAt($date);

        return $session;
    }

    private function allReadyCalledKey(string $key){
        return $key;
    }

}