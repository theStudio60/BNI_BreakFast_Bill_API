<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\OInterface\SessionInterface;
use App\Repository\SessionRepository;
use ApiPlatform\Core\Annotation\ApiFilter;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use App\OInterface\ForQueryAssociationOwnerInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

#[ORM\Entity(repositoryClass: SessionRepository::class)]
#[ApiFilter(SearchFilter::class, properties:['day_at' => 'partial'])]
#[ApiFilter(DateFilter::class, properties:['day_at'])]
#[ApiResource(
    normalizationContext:['groups' => ['session:get:read']],
    attributes: ["pagination_items_per_page" => 10, "pagination_maximum_items_per_page" => 30],
    collectionOperations: [
        'get' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut consulter les session',
            'openapi_context' => [
                'summary'     => 'Retourne la liste des sessions',
            ]
        ],  
        'post' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut ajouter une session',
            'openapi_context' => [
                'summary'     => 'Créer une nouvelle session',
                'description' => "",
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema'  => [
                                'type'       => 'object',
                                'properties' =>
                                    [
                                        'dayAt' => ['type' => 'DateTimeImmutable'],
                                        'toDone' => ['type' => 'boolean'],
                                        'sessionType_id' => ['type' => 'int']
                                    ],
                            ],
                            'example' => [
                                'dayAt' => '24.08.2022 18:30:00 [Date et heure de la session]',
                                'toDone' => 'true [à lieu, true / false]',
                                'sessionType_id' => '1 [id sessionType] (int)',
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
            "security_message" => "Seul un utilisateur peut consulter les sessions",
            'openapi_context' => [
                'summary'     => 'Retourne une session',
            ]
        ],
        'put' => [
            "security" => "is_granted('ROLE_USER')",
            "security_message" => "Seul un utilisateur peut modifier une session",
            'openapi_context' => [
                'summary'     => 'Modifier une session',
                'description' => "",
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema'  => [
                                'type'       => 'object',
                                'properties' =>
                                    [
                                        'dayAt' => ['type' => 'DateTimeImmutable'],
                                        'toDone' => ['type' => 'boolean'],
                                        'sessionType_id' => ['type' => 'int']
                                    ],
                            ],
                            'example' => [
                                'dayAt' => '24.08.2022 18:30:00 [Date et heure de la session]',
                                'toDone' => 'true [à lieu, true / false]',
                                'sessionType_id' => '1 [id sessionType] (int)',
                            ],
                        ],
                    ],
                ],
            ],            
        ]
    ],
    )] 
class Session implements SessionInterface, ForQueryAssociationOwnerInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['session:get:read', 'customerSessionget:read'])]
    private ?int $id = null;

    #[ORM\Column]
    #[Groups(['session:get:read', 'customerSessionget:read'])]
    private ?\DateTimeImmutable $day_at = null;   

    #[ORM\Column]
    #[Groups(['session:get:read'])]
    private ?bool $to_done = null;

    #[ORM\ManyToOne(inversedBy: 'sessions')]
    #[Groups(['session:get:read'])]
    private ?User $created_by = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups(['session:get:read', 'customerSessionget:read'])]
    private ?SessionType $session_type = null;

    #[ORM\ManyToOne(inversedBy: 'sessions')]
    private ?Association $association = null;

    #[ORM\OneToMany(mappedBy: 'session', cascade: ['persist', 'remove'] , targetEntity: CustomerSession::class)]
    private Collection $customerSessions;

    public function __construct()
    {
        $this->customerSessions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDayAt(): ?\DateTimeImmutable
    {
        return $this->day_at;
    }

    public function setDayAt(\DateTimeImmutable $day_at): self
    {
        $this->day_at = $day_at;

        return $this;
    }

    public function isToDone(): ?bool
    {
        return $this->to_done;
    }

    public function setToDone(bool | int $to_done): self
    {
        $this->to_done = $to_done;

        return $this;
    }

    public function getCreatedBy(): ?User
    {
        return $this->created_by;
    }

    public function setCreatedBy(?User $created_by): self
    {
        $this->created_by = $created_by;

        return $this;
    }

    public function getSessionType(): ?SessionType
    {
        return $this->session_type;
    }

    public function setSessionType(?SessionType $session_type): self
    {
        $this->session_type = $session_type;

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

    /**
     * @return Collection<int, CustomerSession>
     */
    public function getCustomerSessions(): Collection
    {
        return $this->customerSessions;
    }

    public function addCustomerSession(CustomerSession $customerSession): self
    {
        if (!$this->customerSessions->contains($customerSession)) {
            $this->customerSessions->add($customerSession);
            $customerSession->setSession($this);
        }

        return $this;
    }

    public function removeCustomerSession(CustomerSession $customerSession): self
    {
        if ($this->customerSessions->removeElement($customerSession)) {
            // set the owning side to null (unless already changed)
            if ($customerSession->getSession() === $this) {
                $customerSession->setSession(null);
            }
        }

        return $this;
    }
}
