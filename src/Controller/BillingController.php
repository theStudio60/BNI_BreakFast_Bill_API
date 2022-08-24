<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BillingController extends AbstractController
{
    #[Route('/billing/checkdelay', name: 'app_billing')]
    public function checkdelay(): JsonResponse
    {
        $data = ['status' => 200];
        return $this->json($data, $status = 200, $headers = [], $context = []);
    }

    #[Route('/billing/createReminder', name: 'app_billing')]
    public function createReminder(): JsonResponse
    {
        $data = ['status' => 200];
        return $this->json($data, $status = 200, $headers = [], $context = []);
    }
}
