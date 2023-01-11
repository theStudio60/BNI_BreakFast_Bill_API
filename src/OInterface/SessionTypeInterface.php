<?php

namespace App\OInterface;

use App\Entity\Association;
use App\Entity\SessionPlace;

/**
 * Undocumented interface
 */
interface SessionTypeInterface{
    public function getAssociation(): ?Association;
    public function setAssociation(?Association $association): self;
    public function getSessionPlace(): ?SessionPlace;
    public function setSessionPlace(?SessionPlace $session_place): self;
}