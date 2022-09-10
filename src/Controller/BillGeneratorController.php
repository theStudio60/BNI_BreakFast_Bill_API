<?php

namespace App\Controller;

use App\Service\BillingService;
use App\Repository\CustomerRepository;
use App\Service\BillingGeneratorService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[AsController]
class BillGeneratorController extends AbstractController
{

    public function __construct(
        public CustomerRepository $customerRepository,
        public BillingService $billingService,
        public BillingGeneratorService $billingGenerator
    ){}

/**
 * Crée toutes les factures des client actif en fesant appel au BillingGeneratorService
 *
 * @param Request $request
 * @return void
 */
    public function __invoke(Request $request)
    {
        //selection des utilisateurs avec un membership actif
        $association = $this->getUser()->getAssociation();
        $customers = $this->customerRepository->findByMemberShipActive($association);

        //on récupère les paramètres
        $parameters = json_decode($request->getContent(), true);

        $billGenerated = [];
        foreach($customers as $key => $value){
            $parameters['customer_id'] =  $value->getId();
            if(!$this->billingGenerator->BillGenerator($parameters)){
                array_push($billGenerated, $value->getId().'-'.$value->getCompany().': Erreur');
            }else{
                array_push($billGenerated, $value->getId().'-'.$value->getCompany().': OK');
            }
        }
        
        return $billGenerated;
    }
}