<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ItemRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: ItemRepository::class)]
#[ApiResource]
class Item
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 2)]
    private ?string $price_of = null;

    #[ORM\ManyToMany(targetEntity: Bill::class, inversedBy: 'items')]
    private Collection $bill;

    #[ORM\ManyToOne(inversedBy: 'items')]
    private ?Association $association = null;

    public function __construct()
    {
        $this->bill = new ArrayCollection();
    }

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

    public function getPriceOf(): ?string
    {
        return $this->price_of;
    }

    public function setPriceOf(string $price_of): self
    {
        $this->price_of = $price_of;

        return $this;
    }

    /**
     * @return Collection<int, Bill>
     */
    public function getBill(): Collection
    {
        return $this->bill;
    }

    public function addBill(Bill $bill): self
    {
        if (!$this->bill->contains($bill)) {
            $this->bill->add($bill);
        }

        return $this;
    }

    public function removeBill(Bill $bill): self
    {
        $this->bill->removeElement($bill);

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
