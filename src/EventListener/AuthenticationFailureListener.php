<?php
namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationFailureEvent;
use Lexik\Bundle\JWTAuthenticationBundle\Response\JWTAuthenticationFailureResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\EventDispatcher\Event;

/**
 * Renvoi un message d'erreur personnalisé si l'identifiant n'est pas correct lors du login
 * inisialisé dans config/services.yaml
 */
class AuthenticationFailureListener {
    /**
     * @param AuthenticationFailureEvent $event
     */
    function onAuthenticationFailureResponse(AuthenticationFailureEvent $event)
    {
        $data = [
            // data supplémentaire
        ];

        $response = new JWTAuthenticationFailureResponse('Identifiant erroné, veuillez controller votre nom d\'utilisateur / mot de passe !', JsonResponse::HTTP_UNAUTHORIZED);
        $response->setData($data);

        $event->setResponse($response);
    }
}