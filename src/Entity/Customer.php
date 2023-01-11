<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Controller\VcardParserAPI;
use App\OInterface\CustomerInterface;
use App\Repository\CustomerRepository;
use ApiPlatform\Core\Annotation\ApiFilter;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use App\OInterface\ForQueryAssociationOwnerInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\BooleanFilter;

#[ORM\Entity(repositoryClass: CustomerRepository::class)]
#[ApiFilter(SearchFilter::class, properties:[
    'firstname' => 'partial',
    'lastname' => 'partial',
    'bills.billStatut.bill_statut_name.name' => 'partial'])]
#[ApiFilter(BooleanFilter::class, properties: ['membership.is_active'])]
#[ApiResource(
    normalizationContext:['groups' => ['customer:get:read']],
    attributes: ["pagination_items_per_page" => 10, "pagination_maximum_items_per_page" => 30],
    collectionOperations:[
    'get' => [
        'security' => 'is_granted("ROLE_USER")',
        'security_message' => 'Seul un utilisateur peut consulter les membres',
        'openapi_context' => [
            'summary'     => 'Retourne la liste des membres',
        ]
    ],  
    'post' => [
        'security' => 'is_granted("ROLE_USER")',
        'security_message' => 'Seul un utilisateur peut ajouter un membre',
        'openapi_context' => [
            'summary'     => 'Créer un nouveau membre',
            'description' => "",
            'requestBody' => [
                'content' => [
                    'application/json' => [
                        'schema'  => [
                            'type'       => 'object',
                            'properties' =>
                                [
                                    'firstname' => ['type' => 'string'],
                                    'lastname' => ['type' => 'boolean'],
                                    'street' => ['type' => 'decimal'],
                                    'streetNumber' => ['type' => 'string'],
                                    'zipCode' => ['type' => 'int'],
                                    'city' => ['type' => 'string'],
                                    'company' => ['type' => 'string'],
                                    'email' => ['type' => 'string'],
                                    'memberShip_at' => ['type' => 'string']
                                ],
                        ],
                        'example' => [
                            'firstname' => 'Jhon [Prénom]',
                            'lastname' => 'Doe [Nom]',
                            'street' => 'Rue de la poste [Rue / Chemin]',
                            'streetNumber' => '3A [Numéro de rue]',
                            'zipCode' => '1020 [Code Postal] (int)',
                            'city' => 'Lausanne [Ville]',
                            'company' => 'Une entreprise SA [Nom de l\'entreprise]',
                            'email' => 'jdoe@gmail.com [Email]',
                            'memberShip_at' => '25.08.2022 [Date à laquelle le membre rejoint l\'association] (date dd.mm.yyyy)' 
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
        "security_message" => "Seul un utilisateur peut consulter les membres",
        'openapi_context' => [
            'summary'     => 'Retourne un membre',
        ]
    ],
    'put' => [
        "security" => "is_granted('ROLE_USER')",
        "security_message" => "Seul un utilisateur peut modifier un membre",
        'openapi_context' => [
            'summary'     => 'Modifier un membre',
            'description' => "",
            'requestBody' => [
                'content' => [
                    'application/json' => [
                        'schema'  => [
                            'type'       => 'object',
                            'properties' =>
                                [
                                    'firstname' => ['type' => 'string'],
                                    'lastname' => ['type' => 'boolean'],
                                    'street' => ['type' => 'decimal'],
                                    'streetNumber' => ['type' => 'string'],
                                    'zipCode' => ['type' => 'int'],
                                    'city' => ['type' => 'string'],
                                    'company' => ['type' => 'string'],
                                    'email' => ['type' => 'string'],
                                ],
                        ],
                        'example' => [
                            'firstname' => 'Jhon [Prénom]',
                            'lastname' => 'Doe [Nom]',
                            'street' => 'Rue de la poste [Rue / Chemin]',
                            'streetNumber' => '3A [Numéro de rue]',
                            'zipCode' => '1020 [Code Postal] (int)',
                            'city' => 'Lausanne [Ville]',
                            'company' => 'Une entreprise SA [Nom de l\'entreprise]',
                            'email' => 'jdoe@gmail.com [Email]',
                        ],
                    ],
                ],
            ],
        ],            
    ],  
],
)]    

class Customer implements CustomerInterface, ForQueryAssociationOwnerInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['customer:get:read', 'bill:get:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['customer:get:read', 'bill:get:read'])]
    
    private ?string $firstname = null;

    #[ORM\Column(length: 255)]
    #[Groups(['customer:get:read', 'bill:get:read'])]
    private ?string $lastname = null;

    #[ORM\Column(length: 255)]
    #[Groups(['customer:get:read', 'bill:get:read'])]
    private ?string $street = null;

    #[ORM\Column(length: 10, nullable: true)]
    #[Groups(['customer:get:read', 'bill:get:read'])]
    private ?string $street_number = null;

    #[ORM\Column]
    #[Groups(['customer:get:read', 'bill:get:read'])]
    private ?int $zip_code = null;

    #[ORM\Column(length: 255)]
    #[Groups(['customer:get:read','bill:get:read'])]
    private ?string $city = null;

    #[ORM\Column(length: 255)]
    #[Groups(['customer:get:read', 'bill:get:read'])]
    private ?string $company = null;

    #[ORM\Column(length: 255)]
    #[Groups(['customer:get:read', 'bill:get:read'])]
    private ?string $email = null;

    #[ORM\ManyToOne]
    #[Groups(['customer:get:read'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $created_by = null;

    #[ORM\ManyToOne(inversedBy: 'customers')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Association $association = null;

    #[ORM\OneToOne(mappedBy: 'customer', cascade: ['persist', 'remove'])]
    #[Groups(['customer:get:read'])]
    private ?Membership $membership = null;

    #[ORM\OneToMany(mappedBy: 'customer', cascade: ['persist', 'remove'], targetEntity: CustomerSession::class)]
    #[Groups(['customer:get:read'])]
    private Collection $customerSessions;

    #[ORM\OneToMany(mappedBy: 'customer', targetEntity: Bill::class)]
    private Collection $bills;

    public function __construct()
    {
        $this->customerSessions = new ArrayCollection();
        $this->bills = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

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

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(string $company): self
    {
        $this->company = $company;

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

    public function getCreatedBy(): ?User
    {
        return $this->created_by;
    }

    public function setCreatedBy(?User $created_by): self
    {
        $this->created_by = $created_by;

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

    public function getMembership(): ?Membership
    {
        return $this->membership;
    }

    public function setMembership(Membership $membership): self
    {
        // set the owning side of the relation if necessary
        if ($membership->getCustomer() !== $this) {
            $membership->setCustomer($this);
        }

        $this->membership = $membership;

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
            $customerSession->setCustomer($this);
        }

        return $this;
    }

    public function removeCustomerSession(CustomerSession $customerSession): self
    {
        if ($this->customerSessions->removeElement($customerSession)) {
            // set the owning side to null (unless already changed)
            if ($customerSession->getCustomer() === $this) {
                $customerSession->setCustomer(null);
            }
        }

        return $this;
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
            $bill->setCustomer($this);
        }

        return $this;
    }

    public function removeBill(Bill $bill): self
    {
        if ($this->bills->removeElement($bill)) {
            // set the owning side to null (unless already changed)
            if ($bill->getCustomer() === $this) {
                $bill->setCustomer(null);
            }
        }

        return $this;
    }
}
