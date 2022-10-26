<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\MembershipRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use DateTimeImmutable;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: MembershipRepository::class)]
#[ApiResource(
    collectionOperations:[
        'get' => [
            'openapi_context' => [
                'summary'     => 'hidden',
            ]
        ], 
        'post' => [
            'openapi_context' => [
                'summary'     => 'hidden',
            ]
        ], 
    ],
    itemOperations:[
        'put' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut modifier une adhésion',
            'openapi_context' => [
                'summary'     => 'Modifie une adhésion d\'un utilisateur',
            ]
        ],
        'get' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut consulter une adhésion',
            'openapi_context' => [
                'summary'     => 'hidden',
            ]
        ], 
    ]
)]
class Membership
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['customer:get:read'])]
    private ?int $id = null;

    #[ORM\Column]
    #[Groups(['customer:get:read'])]
    private ?\DateTimeImmutable $membership_at = null;

    #[ORM\Column]
    #[Groups(['customer:get:read'])]
    private ?\DateTimeImmutable $membership_done_at = null;

    #[ORM\Column]
    #[Groups(['customer:get:read'])]
    private ?bool $is_active = null;

    #[ORM\OneToOne(inversedBy: 'membership', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Customer $customer = null;

    /**
     * Doit contenir la date depuis laquelle le customer et membre
     *
     * @param DateTimeImmutable $memberShipTo
     */
    public function __construct(DateTimeImmutable $memberShipTo){
        $dateTimeImmutable = $memberShipTo;
        $this->membership_at = $dateTimeImmutable;
        $this->membership_done_at = $dateTimeImmutable->add(new \DateInterval('P1Y'));
        $this->is_active = true;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMembershipAt(): ?\DateTimeImmutable
    {
        return $this->membership_at;
    }

    public function setMembershipAt(\DateTimeImmutable $membership_at): self
    {
        $this->membership_at = $membership_at;

        return $this;
    }

    public function getMembershipDoneAt(): ?\DateTimeImmutable
    {
        return $this->membership_done_at;
    }

    public function setMembershipDoneAt(\DateTimeImmutable $membership_done_at): self
    {
        $this->membership_done_at = $membership_done_at;

        return $this;
    }

    public function isIsActive(): ?bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): self
    {
        $this->is_active = $is_active;

        return $this;
    }

    public function getCustomer(): ?Customer
    {
        return $this->customer;
    }

    public function setCustomer(Customer $customer): self
    {
        $this->customer = $customer;

        return $this;
    }
    
}
