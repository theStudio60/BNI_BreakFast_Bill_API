<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\BillStatutRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BillStatutRepository::class)]
class BillStatut
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(inversedBy: 'billStatut', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Bill $bill = null;

    //valeur du montant déjà payé par le client
    #[ORM\Column(type: Types::DECIMAL, precision: 6, scale: 2, nullable: true)]
    #[Groups(['bill:get:read'])]
    private ?string $balance = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['bill:get:read'])]
    private ?\DateTimeImmutable $updated_at = null;

    #[ORM\ManyToOne]
    #[Groups(['bill:get:read'])]
    private ?User $updated_by = null;

    #[ORM\ManyToOne]
    #[Groups(['bill:get:read'])]
    private ?BillStatutName $bill_statut_name = null;

    public function __construct(){
       $this->updated_at = new \DateTimeImmutable(); 
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBill(): ?Bill
    {
        return $this->bill;
    }

    public function setBill(Bill $bill): self
    {
        $this->bill = $bill;

        return $this;
    }

    public function getBalance(): ?string
    {
        return $this->balance;
    }

    public function setBalance(?string $balance): self
    {
        $this->balance = $balance;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?\DateTimeImmutable $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getUpdatedBy(): ?User
    {
        return $this->updated_by;
    }

    public function setUpdatedBy(?User $updated_by): self
    {
        $this->updated_by = $updated_by;

        return $this;
    }

    public function getBillStatutName(): ?BillStatutName
    {
        return $this->bill_statut_name;
    }

    public function setBillStatutName(?BillStatutName $bill_statut_name): self
    {
        $this->bill_statut_name = $bill_statut_name;

        return $this;
    }
}
