<?php

namespace App\Service;

/**
 * Crée si ce n'est pas fait et envoie la facture par email au client
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */

use App\Entity\Bill;
use App\Service\DateConverter;
use Symfony\Component\Mime\Address;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;


class EmailService
{
    function __construct(
        private MailerInterface $mailer,
        private DateConverter $dateConverter,
        private BillingPDFService $billingPDFService
    ) {
    }
    /**
     * Envoie un email avec la facture en pièce jointe à un client
     * Si la facture n'a pas encore été créer elle est crée
     *
     * @param Bill $bill
     * @return boolean
     */
    public function sendBillEmail(Bill $bill): bool
    {
        //on récupère le nom du fichier
        $billName = $this->billingPDFService->getBillNumber($bill) . '.pdf';

        //on controlle que la facture existe sinon on la génère
        $dossier = $bill->getCustomer()->getId() . $bill->getCustomer()->getCompany();
        if (!file_exists($this->billingPDFService->getBillFolder() . $dossier . '/' . $billName)) {
            if (!$this->billingPDFService->getPdfBill($bill)) {
                return false;
            }
        }

        //date de la facture
        $billingDate = explode('-', $bill->getBillingMonth()); //0 = mois, 1 = année

        $email = (new TemplatedEmail())
            ->from(new Address($bill->getAssociation()->getEmail(), $bill->getAssociation()->getName()))
            ->to($bill->getCustomer()->getEmail())
            ->subject($bill->getAssociation()->getName() . ' - Facture')
            ->htmlTemplate('email/bill.html.twig')
            ->context([
                'imgLogo' => '../../public/img/logos/' . $bill->getAssociation()->getLogoImg(),
                'emailSubject' => utf8_decode('Facturation ' . $this->dateConverter->NameOfMonth((int)$billingDate[0])),
                'emailHeader' => utf8_decode('Facturation ' . $this->dateConverter->NameOfMonth((int)$billingDate[0])),
                'emailBody1' => utf8_decode('Votre facture pour le mois de ' . $this->dateConverter->NameOfMonth((int)$billingDate[0])),
            ])
            ->attachFromPath('bills/' . $bill->getCustomer()->getId() . $bill->getCustomer()->getCompany() . '/' . $billName);

        //on envoie le mail
        try {
            $this->mailer->send($email);
            return true;
        } catch (TransportExceptionInterface $e) {
            return false;
        }
    }
}
