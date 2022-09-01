<?php

namespace App\OInterface ;

use App\Entity\Bill;
use App\Entity\User;
use App\Entity\BillReminderCondition;

interface BillReminderInterface{

    public function getBill(): ?Bill;
    public function setBill(Bill $billStatut): self;
    public function getBillReminderCondition(): ?BillReminderCondition;
    public function setBillReminderCondition(?BillReminderCondition $bill_reminder_condition): self;
    public function getCreatedBy(): ?User;
    public function setCreatedBy(?User $createdBy): self;  
}