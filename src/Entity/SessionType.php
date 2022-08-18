<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\SessionTypeRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use App\OwnerInterface\AssociationOwnerInterface;

#[ORM\Entity(repositoryClass: SessionTypeRepository::class)]
class SessionType implements AssociationOwnerInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 2)]
    private ?string $price_of = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
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
