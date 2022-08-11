<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\SessionRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;

#[ORM\Entity(repositoryClass: SessionRepository::class)]
#[ApiResource]
class Session
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $day_at = null;

    #[ORM\Column]
    private ?bool $to_done = null;

    #[ORM\ManyToOne(inversedBy: 'sessions')]
    private ?User $created_by = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?SessionType $session_type = null;

    #[ORM\ManyToOne(inversedBy: 'sessions')]
    private ?Association $association = null;

    #[ORM\OneToMany(mappedBy: 'session', targetEntity: CustomerSession::class)]
    private Collection $customerSessions;

    public function __construct()
    {
        $this->customerSessions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDayAt(): ?\DateTimeImmutable
    {
        return $this->day_at;
    }

    public function setDayAt(\DateTimeImmutable $day_at): self
    {
        $this->day_at = $day_at;

        return $this;
    }

    public function isToDone(): ?bool
    {
        return $this->to_done;
    }

    public function setToDone(bool $to_done): self
    {
        $this->to_done = $to_done;

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

    public function getSessionType(): ?SessionType
    {
        return $this->session_type;
    }

    public function setSessionType(?SessionType $session_type): self
    {
        $this->session_type = $session_type;

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
            $customerSession->setSession($this);
        }

        return $this;
    }

    public function removeCustomerSession(CustomerSession $customerSession): self
    {
        if ($this->customerSessions->removeElement($customerSession)) {
            // set the owning side to null (unless already changed)
            if ($customerSession->getSession() === $this) {
                $customerSession->setSession(null);
            }
        }

        return $this;
    }
}
