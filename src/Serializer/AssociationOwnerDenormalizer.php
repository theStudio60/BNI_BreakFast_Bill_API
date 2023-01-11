<?php

namespace App\Serializer;

/**
 * Cette fonction est appelée lorsque l'entité implémente l'intérface AssociationOwnerInterface
 * @return Association liée au User
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */

use App\Entity\Association;
use App\Repository\UserRepository;
use App\OInterface\AssociationOwnerInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface;

class AssociationOwnerDenormalizer implements ContextAwareDenormalizerInterface, DenormalizerAwareInterface
{

    use DenormalizerAwareTrait;

    function __construct(private Security $security, private UserRepository $userRepository)
    {
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
        return $reflectionClass->implementsInterface(AssociationOwnerInterface::class) && $allreadycalled === false;
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
        $association = $this->denormalizer->denormalize($data, $type, $format, $context);

        $user = $this->userRepository->findOneBy(['id' => $this->security->getUser()]);
        $asssociation = $user->getAssociation();
        $association->setAssociation($asssociation);

        return $association;
    }

    private function allReadyCalledKey(string $key)
    {
        return $key;
    }
}
