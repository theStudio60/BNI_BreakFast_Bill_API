<?php

namespace App\OwnerInterface;

use App\Entity\Association;

/**
 * Undocumented interface
 */
interface AssociationOwnerInterface{
    public function getAssociation(): ?Association;
    public function setAssociation(?Association $association): self;
}