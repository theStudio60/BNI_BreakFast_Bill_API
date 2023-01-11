<?php

namespace App\OInterface;

use App\Entity\User;

/**
 * Undocumented interface
 */
interface UserOwnerInterface{
    public function getCreatedBy(): ?User;
    public function setCreatedBy(?User $user): self;
}