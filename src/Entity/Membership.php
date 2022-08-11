<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\MembershipRepository;
use ApiPlatform\Core\Annotation\ApiResource;

#[ORM\Entity(repositoryClass: MembershipRepository::class)]
#[ApiResource]
class Membership
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $membership_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $membership_done_at = null;

    #[ORM\Column]
    private ?bool $is_active = null;

    #[ORM\OneToOne(inversedBy: 'membership', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Customer $customer = null;

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
