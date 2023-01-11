<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220819021839 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bill_statut ADD bill_statut_name_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE bill_statut ADD CONSTRAINT FK_F2E5BEA9B46A3CFD FOREIGN KEY (bill_statut_name_id) REFERENCES bill_statut_name (id)');
        $this->addSql('CREATE INDEX IDX_F2E5BEA9B46A3CFD ON bill_statut (bill_statut_name_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bill_statut DROP FOREIGN KEY FK_F2E5BEA9B46A3CFD');
        $this->addSql('DROP INDEX IDX_F2E5BEA9B46A3CFD ON bill_statut');
        $this->addSql('ALTER TABLE bill_statut DROP bill_statut_name_id');
    }
}
