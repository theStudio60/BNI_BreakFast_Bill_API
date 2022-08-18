<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CustomerSessionRepository;

#[ORM\Entity(repositoryClass: CustomerSessionRepository::class)]
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
