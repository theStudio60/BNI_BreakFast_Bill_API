<?php
namespace App\Serializer;

/**
 * Cette fonction est appelée lorsque une erreur intervient
 * @return FlattenException
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */

use Symfony\Component\ErrorHandler\Exception\FlattenException;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class ErrorNormalizer implements NormalizerInterface
{
    public function normalize($exception, string $format = null, array $context = []): array
    {
        return [
            'content' => 'This is my custom problem normalizer.',
            'exception'=> [
                'message' => $exception->getMessage(),
                'code' => $exception->getStatusCode(),
            ],
        ];
    }

    public function supportsNormalization($data, string $format = null, array $context = []): bool
    {
        return $data instanceof FlattenException;
    }
}