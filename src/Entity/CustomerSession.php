<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CustomerSessionRepository;

#[ORM\Entity(repositoryClass: CustomerSessionRepository::class)]
#[ApiResource(
    normalizationContext:['groups' => ['get:read']],
    collectionOperations:[
        'get' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut consulter les sessions utilisateur',
            'openapi_context' => [
                'summary'     => 'Retourne la liste des associations',
            ]
        ],
        'post' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut ajouter une session utilisateur',
            'openapi_context' => [
                'summary'     => 'Créer une nouvelle association',
                'description' => "",
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema'  => [
                                'type'       => 'object',
                                'properties' =>
                                    [

                                    ],
                            ],
                            'example' => [

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
                'summary'     => 'Retourne une association',
            ]
        ],
        'put' => [
            "security" => "is_granted('ROLE_USER')",
            "security_message" => "Seul un utilisateur peut modifier les sessions utilisateur",
            'openapi_context' => [
                'summary'     => 'Modifier association',
                'description' => "",
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema'  => [
                                'type'       => 'object',
                                'properties' =>
                                    [

                                    ],
                            ],
                            'example' => [

                            ],
                        ],
                    ],
                ],
            ],            
        ],
        'delete'
    ],
)]
class CustomerSession
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'customerSessions')]
    private ?Session $session = null;

    #[ORM\ManyToOne(inversedBy: 'customerSessions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Customer $customer = null;

    #[ORM\Column]
    private ?bool $is_present = null;

    public function getId(): ?int
    {
        return $this->id;
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
