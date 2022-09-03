<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220902181155 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE bank_information (id INT AUTO_INCREMENT NOT NULL, association_id INT NOT NULL, qr_iban VARCHAR(255) NOT NULL, account_number VARCHAR(255) NOT NULL, bank_name VARCHAR(255) NOT NULL, currency VARCHAR(3) NOT NULL, UNIQUE INDEX UNIQ_BF2AEFCEFB9C8A5 (association_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE bank_information ADD CONSTRAINT FK_BF2AEFCEFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bank_information DROP FOREIGN KEY FK_BF2AEFCEFB9C8A5');
        $this->addSql('DROP TABLE bank_information');
    }
}
