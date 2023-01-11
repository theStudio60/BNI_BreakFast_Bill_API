<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\SessionPlaceRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use App\OInterface\AssociationOwnerInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use App\OInterface\ForQueryAssociationOwnerInterface;

#[ORM\Entity(repositoryClass: SessionPlaceRepository::class)]
#[ApiResource(
    normalizationContext:['groups' => ['sessionPlace:get:read']],
    collectionOperations: [
        'get' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut consulter les places de session',
            'openapi_context' => [
                'summary'     => 'Retourne la liste des places de session',
            ]
        ],  
        'post' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut ajouter une place de session',
            'openapi_context' => [
                'summary'     => 'Créer une nouvelle place de session',
                'description' => "",
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema'  => [
                                'type'       => 'object',
                                'properties' =>
                                    [
                                        'street' => ['type' => 'decimal'],
                                        'streetNumber' => ['type' => 'string'],
                                        'zipCode' => ['type' => 'int'],
                                        'city' => ['type' => 'string'],
                                    ],
                            ],
                            'example' => [
                                'street' => 'Rue de la poste [Rue / Chemin]',
                                'streetNumber' => '3A [Numéro de rue]',
                                'zipCode' => '1020 [Code Postal] (int)',
                                'city' => 'Lausanne [Ville]',
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
    itemOperations:[
        'get' => [
            "security" => "is_granted('ROLE_USER')",
            "security_message" => "Seul un utilisateur peut consulter les places de session",
            'openapi_context' => [
                'summary'     => 'Retourne une place de session',
            ]
        ],
        'put' => [
            "security" => "is_granted('ROLE_USER')",
            "security_message" => "Seul un utilisateur peut modifier une place de session",
            'openapi_context' => [
                'summary'     => 'Modifier une place de session',
                'description' => "",
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema'  => [
                                'type'       => 'object',
                                'properties' =>
                                    [
                                        'street' => ['type' => 'decimal'],
                                        'streetNumber' => ['type' => 'string'],
                                        'zipCode' => ['type' => 'int'],
                                        'city' => ['type' => 'string'],
                                    ],
                            ],
                            'example' => [
                                'street' => 'Rue de la poste [Rue / Chemin]',
                                'streetNumber' => '3A [Numéro de rue]',
                                'zipCode' => '1020 [Code Postal] (int)',
                                'city' => 'Lausanne [Ville]',
                            ],
                        ],
                    ],
                ],
            ],            
        ]
    ],
    )]    
class SessionPlace implements AssociationOwnerInterface, ForQueryAssociationOwnerInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['sessionPlace:get:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['sessionPlace:get:read', 'sessionType:get:read', 'session:get:read'])]
    private ?string $street = null;

    #[ORM\Column(length: 10, nullable: true)]
    #[Groups(['sessionPlace:get:read', 'sessionType:get:read', 'session:get:read'])]
    private ?string $street_number = null;

    #[ORM\Column]
    #[Groups(['sessionPlace:get:read', 'sessionType:get:read', 'session:get:read'])]
    private ?int $zip_code = null;

    #[ORM\Column(length: 255)]
    #[Groups(['sessionPlace:get:read', 'sessionType:get:read', 'session:get:read'])]
    private ?string $city = null;

    #[ORM\ManyToOne(inversedBy: 'sessionPlaces')]
    private ?Association $association = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function getStreetNumber(): ?string
    {
        return $this->street_number;
    }

    public function setStreetNumber(?string $street_number): self
    {
        $this->street_number = $street_number;

        return $this;
    }

    public function getZipCode(): ?int
    {
        return $this->zip_code;
    }

    public function setZipCode(int $zip_code): self
    {
        $this->zip_code = $zip_code;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getAssociation(): ?Association
    {
        return $this->association;
    }

    public function setAssociation(?Association $association): self
    {
        $this->association = $association;

        return $this;
    }
}
