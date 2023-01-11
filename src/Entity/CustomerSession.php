<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CustomerSessionRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

#[ORM\Entity(repositoryClass: CustomerSessionRepository::class)]
#[ApiFilter(SearchFilter::class, properties:['customer.id' => 'exact'])]
#[ApiFilter(DateFilter::class, properties: ['session.day_at'])]
#[ApiResource(
    normalizationContext:['groups' => ['customerSessionget:read']],
    collectionOperations:[
        'get' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut consulter les sessions utilisateur',
            'openapi_context' => [
                'summary'     => 'Retourne la liste des sessions utilisateur',
            ]
        ],
        'post' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut ajouter une session utilisateur',
            'openapi_context' => [
                'summary'     => 'Créer une nouvelle sessions utilisateur',
                'description' => "",
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema'  => [
                                'type'       => 'object',
                                'properties' =>
                                    [
                                    'session_id' => ['type' => 'int'],
                                    'is_present' => ['type' => 'boolean']
                                    ],
                            ],
                            'example' => [
                                'session_id' => '1 [ID de la session] (int)',
                                'is_present' => 'true [Présent ou non (true or false)] (boolean)'
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
            "security_message" => "Seul un utilisateur peut consulter les session utilisateur",
            'openapi_context' => [
                'summary'     => 'Retourne une sessions utilisateur',
            ]
        ],
        'put' => [
            "security" => "is_granted('ROLE_USER')",
            "security_message" => "Seul un utilisateur peut modifier les sessions utilisateur",
            'openapi_context' => [
                'summary'     => 'Modifier sessions utilisateur',
                'description' => "",
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema'  => [
                                'type'       => 'object',
                                'properties' =>
                                    [
                                        'session_id' => ['type' => 'int'],
                                        'is_present' => ['type' => 'boolean']
                                    ],
                            ],
                            'example' => [
                                'session_id' => '1 [ID de la session] (int)',
                                'is_present' => 'true [Présent ou non (true or false)] (boolean)'
                            ],
                        ],
                    ],
                ],
            ],            
        ],
        'delete' => [
            "security" => "is_granted('ROLE_USER')",
            "security_message" => "Seul un utilisateur peut supprimer les sessions utilisateur",
            'openapi_context' => [
                'summary'     => 'Supprime une session utilisateur',
                'description' => "",
            ]
        ],
    ]
)]
class CustomerSession
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['customerSessionget:read'])]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'customerSessions')]
    #[Groups(['customerSessionget:read'])]
    private ?Session $session = null;

    #[ORM\ManyToOne(inversedBy: 'customerSessions')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['customerSessionget:read'])]
    private ?Customer $customer = null;

    #[ORM\Column]
    #[Groups(['customerSessionget:read'])]
    private ?bool $is_present = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function __construct()
    {
        $this->is_present = true;
    }

    public function getSession(): ?Session
    {
        return $this->session;
    }

    public function setSession(?Session $session): self
    {
        $this->session = $session;

        return $this;
    }

    public function getCustomer(): ?Customer
    {
        return $this->customer;
    }

    public function setCustomer(?Customer $customer): self
    {
        $this->customer = $customer;

        return $this;
    }

    public function isIsPresent(): ?bool
    {
        return $this->is_present;
    }

    public function setIsPresent(bool $is_present): self
    {
        $this->is_present = $is_present;

        return $this;
    }
}
