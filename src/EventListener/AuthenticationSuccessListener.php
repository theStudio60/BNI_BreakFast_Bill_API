<?php
namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * Retourne des data supplémentaire non encodée avec la clef JWT si le login est correct
 * inisialisé dans config/services.yaml
 */
class AuthenticationSuccessListener{
    /**
     * @param AuthenticationSuccessEvent $event
     */
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        $data = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof UserInterface) {
            return;
        }

    //ajout de data dans le token (non cryptée)
        $data['data'] = array(
            "userid" => $user->getId()
        );

        //on inject les data si il y en a
        $data?$event->setData($data):null;
    }
}