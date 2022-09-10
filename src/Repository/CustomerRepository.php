<?php

namespace App\Repository;

use App\Entity\Customer;
use App\Entity\Association;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Common\Collections\Collection;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Customer>
 *
 * @method Customer|null find($id, $lockMode = null, $lockVersion = null)
 * @method Customer|null findOneBy(array $criteria, array $orderBy = null)
 * @method Customer[]    findAll()
 * @method Customer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CustomerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Customer::class);
    }

    public function add(Customer $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Customer $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

/**
 * Retourne une liste de membres avec un membreship actif
 *
 * @param Association $association
 * @return array
 */
    public function findByMemberShipActive(Association $association): array
    {
        return $this->createQueryBuilder('c')
            ->join('c.membership', 'm')
            ->andWhere('c.association = :association')
            ->andWhere('m.is_active = true')
            ->setParameter('association', $association)
            ->getQuery()
            ->getResult();
        ;
    }

/**
 * Retourne un membre avec un membreship actif
 *
 * @param [type] $id
 * @param Association $association
 * @return Customer|null
 */
   public function findOneByMemberShipActive($id, Association $association): ?Customer
   {
       return $this->createQueryBuilder('c')
           ->join('c.membership', 'm')
           ->andWhere('c.id = :id')
           ->andWhere('c.association = :association')
           ->andWhere('m.is_active = true')
           ->setParameters(['id' =>  $id, 'association' => $association])
           ->getQuery()
           ->getOneOrNullResult()
       ;
   }
}
