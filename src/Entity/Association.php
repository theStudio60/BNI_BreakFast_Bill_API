<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\AssociationRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AssociationRepository::class)]
#[ApiResource(
    normalizationContext:['groups' => ['get:read']],
    collectionOperations:[
        'get' => [
            'security' => 'is_granted("ROLE_ADMIN")',
            'security_message' => 'Seul un administrateur peut consulter les associations',
            'openapi_context' => [
                'summary'     => 'Retourne la liste des associations',
            ]
        ],
        'post' => [
            'security' => 'is_granted("ROLE_ADMIN")',
            'security_message' => 'Seul un administrateur peut ajouter une association',
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
                                        'name' => ['type' => 'string'],
                                        'street' => ['type' => 'string'],
                                        'streetNumber' => ['type' => 'string'],
                                        'zipCode' => ['type' => 'int'],
                                        'city' => ['type' => 'string'],
                                        'email' => ['type' => 'string'],
                                    ],
                            ],
                            'example' => [
                                'name' => 'Green Peace',
                                'street' => 'Rue de la Madelaine',
                                'streetNumber' => '3A',
                                'zipCode' => 1000,
                                'city' => 'Lausanne',
                                'email' => 'info@greenpeace.com',
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
    itemOperations:[
        'get' => [
            "security" => "is_granted('ROLE_ADMIN')",
            "security_message" => "Seul un administrateur peut consulter les associations",
            'openapi_context' => [
                'summary'     => 'Retourne une association',
            ]
        ],
        'put' => [
            "security" => "is_granted('ROLE_ADMIN')",
            "security_message" => "Seul un administrateur peut modifier les associations",
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
                                        'street' => ['type' => 'string'],
                                        'streetNumber' => ['type' => 'string'],
                                        'zipCode' => ['type' => 'int'],
                                        'city' => ['type' => 'string'],
                                        'email' => ['type' => 'string'],
                                    ],
                            ],
                            'example' => [
                                'street' => 'Rue de la Madelaine',
                                'streetNumber' => '3A',
                                'zipCode' => '1000 (int)',
                                'city' => 'Lausanne',
                                'email' => 'info@greenpeace.com',
                            ],
                        ],
                    ],
                ],
            ],            
        ]
    ],
)]
class Association
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["get:read", "user:get:read"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["get:read", "user:get:read"])]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    #[Groups(["get:read", "user:get:read"])]
    private ?string $street = null;

    #[ORM\Column(length: 10, nullable: true)]
    #[Groups(["get:read", "user:get:read"])]
    private ?string $street_number = null;

    #[ORM\Column]
    #[Groups(["get:read", "user:get:read"])]
    private ?int $zip_code = null;

    #[ORM\Column(length: 255)]
    #[Groups(["get:read", "user:get:read"])]
    private ?string $city = null;

    #[ORM\Column(length: 255)]
    #[Groups(["get:read", "user:get:read"])]
    private ?string $email = null;

    #[ORM\Column]
    #[Groups(["get:read", "user:get:read"])]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column]
    #[Groups(["get:read", "user:get:read"])]
    private ?bool $is_active = null;

    #[ORM\OneToMany(mappedBy: 'association', targetEntity: Bill::class)]
    private Collection $bills;

    #[ORM\OneToMany(mappedBy: 'association', targetEntity: User::class)]
    private Collection $users;

    #[ORM\OneToMany(mappedBy: 'association', targetEntity: BillReminderCondition::class)]
    private Collection $billReminderConditions;

    #[ORM\OneToMany(mappedBy: 'association', targetEntity: Item::class)]
    private Collection $items;

    #[ORM\OneToMany(mappedBy: 'association', targetEntity: Customer::class)]
    private Collection $customers;

    #[ORM\OneToMany(mappedBy: 'association', targetEntity: SessionPlace::class)]
    private Collection $sessionPlaces;

    #[ORM\OneToMany(mappedBy: 'association', targetEntity: SessionType::class)]
    private Collection $sessionTypes;

    #[ORM\OneToMany(mappedBy: 'association', targetEntity: Session::class)]
    private Collection $sessions;

    #[ORM\OneToOne(mappedBy: 'association', cascade: ['persist', 'remove'])]
    #[Groups(["get:read", "user:get:read"])]
    private ?BankInformation $bankInformation = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["get:read", "user:get:read"])]
    private ?string $logoImg = null;

    public function __construct()
    {
        $this->bills = new ArrayCollection();
        $this->users = new ArrayCollection();
        $this->billReminderConditions = new ArrayCollection();
        $this->items = new ArrayCollection();
        $this->customers = new ArrayCollection();
        $this->sessionPlaces = new ArrayCollection();
        $this->sessionTypes = new ArrayCollection();
        $this->sessions = new ArrayCollection();

        $this->created_at = new \DateTimeImmutable();
        $this->is_active = true;
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

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function getStreetNumber(): ?string
    {
        return $this->street_number;
    }

    public function setStreetNumber(?string $street_number): self
    {
        $this->street_number = $street_number;

        return $this;
    }

    public function getZipCode(): ?int
    {
        return $this->zip_code;
    }

    public function setZipCode(int $zip_code): self
    {
        $this->zip_code = $zip_code;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

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

    public function isIsActive(): ?bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): self
    {
        $this->is_active = $is_active;

        return $this;
    }

    /**
     * @return Collection<int, Bill>
     */
    public function getUserss(): Collection
    {
        return $this->bills;
    }


    /**
     * @return Collection<int, Bill>
     */
    public function getBills(): Collection
    {
        return $this->bills;
    }

    public function addBill(Bill $bill): self
    {
        if (!$this->bills->contains($bill)) {
            $this->bills->add($bill);
            $bill->setAssociation($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, BillReminderCondition>
     */
    public function getBillReminderConditions(): Collection
    {
        return $this->billReminderConditions;
    }

    public function addBillReminderCondition(BillReminderCondition $billReminderCondition): self
    {
        if (!$this->billReminderConditions->contains($billReminderCondition)) {
            $this->billReminderConditions->add($billReminderCondition);
            $billReminderCondition->setAssociation($this);
        }

        return $this;
    }

    public function removeBillReminderCondition(BillReminderCondition $billReminderCondition): self
    {
        if ($this->billReminderConditions->removeElement($billReminderCondition)) {
            // set the owning side to null (unless already changed)
            if ($billReminderCondition->getAssociation() === $this) {
                $billReminderCondition->setAssociation(null);
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
            $item->setAssociation($this);
        }

        return $this;
    }

    public function removeItem(Item $item): self
    {
        if ($this->items->removeElement($item)) {
            // set the owning side to null (unless already changed)
            if ($item->getAssociation() === $this) {
                $item->setAssociation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Customer>
     */
    public function getCustomers(): Collection
    {
        return $this->customers;
    }

    public function addCustomer(Customer $customer): self
    {
        if (!$this->customers->contains($customer)) {
            $this->customers->add($customer);
            $customer->setAssociation($this);
        }

        return $this;
    }

    public function removeCustomer(Customer $customer): self
    {
        if ($this->customers->removeElement($customer)) {
            // set the owning side to null (unless already changed)
            if ($customer->getAssociation() === $this) {
                $customer->setAssociation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, SessionPlace>
     */
    public function getSessionPlaces(): Collection
    {
        return $this->sessionPlaces;
    }

    public function addSessionPlace(SessionPlace $sessionPlace): self
    {
        if (!$this->sessionPlaces->contains($sessionPlace)) {
            $this->sessionPlaces->add($sessionPlace);
            $sessionPlace->setAssociation($this);
        }

        return $this;
    }

    public function removeSessionPlace(SessionPlace $sessionPlace): self
    {
        if ($this->sessionPlaces->removeElement($sessionPlace)) {
            // set the owning side to null (unless already changed)
            if ($sessionPlace->getAssociation() === $this) {
                $sessionPlace->setAssociation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, SessionType>
     */
    public function getSessionTypes(): Collection
    {
        return $this->sessionTypes;
    }

    public function addSessionType(SessionType $sessionType): self
    {
        if (!$this->sessionTypes->contains($sessionType)) {
            $this->sessionTypes->add($sessionType);
            $sessionType->setAssociation($this);
        }

        return $this;
    }

    public function removeSessionType(SessionType $sessionType): self
    {
        if ($this->sessionTypes->removeElement($sessionType)) {
            // set the owning side to null (unless already changed)
            if ($sessionType->getAssociation() === $this) {
                $sessionType->setAssociation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Session>
     */
    public function getSessions(): Collection
    {
        return $this->sessions;
    }

    public function addSession(Session $session): self
    {
        if (!$this->sessions->contains($session)) {
            $this->sessions->add($session);
            $session->setAssociation($this);
        }

        return $this;
    }

    public function removeSession(Session $session): self
    {
        if ($this->sessions->removeElement($session)) {
            // set the owning side to null (unless already changed)
            if ($session->getAssociation() === $this) {
                $session->setAssociation(null);
            }
        }

        return $this;
    }

    public function getBankInformation(): ?BankInformation
    {
        return $this->bankInformation;
    }

    public function setBankInformation(BankInformation $bankInformation): self
    {
        // set the owning side of the relation if necessary
        if ($bankInformation->getAssociation() !== $this) {
            $bankInformation->setAssociation($this);
        }

        $this->bankInformation = $bankInformation;

        return $this;
    }

    public function getLogoImg(): ?string
    {
        return $this->logoImg;
    }

    public function setLogoImg(?string $logoImg): self
    {
        $this->logoImg = $logoImg;

        return $this;
    }
}
