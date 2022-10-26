<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\OInterface\SessionTypeInterface;
use App\Repository\SessionTypeRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use App\OInterface\ForQueryAssociationOwnerInterface;

#[ORM\Entity(repositoryClass: SessionTypeRepository::class)]
#[ApiResource(
    normalizationContext:['groups' => ['sessionType:get:read']],
    collectionOperations: [
        'get' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut consulter les types de session',
            'openapi_context' => [
                'summary'     => 'Retourne la liste des types de session',
            ]
        ],  
        'post' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut ajouter un type de session',
            'openapi_context' => [
                'summary'     => 'Créer un nouveau type de session',
                'description' => "",
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema'  => [
                                'type'       => 'object',
                                'properties' =>
                                    [
                                        'name' => ['type' => 'string'],
                                        'description' => ['type' => 'text'],
                                        'priceOf' => ['type' => 'string'],
                                        'sessionPlace_id' => ['type' => 'int']
                                    ],
                            ],
                            'example' => [
                                'name' => 'Assemblée extraordinaire [Nom]',
                                'description' => '[Une description du type session]',
                                'priceOf' => '15 [Prix de la session]',
                                'sessionPlace_id' => '1 [id de la sessionPlace] (int)',
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
            "security_message" => "Seul un utilisateur peut consulter les types de session",
            'openapi_context' => [
                'summary'     => 'Retourne un type de session',
            ]
        ],
        'put' => [
            "security" => "is_granted('ROLE_USER')",
            "security_message" => "Seul un utilisateur peut modifier un type de session",
            'openapi_context' => [
                'summary'     => 'Modifier un types de session',
                'description' => "",
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema'  => [
                                'type'       => 'object',
                                'properties' =>
                                    [
                                        'name' => ['type' => 'string'],
                                        'description' => ['type' => 'text'],
                                        'priceOf' => ['type' => 'string'],
                                    ],
                            ],
                            'example' => [
                                'name' => 'Assemblée extraordinaire [Nom]',
                                'description' => '[Une description du type session]',
                                'priceOf' => '15 [Prix de la session]',
                            ],
                        ],
                    ],
                ],
            ],            
        ]
    ],
    )]    
class SessionType implements SessionTypeInterface, ForQueryAssociationOwnerInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['sessionType:get:read', 'customerSessionget:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['sessionType:get:read', 'session:get:read', 'customerSessionget:read'])]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['sessionType:get:read', 'customerSessionget:read'])]
    private ?string $description = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 2)]
    #[Groups(['sessionType:get:read', 'session:get:read', 'customerSessionget:read'])]
    private ?string $price_of = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['sessionType:get:read', 'session:get:read'])]
    private ?SessionPlace $session_place = null;

    #[ORM\ManyToOne(inversedBy: 'sessionTypes')]
    private ?Association $association = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPriceOf(): ?string
    {
        return $this->price_of;
    }

    public function setPriceOf(string $price_of): self
    {
        $this->price_of = $price_of;

        return $this;
    }

    public function getSessionPlace(): ?SessionPlace
    {
        return $this->session_place;
    }

    public function setSessionPlace(?SessionPlace $session_place): self
    {
        $this->session_place = $session_place;

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
