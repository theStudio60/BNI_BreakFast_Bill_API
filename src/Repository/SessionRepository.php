<?php

namespace App\Repository;

use App\Entity\Session;
use App\Entity\Customer;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Session>
 *
 * @method Session|null find($id, $lockMode = null, $lockVersion = null)
 * @method Session|null findOneBy(array $criteria, array $orderBy = null)
 * @method Session[]    findAll()
 * @method Session[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SessionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Session::class);
    }

    public function add(Session $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Session $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

   /**
    * @return Session[] Returns an array of Session objects
    */
   public function findByAtDone($association, $dateAt, $dateDone): array
   {
       return $this->createQueryBuilder('s')
           ->andWhere('s.association = :association')
           ->andWhere('s.day_at >= :dateAt')
           ->andWhere('s.day_at <= :dateDone')
           ->setParameters(['association' => $association, 'dateAt' => $dateAt, 'dateDone' => $dateDone])
           ->orderBy('s.id', 'ASC')
           ->getQuery()
           ->getResult()
       ;
   }
}
