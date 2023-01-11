<?php

namespace App\OInterface ;

use App\Entity\User;
use App\Entity\BillStatut;
use App\Entity\Association;
use App\OInterface\AssociationOwnerInterface;

interface BillInterface extends UserOwnerInterface{

    public function getBillStatut(): ?BillStatut;
    public function setBillStatut(BillStatut $billStatut): self;

    public function getAssociation(): ?Association;
    public function setAssociation(?Association $association): self;
    public function getCreatedBy(): ?User;
    public function setCreatedBy(?User $user): self;

   
}