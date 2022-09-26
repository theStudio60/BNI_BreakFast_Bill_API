<?php 

namespace App\Entity;

use App\Controller\VcardParserAPI;
use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;

#[ApiResource(
    collectionOperations: [
        'VcardParser' => [
        'method' => 'POST',
        'path' => '/vcard/parser',
        'controller' => VcardParserAPI::class,
        'deserialize' => false, 
        'openapi_context' => [
            'summary'     => 'Renvoie JSON data de la Vcard',
            'description' => "",
            'requestBody' => [
                'content' => [
                    'multipart/form-data' => [
                        'schema'  => [
                            'type'       => 'object',
                            'properties' =>
                                [
                                    'file' => ['type' => 'file'],
                                ],
                        ],
                        'example' => [
                            'file' => 'Fichier Vcard .vcf',
                        ],
                    ],
                ],
            ],
        ],
    ]
    ],
    itemOperations: []

)]

class VcardParser{

    #[ApiProperty(
        identifier: true,
        description: "Fichier Vcard"
    )]
    private string $file;

    public function __construct(
        string $file
    ){
        $this->file = $file;
    }


}