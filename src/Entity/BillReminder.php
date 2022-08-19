<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\BillReminderRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BillReminderRepository::class)]
class BillReminder
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'billReminders')]
    private ?Bill $bill = null;

    #[ORM\Column]
    #[Groups(['bill:get:read'])]
    private ?\DateTimeImmutable $reminder_at = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['bill:get:read'])]
    private ?BillReminderCondition $bill_reminder_condition = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBill(): ?Bill
    {
        return $this->bill;
    }

    public function setBill(?Bill $bill): self
    {
        $this->bill = $bill;

        return $this;
    }

    public function getReminderAt(): ?\DateTimeImmutable
    {
        return $this->reminder_at;
    }

    public function setReminderAt(\DateTimeImmutable $reminder_at): self
    {
        $this->reminder_at = $reminder_at;

        return $this;
    }

    public function getBillReminderCondition(): ?BillReminderCondition
    {
        return $this->bill_reminder_condition;
    }

    public function setBillReminderCondition(?BillReminderCondition $bill_reminder_condition): self
    {
        $this->bill_reminder_condition = $bill_reminder_condition;

        return $this;
    }
}
