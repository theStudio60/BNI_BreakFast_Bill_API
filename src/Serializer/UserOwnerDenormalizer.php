<?php

namespace App\Serializer;

/**
 * Cette fonction est étendue par BillInterface
 * set user dans Bill (setCreatedBy)
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */

use App\OInterface\UserOwnerInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface;

class UserOwnerDenormalizer implements ContextAwareDenormalizerInterface, DenormalizerAwareInterface
{

    use DenormalizerAwareTrait;
    private const USERALLREADYCALLED = "USERALLREADYCALLED";

    function __construct(private Security $security)
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
        return $reflectionClass->implementsInterface(UserOwnerInterface::class) && $allreadycalled === false;
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
        $obj = $this->denormalizer->denormalize($data, $type, $format, $context);

        $user = $this->security->getUser();
        $obj->setCreatedBy($user);

        return $obj;
    }

    private function allReadyCalledKey(string $key)
    {
        return self::USERALLREADYCALLED . $key;
    }
}
