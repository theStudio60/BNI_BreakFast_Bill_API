<?php

namespace App\Repository;

use App\Entity\Bill;
use App\Entity\Customer;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Bill>
 *
 * @method Bill|null find($id, $lockMode = null, $lockVersion = null)
 * @method Bill|null findOneBy(array $criteria, array $orderBy = null)
 * @method Bill[]    findAll()
 * @method Bill[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BillRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Bill::class);
    }

    public function add(Bill $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Bill $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Bill[] Returns an array of Bill objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('b.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

/**
 * Rechercher une facture en fournissant mois/année
 *
 * @param Customer $customer
 * @param string $billingMonth "08-2022"
 * @return Bill|null
 */
   public function findOneBySameMonth(Customer $customer, string $billingMonth): ?Bill
   {
       return $this->createQueryBuilder('b')
           ->andWhere('b.customer = :customer')
           ->andWhere('b.billingMonth = :billingMonth')
           ->setParameters(['customer' => $customer, 'billingMonth' => $billingMonth])
           ->getQuery()
           ->getOneOrNullResult()
       ;
   }
}