<?php

namespace App\Repository;

use App\Entity\Customer;
use App\Entity\Association;
use DateTimeImmutable;
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
 * @param integer $month
 * @param integer $year
 * @return array
 */
    public function findByMemberShipDateActive(Association $association, int $month, int $year): array
    {
            return $this->createQueryBuilder('c')
            ->join('c.membership', 'm')
            ->andWhere('YEAR(m.membership_done_at) > :year')
            ->orWhere('MONTH(m.membership_done_at) >= :month')
            ->andWhere('c.association = :association')
            ->setParameters(['association' => $association, 'month' => $month, 'year' => $year])
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
