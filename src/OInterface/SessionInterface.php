<?php

namespace App\OInterface;

use App\Entity\Association;
use App\Entity\SessionType;
use App\Entity\CustomerSession;
use Doctrine\Common\Collections\Collection;

/**
 * Undocumented interface
 */
interface SessionInterface{
    public function getAssociation(): ?Association;
    public function setAssociation(?Association $association): self;
    public function getSessionType(): ?SessionType;
    public function setSessionType(?SessionType $session_type): self;
    public function getCustomerSessions(): Collection;
    public function addCustomerSession(CustomerSession $customerSession): self;
    public function removeCustomerSession(CustomerSession $customerSession): self;  
}