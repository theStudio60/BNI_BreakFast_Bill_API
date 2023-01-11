<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220811010349 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE association (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, street VARCHAR(255) NOT NULL, street_number VARCHAR(10) DEFAULT NULL, zip_code INT NOT NULL, city VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', is_active TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bill (id INT AUTO_INCREMENT NOT NULL, created_by_id INT NOT NULL, association_id INT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', from_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', to_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', amount NUMERIC(6, 2) NOT NULL, is_archived TINYINT(1) NOT NULL, reminder_number INT DEFAULT NULL, INDEX IDX_7A2119E3B03A8386 (created_by_id), INDEX IDX_7A2119E3EFB9C8A5 (association_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bill_reminder (id INT AUTO_INCREMENT NOT NULL, bill_id INT DEFAULT NULL, bill_reminder_condition_id INT NOT NULL, reminder_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_CDCB81811A8C12F5 (bill_id), INDEX IDX_CDCB81815B7B0027 (bill_reminder_condition_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bill_reminder_condition (id INT AUTO_INCREMENT NOT NULL, association_id INT DEFAULT NULL, description LONGTEXT DEFAULT NULL, day_for_paid INT NOT NULL, add_amount NUMERIC(5, 2) DEFAULT NULL, for_reminder_number SMALLINT NOT NULL, INDEX IDX_2A5FA47EFB9C8A5 (association_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bill_statut (id INT AUTO_INCREMENT NOT NULL, bill_id INT NOT NULL, updated_by_id INT DEFAULT NULL, balance NUMERIC(6, 2) DEFAULT NULL, updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_F2E5BEA91A8C12F5 (bill_id), INDEX IDX_F2E5BEA9896DBBDE (updated_by_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bill_statut_name (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE customer (id INT AUTO_INCREMENT NOT NULL, created_by_id INT NOT NULL, association_id INT NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, street VARCHAR(255) NOT NULL, street_number VARCHAR(10) DEFAULT NULL, zip_code INT NOT NULL, city VARCHAR(255) NOT NULL, company VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, INDEX IDX_81398E09B03A8386 (created_by_id), INDEX IDX_81398E09EFB9C8A5 (association_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE customer_session (id INT AUTO_INCREMENT NOT NULL, session_id INT DEFAULT NULL, customer_id INT NOT NULL, is_present TINYINT(1) NOT NULL, INDEX IDX_CC99716A613FECDF (session_id), INDEX IDX_CC99716A9395C3F3 (customer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE item (id INT AUTO_INCREMENT NOT NULL, association_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, price_of NUMERIC(5, 2) NOT NULL, INDEX IDX_1F1B251EEFB9C8A5 (association_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE item_bill (item_id INT NOT NULL, bill_id INT NOT NULL, INDEX IDX_B2115D18126F525E (item_id), INDEX IDX_B2115D181A8C12F5 (bill_id), PRIMARY KEY(item_id, bill_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE membership (id INT AUTO_INCREMENT NOT NULL, customer_id INT NOT NULL, membership_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', membership_done_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', is_active TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_86FFD2859395C3F3 (customer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE session (id INT AUTO_INCREMENT NOT NULL, created_by_id INT DEFAULT NULL, session_type_id INT NOT NULL, association_id INT DEFAULT NULL, day_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', to_done TINYINT(1) NOT NULL, INDEX IDX_D044D5D4B03A8386 (created_by_id), INDEX IDX_D044D5D4D7940EC9 (session_type_id), INDEX IDX_D044D5D4EFB9C8A5 (association_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE session_place (id INT AUTO_INCREMENT NOT NULL, association_id INT DEFAULT NULL, street VARCHAR(255) NOT NULL, street_number VARCHAR(10) DEFAULT NULL, zip_code INT NOT NULL, city VARCHAR(255) NOT NULL, INDEX IDX_AF60EB1BEFB9C8A5 (association_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE session_type (id INT AUTO_INCREMENT NOT NULL, session_place_id INT NOT NULL, association_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, price_of NUMERIC(5, 2) NOT NULL, INDEX IDX_4AAF5703860AC271 (session_place_id), INDEX IDX_4AAF5703EFB9C8A5 (association_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, association_id INT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), INDEX IDX_8D93D649EFB9C8A5 (association_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE bill ADD CONSTRAINT FK_7A2119E3B03A8386 FOREIGN KEY (created_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE bill ADD CONSTRAINT FK_7A2119E3EFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
        $this->addSql('ALTER TABLE bill_reminder ADD CONSTRAINT FK_CDCB81811A8C12F5 FOREIGN KEY (bill_id) REFERENCES bill (id)');
        $this->addSql('ALTER TABLE bill_reminder ADD CONSTRAINT FK_CDCB81815B7B0027 FOREIGN KEY (bill_reminder_condition_id) REFERENCES bill_reminder_condition (id)');
        $this->addSql('ALTER TABLE bill_reminder_condition ADD CONSTRAINT FK_2A5FA47EFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
        $this->addSql('ALTER TABLE bill_statut ADD CONSTRAINT FK_F2E5BEA91A8C12F5 FOREIGN KEY (bill_id) REFERENCES bill (id)');
        $this->addSql('ALTER TABLE bill_statut ADD CONSTRAINT FK_F2E5BEA9896DBBDE FOREIGN KEY (updated_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE customer ADD CONSTRAINT FK_81398E09B03A8386 FOREIGN KEY (created_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE customer ADD CONSTRAINT FK_81398E09EFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
        $this->addSql('ALTER TABLE customer_session ADD CONSTRAINT FK_CC99716A613FECDF FOREIGN KEY (session_id) REFERENCES session (id)');
        $this->addSql('ALTER TABLE customer_session ADD CONSTRAINT FK_CC99716A9395C3F3 FOREIGN KEY (customer_id) REFERENCES customer (id)');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251EEFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
        $this->addSql('ALTER TABLE item_bill ADD CONSTRAINT FK_B2115D18126F525E FOREIGN KEY (item_id) REFERENCES item (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE item_bill ADD CONSTRAINT FK_B2115D181A8C12F5 FOREIGN KEY (bill_id) REFERENCES bill (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE membership ADD CONSTRAINT FK_86FFD2859395C3F3 FOREIGN KEY (customer_id) REFERENCES customer (id)');
        $this->addSql('ALTER TABLE session ADD CONSTRAINT FK_D044D5D4B03A8386 FOREIGN KEY (created_by_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE session ADD CONSTRAINT FK_D044D5D4D7940EC9 FOREIGN KEY (session_type_id) REFERENCES session_type (id)');
        $this->addSql('ALTER TABLE session ADD CONSTRAINT FK_D044D5D4EFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
        $this->addSql('ALTER TABLE session_place ADD CONSTRAINT FK_AF60EB1BEFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
        $this->addSql('ALTER TABLE session_type ADD CONSTRAINT FK_4AAF5703860AC271 FOREIGN KEY (session_place_id) REFERENCES session_place (id)');
        $this->addSql('ALTER TABLE session_type ADD CONSTRAINT FK_4AAF5703EFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649EFB9C8A5 FOREIGN KEY (association_id) REFERENCES association (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE bill DROP FOREIGN KEY FK_7A2119E3B03A8386');
        $this->addSql('ALTER TABLE bill DROP FOREIGN KEY FK_7A2119E3EFB9C8A5');
        $this->addSql('ALTER TABLE bill_reminder DROP FOREIGN KEY FK_CDCB81811A8C12F5');
        $this->addSql('ALTER TABLE bill_reminder DROP FOREIGN KEY FK_CDCB81815B7B0027');
        $this->addSql('ALTER TABLE bill_reminder_condition DROP FOREIGN KEY FK_2A5FA47EFB9C8A5');
        $this->addSql('ALTER TABLE bill_statut DROP FOREIGN KEY FK_F2E5BEA91A8C12F5');
        $this->addSql('ALTER TABLE bill_statut DROP FOREIGN KEY FK_F2E5BEA9896DBBDE');
        $this->addSql('ALTER TABLE customer DROP FOREIGN KEY FK_81398E09B03A8386');
        $this->addSql('ALTER TABLE customer DROP FOREIGN KEY FK_81398E09EFB9C8A5');
        $this->addSql('ALTER TABLE customer_session DROP FOREIGN KEY FK_CC99716A613FECDF');
        $this->addSql('ALTER TABLE customer_session DROP FOREIGN KEY FK_CC99716A9395C3F3');
        $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251EEFB9C8A5');
        $this->addSql('ALTER TABLE item_bill DROP FOREIGN KEY FK_B2115D18126F525E');
        $this->addSql('ALTER TABLE item_bill DROP FOREIGN KEY FK_B2115D181A8C12F5');
        $this->addSql('ALTER TABLE membership DROP FOREIGN KEY FK_86FFD2859395C3F3');
        $this->addSql('ALTER TABLE session DROP FOREIGN KEY FK_D044D5D4B03A8386');
        $this->addSql('ALTER TABLE session DROP FOREIGN KEY FK_D044D5D4D7940EC9');
        $this->addSql('ALTER TABLE session DROP FOREIGN KEY FK_D044D5D4EFB9C8A5');
        $this->addSql('ALTER TABLE session_place DROP FOREIGN KEY FK_AF60EB1BEFB9C8A5');
        $this->addSql('ALTER TABLE session_type DROP FOREIGN KEY FK_4AAF5703860AC271');
        $this->addSql('ALTER TABLE session_type DROP FOREIGN KEY FK_4AAF5703EFB9C8A5');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649EFB9C8A5');
        $this->addSql('DROP TABLE association');
        $this->addSql('DROP TABLE bill');
        $this->addSql('DROP TABLE bill_reminder');
        $this->addSql('DROP TABLE bill_reminder_condition');
        $this->addSql('DROP TABLE bill_statut');
        $this->addSql('DROP TABLE bill_statut_name');
        $this->addSql('DROP TABLE customer');
        $this->addSql('DROP TABLE customer_session');
        $this->addSql('DROP TABLE item');
        $this->addSql('DROP TABLE item_bill');
        $this->addSql('DROP TABLE membership');
        $this->addSql('DROP TABLE session');
        $this->addSql('DROP TABLE session_place');
        $this->addSql('DROP TABLE session_type');
        $this->addSql('DROP TABLE user');
    }
}
