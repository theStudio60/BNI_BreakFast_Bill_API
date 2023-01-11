<?php

namespace App\Repository;

use App\Entity\Customer;
use App\Entity\CustomerSession;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<CustomerSession>
 *
 * @method CustomerSession|null find($id, $lockMode = null, $lockVersion = null)
 * @method CustomerSession|null findOneBy(array $criteria, array $orderBy = null)
 * @method CustomerSession[]    findAll()
 * @method CustomerSession[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CustomerSessionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CustomerSession::class);
    }

    public function add(CustomerSession $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CustomerSession $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Cherche les session utilisateurs dans un mois donné
     *
     * @param Customer $customer
     * @param integer $month
     * @param integer $year
     * @return array
     */
    public function findByMonth(Customer $customer, int $month, int $year = null): array
    {
        if($year === null){
            $year = date('Y');
        }
     return $this->createQueryBuilder('c')
     ->join('c.session', 's')
     ->andWhere('c.customer = :customer')
     ->andWhere('MONTH(s.day_at) = :month')
     ->andWhere('YEAR(s.day_at) = :year')
     ->setParameters(['customer' => $customer, 'month' => $month, 'year' => $year])
     ->orderBy('c.id', 'ASC')
     ->getQuery()
     ->getResult()
 ;
    }

//    public function findOneBySomeField($value): ?CustomerSession
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
