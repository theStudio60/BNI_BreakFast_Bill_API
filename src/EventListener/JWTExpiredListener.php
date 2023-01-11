<?php
namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTExpiredEvent;
use Lexik\Bundle\JWTAuthenticationBundle\Response\JWTAuthenticationFailureResponse;

/**
 * Permet la personnalisation d'un message personnalisé si le token à expiré
 * inisialisé dans config/services.yaml
 */
class JWTExpiredListener {

/**
 * @param JWTExpiredEvent $event
    */
    public function onJWTExpired(JWTExpiredEvent $event)
    {
        /** @var JWTAuthenticationFailureResponse */
        $response = $event->getResponse();

        $response->setMessage('Token expiré, veuillez vous identifié !');
    }    
}