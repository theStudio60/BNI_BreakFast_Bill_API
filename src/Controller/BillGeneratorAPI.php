<?php

namespace App\Controller;

/**
 * Cette class crée toutes les factures des client actif en fesant appel au BillingGeneratorService
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */

use App\Repository\CustomerRepository;
use App\Service\BillingGeneratorService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[AsController]
class BillGeneratorAPI extends AbstractController
{
    public function __construct(
        public CustomerRepository $customerRepository,
        public BillingGeneratorService $billingGenerator
    ) {
    }

    /**
     * Crée toutes les factures des client actif en fesant appel au BillingGeneratorService
     *
     * @param Request $request
     * @return void
     */
    public function __invoke(Request $request)
    {
        //on récupère les paramètres
        $parameters = json_decode($request->getContent(), true);
        
        //check des dates fournies
        $billingDate = \explode('-', $parameters['billing_month']);
        if ((int)$billingDate[0] > 12 || (int)$billingDate[0] < 1) {
            return false;
        }
        if ((int)$billingDate[1] < 2000 || (int)$billingDate[1] > date('Y')) {
            return false;
        }
        //selection des utilisateurs avec une date de membership actif même partiel durant cette periode
        $association = $this->getUser()->getAssociation();
        $customers = $this->customerRepository->findByMemberShipDateActive($association, (int)$billingDate[0], (int)$billingDate[1]);

        $billGenerated = [];
        foreach ($customers as $key => $value) {
            $parameters['customer_id'] =  $value->getId();
            if (!$this->billingGenerator->BillGenerator($parameters)) {
                array_push($billGenerated, $value->getId() . '-' . $value->getCompany() . ': Erreur');
            } else {
                array_push($billGenerated, $value->getId() . '-' . $value->getCompany() . ': OK');
            }
        }

        return $billGenerated;
    }
}
