<?php

namespace App\Controller;

/**
 * Cette class parse un fichier Vcard .vcf et renvoie les data dans un tableau JSON
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */

use Sabre\VObject;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


#[AsController]
final class VcardParserAPI extends AbstractController
{

    /**
     * Parse fichier Vcard et renvoie un JSON avec les datas
     *
     * @param Request $request
     * @return void
     */
    public function __invoke(Request $request): JsonResponse
    {
        if(!$request->files->get("file")){          
            $response = new JsonResponse(['message' => 'Erreur, fichier introuvable'], 500);
        }else{
            //récupération du fichier
            $file = $request->files->get("file");

            //dossier et nom du fichier télécharger
            $directory = './vcard/';
            $filename = 'vcard';

            //copie du fichier dans le dossier spécifier
            $file->move($directory, $filename.'.'.$file->getClientOriginalExtension());

            $vcard = VObject\Reader::read(fopen($directory.$filename.'.'.$file->getClientOriginalExtension(),'r'));

            $adr = explode(";", $vcard->ADR);
            $name = explode(";", $vcard->N);

                $phone = $this->toString($vcard->TEL);
                $company = $this->toString($vcard->ORG);
                $email = $this->toString($vcard->EMAIL);        
            

            $values = [
                'company' => $company,
                'firstname' => $name[1],
                'lastname' => $name[0],
                'email' => $email,
                'street' => $adr[2],
                'city' => $adr[3],
                'zipCode' => $adr[5],
                'phone' => $phone
            ];

            $response = new JsonResponse(['data' => $values]);;
        }
        
        return $response;
    }

    function toString($datas): ?string{
        if(!$datas){
            return '';
        }
        foreach($datas as $data) {
            $string = ''.$data;
        }   
        return $string;
    }
}