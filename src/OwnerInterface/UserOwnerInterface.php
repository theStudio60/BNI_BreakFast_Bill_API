<?php

namespace App\OwnerInterface;

use App\Entity\User;

/**
 * Undocumented interface
 */
interface UserOwnerInterface{
    public function getCreatedBy(): ?User;
    public function setCreatedBy(?User $user): self;
}