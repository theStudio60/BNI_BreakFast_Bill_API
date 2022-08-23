<?php

namespace App\OInterface;

use App\Entity\User;
use App\Entity\Association;

/**
 * Undocumented interface
 */
interface CustomerInterface{
    public function getAssociation(): ?Association;
    public function setAssociation(?Association $association): self;
    public function getCreatedBy(): ?User;
    public function setCreatedBy(?User $user): self;
}