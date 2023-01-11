<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220828015956 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bill_reminder ADD created_by_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE bill_reminder ADD CONSTRAINT FK_CDCB8181B03A8386 FOREIGN KEY (created_by_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_CDCB8181B03A8386 ON bill_reminder (created_by_id)');
        $this->addSql('ALTER TABLE session CHANGE session_type_id session_type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user CHANGE association_id association_id INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user CHANGE association_id association_id INT NOT NULL');
        $this->addSql('ALTER TABLE bill_reminder DROP FOREIGN KEY FK_CDCB8181B03A8386');
        $this->addSql('DROP INDEX IDX_CDCB8181B03A8386 ON bill_reminder');
        $this->addSql('ALTER TABLE bill_reminder DROP created_by_id');
        $this->addSql('ALTER TABLE session CHANGE session_type_id session_type_id INT NOT NULL');
    }
}
