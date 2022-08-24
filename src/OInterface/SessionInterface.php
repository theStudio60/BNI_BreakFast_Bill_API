<?php

namespace App\OInterface;

use App\Entity\Association;
use App\Entity\SessionType;

/**
 * Undocumented interface
 */
interface SessionInterface{
    public function getAssociation(): ?Association;
    public function setAssociation(?Association $association): self;
    public function getSessionType(): ?SessionType;
    public function setSessionType(?SessionType $session_type): self;
}