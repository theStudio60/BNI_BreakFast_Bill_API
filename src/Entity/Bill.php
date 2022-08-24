<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\OInterface\BillInterface;
use App\Repository\BillRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use App\OInterface\ForQueryAssociationOwnerInterface;

#[ORM\Entity(repositoryClass: BillRepository::class)]
#[ApiResource( 
    normalizationContext:['groups' => ['bill:get:read']],
    collectionOperations:[
    'get' => [
        'security' => 'is_granted("ROLE_USER")',
        'security_message' => 'Seul un utilisateur peut consulter les factures',
        'openapi_context' => [
            'summary'     => 'Retourne la liste des factures',
        ]
    ],  
    'post' => [
        'security' => 'is_granted("ROLE_USER")',
        'security_message' => 'Seul un utilisateur peut ajouter une facture',
        'openapi_context' => [
            'summary'     => 'Créer une nouvelle facture',
            'description' => "",
            'requestBody' => [
                'content' => [
                    'application/json' => [
                        'schema'  => [
                            'type'       => 'object',
                            'properties' =>
                                [
                                    'customer_id' => ['type' => 'int'],
                                    'amount' => ['type' => 'decimal'],
                                    'itemList' => ['type' => 'array'],
                                ],
                        ],
                        'example' => [
                            'customer_id' => '1 [ID client]',
                            'amount' => '99.00 [Montant de la facture]',
                            'itemList' => '[1, 2, 3] [array d\'items]'
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
        "security_message" => "Seul un utilisateur peut consulter les factures",
        'openapi_context' => [
            'summary'     => 'Retourne une facture',
        ]
    ],
    'put' => [
        "security" => "is_granted('ROLE_USER')",
        "security_message" => "Seul un utilisateur peut modifier une facture",
        'openapi_context' => [
            'summary'     => 'Modifier une facture',
            'description' => "",
            'requestBody' => [
                'content' => [
                    'application/json' => [
                        'schema'  => [
                            'type'       => 'object',
                            'properties' =>
                                [
                                    'amount',
                                    'isArchived' => ['type' => 'boolean'],
                                    'balance' => ['type' => 'decimal'],
                                    'billStatutName' => ['type' => 'int']
                                ],
                        ],
                        'example' => [
                            'amount' => '99.00 [Montant de la facture]',
                            'isArchived' => 'false [Archivée: true ou non archivée: false]',
                            'balance' => '10.00 [Montant partiel dàjà payé ou null]',
                            'billStatutName' => '1 [1 = En attente ou 2 = Payée] (int)'
                        ],
                    ],
                ],
            ],
        ],            
    ]
],
)]

class Bill implements BillInterface, ForQueryAssociationOwnerInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'bills')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['bill:get:read'])]
    private ?User $created_by = null;

    #[ORM\Column]
    #[Groups(['bill:get:read'])]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column]
    #[Groups(['bill:get:read'])]
    private ?\DateTimeImmutable $from_at = null;

    #[ORM\Column]
    #[Groups(['bill:get:read'])]
    private ?\DateTimeImmutable $to_at = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 6, scale: 2)]
    #[Groups(['bill:get:read'])]
    private ?string $amount = null;

    #[ORM\Column]
    #[Groups(['bill:get:read'])]
    private ?bool $is_archived = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['bill:get:read'])]
    private ?int $reminder_number = null;

    #[ORM\ManyToOne(inversedBy: 'bills')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Association $association = null;

    #[ORM\OneToOne(mappedBy: 'bill', cascade: ['persist', 'remove'])]
    #[Groups(['bill:get:read'])]
    private ?BillStatut $billStatut = null;

    #[ORM\OneToMany(mappedBy: 'bill', targetEntity: BillReminder::class)]
    #[Groups(['bill:get:read'])]
    private Collection $billReminders;

    #[ORM\ManyToMany(targetEntity: Item::class, mappedBy: 'bill')]
    #[Groups(['bill:get:read'])]
    private Collection $items;

    #[ORM\ManyToOne(inversedBy: 'bills')]
    private ?Customer $customer = null;

    public function __construct()
    {
        $dateTimeImmutable = new \DateTimeImmutable();
        $this->billReminders = new ArrayCollection();
        $this->items = new ArrayCollection();
        $this->is_archived = false;
        $this->created_at = $dateTimeImmutable;
        $this->from_at = $dateTimeImmutable;
        $this->to_at = $dateTimeImmutable->add(new \DateInterval('P30D'));
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getFromAt(): ?\DateTimeImmutable
    {
        return $this->from_at;
    }

    public function setFromAt(\DateTimeImmutable $from_at): self
    {
        $this->from_at = $from_at;

        return $this;
    }

    public function getToAt(): ?\DateTimeImmutable
    {
        return $this->to_at;
    }

    public function setToAt(\DateTimeImmutable $to_at): self
    {
        $this->to_at = $to_at;

        return $this;
    }

    public function getAmount(): ?string
    {
        return $this->amount;
    }

    public function setAmount(string $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function isIsArchived(): ?bool
    {
        return $this->is_archived;
    }

    public function setIsArchived(bool $is_archived): self
    {
        $this->is_archived = $is_archived;

        return $this;
    }

    public function getReminderNumber(): ?int
    {
        return $this->reminder_number;
    }

    public function setReminderNumber(?int $reminder_number): self
    {
        $this->reminder_number = $reminder_number;

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

    public function getBillStatut(): ?BillStatut
    {
        return $this->billStatut;
    }

    public function setBillStatut(BillStatut $billStatut): self
    {
        // set the owning side of the relation if necessary
        if ($billStatut->getBill() !== $this) {
            $billStatut->setBill($this);
        }

        $this->billStatut = $billStatut;

        return $this;
    }

    /**
     * @return Collection<int, BillReminder>
     */
    public function getBillReminders(): Collection
    {
        return $this->billReminders;
    }

    public function addBillReminder(BillReminder $billReminder): self
    {
        if (!$this->billReminders->contains($billReminder)) {
            $this->billReminders->add($billReminder);
            $billReminder->setBill($this);
        }

        return $this;
    }

    public function removeBillReminder(BillReminder $billReminder): self
    {
        if ($this->billReminders->removeElement($billReminder)) {
            // set the owning side to null (unless already changed)
            if ($billReminder->getBill() === $this) {
                $billReminder->setBill(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Item>
     */
    public function getItems(): Collection
    {
        return $this->items;
    }

    public function addItem(Item $item): self
    {
        if (!$this->items->contains($item)) {
            $this->items->add($item);
            $item->addBill($this);
        }

        return $this;
    }

    public function removeItem(Item $item): self
    {
        if ($this->items->removeElement($item)) {
            $item->removeBill($this);
        }

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
}
