<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\OInterface\AssociationOwnerInterface;
use App\Repository\BillReminderConditionRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use App\OInterface\ForQueryAssociationOwnerInterface;

#[ORM\Entity(repositoryClass: BillReminderConditionRepository::class)]

class BillReminderCondition implements AssociationOwnerInterface, ForQueryAssociationOwnerInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['bill:get:read'])]
    private ?string $description = null;

    #[ORM\Column]
    #[Groups(['bill:get:read'])]
    private ?int $day_for_paid = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 2, nullable: true)]
    #[Groups(['bill:get:read'])]
    private ?string $add_amount = null;

    #[ORM\Column(type: Types::SMALLINT)]
    #[Groups(['bill:get:read'])]
    private ?int $for_reminder_number = null;

    #[ORM\ManyToOne(inversedBy: 'billReminderConditions')]
    private ?association $association = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDayForPaid(): ?int
    {
        return $this->day_for_paid;
    }

    public function setDayForPaid(int $day_for_paid): self
    {
        $this->day_for_paid = $day_for_paid;

        return $this;
    }

    public function getAddAmount(): ?string
    {
        return $this->add_amount;
    }

    public function setAddAmount(?string $add_amount): self
    {
        $this->add_amount = $add_amount;

        return $this;
    }

    public function getForReminderNumber(): ?int
    {
        return $this->for_reminder_number;
    }

    public function setForReminderNumber(int $for_reminder_number): self
    {
        $this->for_reminder_number = $for_reminder_number;

        return $this;
    }

    public function getAssociation(): ?association
    {
        return $this->association;
    }

    public function setAssociation(?association $association): self
    {
        $this->association = $association;

        return $this;
    }
}
