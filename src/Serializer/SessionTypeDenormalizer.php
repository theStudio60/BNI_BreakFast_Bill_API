<?php

namespace App\Serializer;

/**
 * Cette fonction est appelée lorsque l'entité implémente l'intérface SessionTypeInterface
 * @return SessionType
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */

use App\Entity\SessionType;
use App\Repository\UserRepository;
use App\OInterface\SessionTypeInterface;
use App\Repository\SessionPlaceRepository;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface;

class SessionTypeDenormalizer implements ContextAwareDenormalizerInterface, DenormalizerAwareInterface
{

    use DenormalizerAwareTrait;

    function __construct(
        private Security $security,
        private UserRepository $userRepository,
        private SessionPlaceRepository $sessionPlace
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
        return $reflectionClass->implementsInterface(SessionTypeInterface::class) && $allreadycalled === false;
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
        $sessionType = $this->denormalizer->denormalize($data, $type, $format, $context);

        $user = $this->userRepository->findOneBy(['id' => $this->security->getUser()]);
        $asssociation = $user->getAssociation();
        $sessionPlace = $this->sessionPlace->findOneBy(['id' => $data['sessionPlace_id'], 'association' => $asssociation]);
        //controle que la SessionPlace existe bien
        if ($sessionPlace === null) {
            return new JsonResponse(['message' => 'SessionPlace inexistante', 'code' => 404], 404);
        }
        //set des valeurs      
        $sessionType
            ->setAssociation($asssociation)
            ->setSessionPlace($sessionPlace);

        return $sessionType;
    }

    private function allReadyCalledKey(string $key)
    {
        return $key;
    }
}
