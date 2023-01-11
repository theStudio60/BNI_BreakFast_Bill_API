<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\BillReminderRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use App\OInterface\BillReminderInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: BillReminderRepository::class)]
#[ApiResource( 
    collectionOperations:[
    'post' => [
        'security' => 'is_granted("ROLE_USER")',
        'security_message' => 'Seul un utilisateur peut créer un rappel',
        'openapi_context' => [
            'summary'     => 'Créer un nouveau rappel',
            'description' => "",
            'requestBody' => [
                'content' => [
                    'application/json' => [
                        'schema'  => [
                            'type'       => 'object',
                            'properties' =>
                                [
                                    'bill_id' => ['type' => 'int'],
                                    'billReminderCondition_id' => ['type' => 'int'],
                                ],
                        ],
                        'example' => [
                            'bill_id' => '1 [ID de la facture](int)',
                            'billReminderCondition_id' => '1 [ID de billReminderCondition](int)',
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
        "security_message" => "Seul un utilisateur peut consulter un rappel",
        'openapi_context' => [
            'summary'     => 'Retourne un rappel',
        ]
    ],
],
)]
class BillReminder implements BillReminderInterface
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

    #[ORM\ManyToOne]
    private ?User $createdBy = null;

    private ?String $reminderNumber = null;

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

    public function getCreatedBy(): ?User
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?User $createdBy): self
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    public function getReminderNumber(): string
    {
        $customerNumber = substr(str_repeat(0, 5) . $this->id, -5);
        return 'R-M' . $customerNumber . 'Q' . $this->bill->getBillingMonth();
    }

}
