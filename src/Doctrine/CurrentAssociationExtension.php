<?php

namespace App\Doctrine;

use Doctrine\ORM\QueryBuilder;
use App\Repository\UserRepository;
use Symfony\Component\Security\Core\Security;
use App\OInterface\ForQueryAssociationOwnerInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\QueryItemExtensionInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\QueryCollectionExtensionInterface;

class CurrentAssociationExtension implements QueryCollectionExtensionInterface, QueryItemExtensionInterface{
    
	function __construct(private Security $security, private UserRepository $userRepository) {
	}

    /**
     * Undocumented function
     *
     * @param QueryBuilder $queryBuilder
     * @param QueryNameGeneratorInterface $queryNameGenerator
     * @param string $resourceClass
     * @param string|null $operationName
     * @return void
     */
    public function applyToCollection(
        QueryBuilder $queryBuilder, 
        QueryNameGeneratorInterface $queryNameGenerator, 
        string $resourceClass, 
        ?string $operationName = null
       
    ){
        $this->addWhere($resourceClass, $queryBuilder);
    }

    /**
     * Undocumented function
     *
     * @param QueryBuilder $queryBuilder
     * @param QueryNameGeneratorInterface $queryNameGenerator
     * @param string $resourceClass
     * @param array $identifiers
     * @param string|null $operationName
     * @param array $context
     * @return void
     */
    public function applyToItem(
        QueryBuilder $queryBuilder, 
        QueryNameGeneratorInterface $queryNameGenerator, 
        string $resourceClass, 
        array $identifiers, 
        ?string $operationName = null, 
        array $context = [])
    {
        $this->addWhere($resourceClass, $queryBuilder);   
    }

    /**
     * Undocumented function
     *
     * @param string $resourceClass
     * @param QueryBuilder $queryBuilder
     * @return void
     */
    public function addWhere(string $resourceClass, QueryBuilder $queryBuilder){
        $reflectionClass = new \ReflectionClass($resourceClass);
        if($reflectionClass->implementsInterface(ForQueryAssociationOwnerInterface::class)){
            $user = $this->userRepository->findOneBy(['id' => $this->security->getUser()]);
            $asssociationId = $user->getAssociation()->getId() ;

            $alias = $queryBuilder->getAllAliases()[0];
            $queryBuilder->andWhere("$alias.association = :current_association")
            ->setParameter('current_association', $asssociationId);
        }
    }

}