<?php

namespace App\Repository;

use App\Entity\BillReminderCondition;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<BillReminderCondition>
 *
 * @method BillReminderCondition|null find($id, $lockMode = null, $lockVersion = null)
 * @method BillReminderCondition|null findOneBy(array $criteria, array $orderBy = null)
 * @method BillReminderCondition[]    findAll()
 * @method BillReminderCondition[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BillReminderConditionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BillReminderCondition::class);
    }

    public function add(BillReminderCondition $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(BillReminderCondition $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return BillReminderCondition[] Returns an array of BillReminderCondition objects
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

//    public function findOneBySomeField($value): ?BillReminderCondition
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
