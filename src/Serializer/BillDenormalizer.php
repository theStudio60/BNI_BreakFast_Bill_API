<?php

namespace App\Serializer;

use App\Entity\BillStatut;
use App\OInterface\BillInterface;
use App\Repository\UserRepository;
use App\Repository\BillStatutRepository;
use App\Repository\BillStatutNameRepository;
use App\Repository\ItemRepository;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareTrait;
use Symfony\Component\Serializer\Normalizer\DenormalizerAwareInterface;
use Symfony\Component\Serializer\Normalizer\ContextAwareDenormalizerInterface;

class BillDenormalizer implements ContextAwareDenormalizerInterface, DenormalizerAwareInterface{

    use DenormalizerAwareTrait;

	function __construct(
        private Security $security, 
        private UserRepository $userRepository, 
        private BillStatutNameRepository $billStatutNameRepository, 
        private BillStatutRepository $billStatutRepository, 
        private ItemRepository $itemRepository
    ) {
	}    
/**
 * Undocumented function
 *
 * @param mixed $data
 * @param string $type
 * @param string|null $format
 * @param array $context
 * @return boolean
 */
    public function supportsDenormalization(
        mixed $data, 
        string $type, 
        ?string $format = null, 
        array $context = []): bool
    {
        $reflectionClass = new \ReflectionClass($type);
        $allreadycalled = $context[$this->allReadyCalledKey($type)]  ?? false;
        return $reflectionClass->implementsInterface(BillInterface::class) && $allreadycalled === false;
    }

    /**
     * Undocumented function
     *
     * @param mixed $data
     * @param string $type
     * @param string|null $format
     * @param array $context
     * @return void
     */
    public function denormalize(
        mixed $data, 
        string $type, 
        ?string $format = null, 
        array $context = [])
    {

            //si la requete est de type collection_operation_name->POSTE (nouvel enregistreemnt)
            if(isset($context['collection_operation_name']) && $context['collection_operation_name'] === 'post')
            {
                $context[$this->allReadyCalledKey($type)] = true;
                //crée l'objet Bill
                $bill = $this->denormalizer->denormalize($data, $type, $format, $context);

                //Chargement de l'utilisateur courant
                $user = $this->userRepository->findOneBy(['id' => $this->security->getUser()]);
                //Selection du statut par default de la facture !!!important id = 1!!
                $billStatutName = $this->billStatutNameRepository->findOneBy(['id' => 1]);
                //chargement de l'association courrante
                $asssociation = $user->getAssociation();
                //Set des valeurs necessaire 
                $billStatut = new BillStatut();   
                    $billStatut
                        ->setUpdatedBy($user)
                        ->setBalance(null)
                        ->setBillStatutName($billStatutName);

                    $bill
                        ->setAssociation($asssociation)
                        ->setCreatedBy($user)
                        ->setBillStatut($billStatut);
                    
                        //ajout des items
                        foreach ($data['itemList'] as $key => $value) {
                            //control que les items ajouté soient bien en relation avec l'association
                            $item = $this->itemRepository->findOneBy(['id' => $value]);
                                if($item->getAssociation()->getId() === $asssociation->getId())
                                $bill->addItem($item);
                        }
                //retourne l'objet avec les valeurs ajoutée
                return $bill;
            }

            //si la requete est de type item_operation_name->PUT (mise à jour)
            if(isset($context['item_operation_name']) && $context['item_operation_name'] === 'put')
            {
                $context[$this->allReadyCalledKey($type)] = true;
                //crée l'objet Bill
                $bill = $this->denormalizer->denormalize($data, $type, $format, $context);

                //on récupère le nom du statut
                $billStatutName = $this->billStatutNameRepository->findOneBy(['id' => $data['billStatutName']]);
                //on récupère le statut
                $billStatut = $this->billStatutRepository->findOneBy(['id' => $bill->getBillStatut()]);
                    //Set des valeurs necessaire 
                    $bill
                        ->setAmount($data['amount'])
                        ->setIsArchived($data['isArchived']);              
                    $billStatut
                        ->setUpdatedBy($this->security->getUser())
                        ->setUpdatedAt(new \DateTimeImmutable)
                        ->setBillStatutName($billStatutName)
                        ->setBalance($billStatut->getBalance()+$data['balance']);         

                //retourne l'objet avec les valeurs ajoutée
                return $bill;
            }
        }        

    private function allReadyCalledKey(string $key){
        return $key;
    }

}