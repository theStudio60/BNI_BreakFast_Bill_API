<?php

namespace App\OInterface;

use App\Entity\Association;

interface ForQueryAssociationOwnerInterface{

    public function getAssociation(): ?Association;
    public function setAssociation(?Association $association): self;
}