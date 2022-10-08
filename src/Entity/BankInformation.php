<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\BankInformationRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use App\OInterface\ForQueryAssociationOwnerInterface;

#[ORM\Entity(repositoryClass: BankInformationRepository::class)]
class BankInformation implements ForQueryAssociationOwnerInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $QR_IBAN = null;

    #[ORM\Column(length: 255)]
    private ?string $accountNumber = null;

    #[ORM\Column(length: 255)]
    private ?string $bankName = null;

    #[ORM\Column(length: 3)]
    #[Groups(["get:read", "user:get:read"])]
    private ?string $currency = null;

    #[ORM\OneToOne(inversedBy: 'bankInformation', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?Association $association = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQRIBAN(): ?string
    {
        return $this->QR_IBAN;
    }

    public function setQRIBAN(string $QR_IBAN): self
    {
        $this->QR_IBAN = $QR_IBAN;

        return $this;
    }

    public function getAccountNumber(): ?string
    {
        return $this->accountNumber;
    }

    public function setAccountNumber(string $accountNumber): self
    {
        $this->accountNumber = $accountNumber;

        return $this;
    }

    public function getBankName(): ?string
    {
        return $this->bankName;
    }

    public function setBankName(string $bankName): self
    {
        $this->bankName = $bankName;

        return $this;
    }

    public function getCurrency(): ?string
    {
        return $this->currency;
    }

    public function setCurrency(string $currency): self
    {
        $this->currency = $currency;

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
