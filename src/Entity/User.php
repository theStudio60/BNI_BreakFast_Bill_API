<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use App\OInterface\AssociationOwnerInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use App\OInterface\ForQueryAssociationOwnerInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ApiResource(
    normalizationContext:['groups' => ['user:get:read']],

    collectionOperations:[
        'post' => [
            "security" => "is_granted('ROLE_USER')",
            "security_message" => "Seul un utilisateur peut consulter les utilisateurs",
            'openapi_context' => [
                'summary'     => 'Créer un utilisateur',
            ]
        ],
        'get' => [
            "security" => "is_granted('ROLE_USER')",
            "security_message" => "Seul un utilisateur peut consulter les utilisateurs",
            'openapi_context' => [
                'summary'     => 'Retourne la liste des utilisateurs',
            ]
        ],
    ],
    itemOperations:[
        'get' => [
            "security" => "is_granted('ROLE_USER')",
            "security_message" => "Seul un utilisateur peut consulter un utilisateur",
            'openapi_context' => [
                'summary'     => 'Retourne un utilisateur',
            ]
        ],
        'put' => [
            "security" => "is_granted('ROLE_USER')",
            "security_message" => "Seul un utilisateur peut modifier un utilisateur",
            'openapi_context' => [
                'summary'     => 'Modifie un utilisateur',
            ]
        ],
    ],
)]
class User implements UserInterface, PasswordAuthenticatedUserInterface, AssociationOwnerInterface, ForQueryAssociationOwnerInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['user:get:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    #[Groups(['user:get:read'])]
    private ?string $email = null;

    #[ORM\Column]
    #[Groups(['user:get:read'])]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    #[Groups(['user:get:read'])]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    #[Groups(['user:get:read', 'bill:get:read', 'customer:get:read', 'session:get:read'])]
    private ?string $firstname = null;

    #[ORM\Column(length: 255)]
    #[Groups(['user:get:read', 'bill:get:read', 'customer:get:read', 'session:get:read'])]
    private ?string $lastname = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    #[Groups(['user:get:read'])]
    private ?Association $association = null;

    #[ORM\OneToMany(mappedBy: 'created_by', targetEntity: Bill::class)]
    private Collection $bills;

    #[ORM\OneToMany(mappedBy: 'created_by', targetEntity: Session::class)]
    private Collection $sessions;

    #[ORM\Column(length: 255)]
    private ?string $username = null;

    public function __construct()
    {
        $this->bills = new ArrayCollection();
        $this->sessions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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

    public function getAssociation(): ?Association
    {
        return $this->association;
    }

    public function setAssociation(?Association $association): self
    {
        $this->association = $association;

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
            $bill->setCreatedBy($this);
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
            $session->setCreatedBy($this);
        }

        return $this;
    }

    public function removeSession(Session $session): self
    {
        if ($this->sessions->removeElement($session)) {
            // set the owning side to null (unless already changed)
            if ($session->getCreatedBy() === $this) {
                $session->setCreatedBy(null);
            }
        }

        return $this;
    }

/**
 * Returning a salt is only needed, if you are not using a modern
 * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
 *
 * @see UserInterface
 */
    public function getSalt(): ?string
    {
        return null;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }
}
