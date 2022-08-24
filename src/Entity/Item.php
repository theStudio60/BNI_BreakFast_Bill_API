<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ItemRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use App\OInterface\AssociationOwnerInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use App\OInterface\ForQueryAssociationOwnerInterface;

#[ORM\Entity(repositoryClass: ItemRepository::class)]
#[ApiResource(
    normalizationContext:['groups' => ['get:read']],
    collectionOperations:[
        'get' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut consulter les items',
            'openapi_context' => [
                'summary'     => 'Consulter les items',
                'description' => "",
            ],
        ],
        'post' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut ajouter un item',
            'openapi_context' => [
                'summary'     => 'Créer un nouvel item',
                'description' => "",
                'requestBody' => [
                    'content' => [
                        'application/json' => [
                            'schema'  => [
                                'type'       => 'object',
                                'properties' =>
                                    [
                                        'name' => ['type' => 'string'],
                                        'PriceOf' => ['type' => 'decimal'],
                                    ],
                            ],
                            'example' => [
                                'name' => 'Abonnement Netflix',
                                'priceOf' => 'Prix de la prestation',
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
    itemOperations:[
        'get' => [
            'security' => 'is_granted("ROLE_USER")',
            'security_message' => 'Seul un utilisateur peut consulter un item',
            'openapi_context' => [
                'summary'     => 'Consulter un item',
                'description' => "",
            ],
        ]
    ]
)]
class Item implements AssociationOwnerInterface, ForQueryAssociationOwnerInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['get:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['get:read', 'bill:get:read'])]
    private ?string $name = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 2)]
    #[Groups(['get:read', 'bill:get:read'])]
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
