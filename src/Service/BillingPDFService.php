<?php

namespace App\Service;

/**
 * Cette class crée une facture en PDF et l'enregistre dans le dossier client "PDF/bill/nomclient/nomFacture.pdf"
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */

use Fpdf\Fpdf;
use App\Entity\Bill;
use App\Service\DateConverter;
use Sprain\SwissQrBill\QrBill;
use App\Repository\CustomerSessionRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sprain\SwissQrBill\DataGroup\Element\CombinedAddress;
use Sprain\SwissQrBill\DataGroup\Element\PaymentReference;
use Sprain\SwissQrBill\DataGroup\Element\StructuredAddress;
use Sprain\SwissQrBill\DataGroup\Element\CreditorInformation;
use Sprain\SwissQrBill\Reference\QrPaymentReferenceGenerator;
use Sprain\SwissQrBill\DataGroup\Element\AdditionalInformation;
use Sprain\SwissQrBill\PaymentPart\Output\FpdfOutput\FpdfOutput;
use Sprain\SwissQrBill\DataGroup\Element\PaymentAmountInformation;

class BillingPDFService
{
    public function __construct(
        public CustomerSessionRepository $customerSessionRepository,
        public DateConverter $dateConverter
    ) { }


    /**
     * Creer une facture en PDF et l'enregistre dans le dossier client "PDF/bill/nomclient/nomFacture.pdf"
     *
     * @param Bill $bill
     * @return true si ok sinon une Réponse Json
     */
    public function getPDFBill(Bill $bill)
    {
        $police = "times"; //'courier', 'helvetica', 'times', 'symbol', 'zapfdingbats'
        $pdf = new Fpdf('P', 'mm', 'A4');
                
        // nom du fichier final
        $nom_file = $bill->getBillNumber() . ".pdf";

        //si le dossier client n'existe pas encore on le créer
        $customerFolder = $bill->getCustomer()->getId() . $bill->getCustomer()->getCompany();
        if (!is_dir($this->getBillFolder().$customerFolder)) mkdir($this->getBillFolder() . $customerFolder);

        //on controlle que la facture n'aille pas déjà été generée
        if (file_exists($this->getBillFolder() . $customerFolder . '/' . $nom_file)) {
            // return new JsonResponse(['message' => "La facture à déjà été créer", 'code' => 500], 500);
            return false;
        }

        //date de la facture
        $billingDate = explode('-', $bill->getBillingMonth()); //0 = mois, 1 = année
        $currency = $bill->getAssociation()->getBankInformation()->getCurrency();

        // on sup les 2 cm en bas
        $pdf->SetAutoPagebreak(False);
        $pdf->SetMargins(0, 0, 0);

        $pdf->AddPage();

        // logo : 65 de largeur et 30 de hauteur
        $pdf->Image('./img/logos/' . $bill->getAssociation()->getLogoImg(), 10, 10, 65, 30);

        //Numéro de facture
        $num_fact = utf8_decode($bill->getBillNumber());
        $pdf->SetLineWidth(0.1);
        $pdf->SetFillColor(192);
        $pdf->Rect(120, 15, 85, 8, "DF");
        $pdf->SetXY(120, 15);
        $pdf->SetFont($police, "B", 12);
        $pdf->Cell(85, 8, $num_fact, 0, 0, 'C');

        //Dates
        $pdf->SetFont($police, '', 11);
        $pdf->SetXY(120, 25);
        $pdf->Cell(60, 8, utf8_decode("Date de la facture"));
        $pdf->SetFont($police, '', 11);
        $pdf->SetXY(120, 30);
        $pdf->Cell(60, 8, utf8_decode("Échéance de la facture"));

        $pdf->SetFont($police, '', 11);
        $pdf->SetXY(183, 25);
        $pdf->Cell(60, 8, date_format($bill->getFromAt(), "d-m-Y"));
        $pdf->SetFont($police, '', 11);
        $pdf->SetXY(183, 30);
        $pdf->Cell(60, 8, date_format($bill->getToAt(), "d-m-Y"));

        // adr fact du client
        $pdf->SetFont($police, '', 12);
        $x = 110;
        $y = 50;
        $pdf->SetXY($x, $y);
        $pdf->Cell(100, 8, utf8_decode($bill->getCustomer()->getCompany()), 0, 0, '');
        $y += 4;
        $pdf->SetXY($x, $y);
        $pdf->Cell(100, 8, utf8_decode($bill->getCustomer()->getFirstname() . ' ' . $bill->getCustomer()->getLastname()), 0, 0, '');
        $y += 4;
        $pdf->SetXY($x, $y);
        $pdf->Cell(100, 8, utf8_decode($bill->getCustomer()->getStreet() . ' ' . $bill->getCustomer()->getStreetNumber()), 0, 0, '');
        $y += 4;
        $pdf->SetXY($x, $y);
        $pdf->Cell(100, 8, utf8_decode($bill->getCustomer()->getZipCode() . ' ' . $bill->getCustomer()->getCity()), 0, 0, '');
        $y += 4;

        // Indication periode de facturation
        $pdf->SetFont($police, "BU", 11);
        $pdf->SetXY(5, 82);
        $pdf->Cell($pdf->GetStringWidth('Facturation ' . $this->dateConverter->NameOfMonth((int)$billingDate[0])), 0, utf8_decode('Facturation ' . $this->dateConverter->NameOfMonth((int)$billingDate[0])), 0, "L");

        // ***********************
        // le cadre des articles
        // ***********************
        // cadre avec 12 lignes max ! et 118 de hauteur --> 90 + 76 = 166 pour les traits verticaux
        $pdf->SetLineWidth(0.1);
        $pdf->Rect(5, 90, 200, 0, "D");
        // cadre titre des colonnes
        $pdf->Line(5, 100, 205, 100);
        // titre colonne
        $pdf->SetXY(5, 91.5);
        $pdf->SetFont($police, 'B', 11);
        $pdf->Cell(33, 8, "Description", 0, 0, 'L');
        $pdf->SetXY(106, 91.5);
        $pdf->SetFont($police, 'B', 11);
        $pdf->Cell(33, 8, utf8_decode("Coût unitaire"), 0, 0, 'L');
        $pdf->SetXY(139, 91.5);
        $pdf->SetFont($police, 'B', 11);
        $pdf->Cell(33, 8, utf8_decode("Quantité (jours)"), 0, 0, 'L');
        $pdf->SetXY(172, 91.5);
        $pdf->SetFont($police, 'B', 11);
        $pdf->Cell(33, 8, "TOTAL HT", 0, 0, 'R');

        // les articles
        $pdf->SetFont($police, '', 10);
        $y = 92;

        //Selection des sessions à facturer dans le mois
        $total = null;

        $customerSessions = $this->customerSessionRepository->findByMonth($bill->getCustomer(), (int)$billingDate[0], (int)$billingDate[1]);
        foreach ($customerSessions as $key => $value) {
            $pdf->SetXY(5, $y + 9);
            $pdf->Cell(106, 5, utf8_decode($value->getSession()->getSessionType()->getName() . ' ' . date_format($value->getSession()->getDayAt(), "d-m-Y")), 0, 0, 'L');
            $pdf->SetXY(106, $y + 9);
            $pdf->Cell(33, 5, utf8_decode($currency . ' ' . $value->getSession()->getSessionType()->getPriceOf()), 3, ' ', true, 0, 0, 'R');
            $pdf->SetXY(139, $y + 9);
            $pdf->Cell(33, 5, utf8_decode(1), 0, 0, 'C');
            $pdf->SetXY(172, $y + 9);
            $pdf->Cell(33, 5, utf8_decode($currency . ' ' . $value->getSession()->getSessionType()->getPriceOf()), 0, 0, 'R');
            $pdf->Line(5, $y + 14, 205, $y + 14);
            $y += 6;
            $total += $value->getSession()->getSessionType()->getPriceOf();
        }
        //Selection des items à facturer
        foreach ($bill->getItems() as $key => $value) {
            $pdf->SetXY(10, $y + 9);
            $pdf->Cell(106, 5, utf8_decode($value->getName()), 0, 0, 'L');
            $pdf->SetXY(106, $y + 9);
            $pdf->Cell(33, 5, utf8_decode($currency . ' ' . $value->getPriceOf()), 3, ' ', true, 0, 0, 'R');
            $pdf->SetXY(139, $y + 9);
            $pdf->Cell(33, 5, utf8_decode(1), 0, 0, 'C');
            $pdf->SetXY(172, $y + 9);
            $pdf->Cell(33, 5, utf8_decode($currency . ' ' . $value->getPriceOf()), 0, 0, 'R');
            $pdf->Line(5, $y + 14, 205, $y + 14);
            $y += 6;
            $total += $value->getPriceOf();
        }


        $h = $y + 8;
        // les traits verticaux colonnes
        $pdf->Line(5, 90, 5, $h + 8);
        $pdf->Line(106, 90, 106, $h);
        $pdf->Line(139, 90, 139, $h);
        $pdf->Line(172, 90, 172, $h);
        $pdf->Line(205, 90, 205, $h + 8);

        //Total
        $pdf->SetFont($police, 'B', 10);
        $pdf->SetLineWidth(0.1);
        $pdf->Rect(5, $h, 200, 8, "F");
        $pdf->SetXY(139, $y + 9.5);
        $pdf->Cell(33, 5, 'TOTAL', 0, 0, 'C');
        $pdf->SetXY(172, $y + 9.5);
        $pdf->Cell(33, 5, $currency . ' ' . number_format($total, 2), 0, 0, 'R');

        $pdf->Line(5, $h + 8, 205, $h + 8);


        // **************************
        // pied de page
        // **************************
        $pdf->SetFont($police, '', 8);
        $y1 = $h;
        $pdf->SetXY(1, $y1 + 10);
        $pdf->Cell($pdf->GetPageWidth() - 5, 5, utf8_decode(
            $bill->getAssociation()->getName() . ' <> ' .
                $bill->getAssociation()->getStreet() . ' ' . $bill->getAssociation()->getStreetNumber() . ' - ' .
                $bill->getAssociation()->getZipCode() . ' ' . $bill->getAssociation()->getCity() . ' <> ' .
                $bill->getAssociation()->getEmail()
        ), 0, 0, 'C');

        //Création du buletin QR
        $output = new FpdfOutput($this->getQrImage($bill), 'en', $pdf);
        $output
            ->setPrintable(false)
            ->getPaymentPart();


        if ($total != $bill->getAmount()) {
            return new JsonResponse(['message' => 'Le montant de la facture (' . $bill->getAmount() . ') ne corespond pas au calcul actuelle (' . $total . '). Solution: re-generer la facture manuellement.', 'code' => 404], 404);
        }

        //on créer la facture
        $pdf->Output("F", $this->getBillFolder() . $customerFolder . '/' . $nom_file);
        return true;
    }



    public function getQrImage(Bill $bill)
    {
        $customer = $bill->getCustomer();
        $association = $bill->getAssociation();
        $bankInfo = $bill->getAssociation()->getBankInformation();

        // Create a new instance of QrBill, containing default headers with fixed values
        $qrBill = QrBill::create();

        // Add creditor information
        // Who will receive the payment and to which bank account?
        $qrBill->setCreditor(
            CombinedAddress::create(
                $association->getName(),
                $association->getStreet() . ' ' . $association->getStreetNumber(),
                $association->getZipCode() . ' ' . $association->getCity(),
                'CH'
            )
        );

        $qrBill->setCreditorInformation(
            CreditorInformation::create(
                $bankInfo->getQRIBAN() // This is a special QR-IBAN. Classic IBANs will not be valid here.
            )
        );

        // Add debtor information
        // Who has to pay the invoice? This part is optional.
        //
        // Notice how you can use two different styles of addresses: CombinedAddress or StructuredAddress.
        // They are interchangeable for creditor as well as debtor.
        $qrBill->setUltimateDebtor(
            StructuredAddress::createWithStreet(
                $customer->getFirstname() . ' ' . $customer->getLastname(),
                $customer->getStreet(),
                $customer->getStreetNumber(),
                $customer->getZipCode(),
                $customer->getCity(),
                'CH'
            )
        );

        // Add payment amount information
        // What amount is to be paid?
        $qrBill->setPaymentAmountInformation(
            PaymentAmountInformation::create(
                $bankInfo->getCurrency(),
                $bill->getAmount()
            )
        );

        // Add payment reference
        // This is what you will need to identify incoming payments.
        $referenceNumber = QrPaymentReferenceGenerator::generate(
            null,  // You receive this number from your bank (BESR-ID). Unless your bank is PostFinance, in that case use NULL.
            $bill->getId() // A number to match the payment with your internal data, e.g. an invoice number
        );

        $qrBill->setPaymentReference(
            PaymentReference::create(
                PaymentReference::TYPE_QR,
                $referenceNumber
            )
        );

        $billingDate = explode('-', $bill->getBillingMonth()); //0 = mois, 1 = année
        // Optionally, add some human-readable information about what the bill is for.
        $qrBill->setAdditionalInformation(
            AdditionalInformation::create(
                $bill->getBillNumber()
            )
        );

        return $qrBill;
    }

/**
 * Retourne le nom du dossier des factures PDF
 *
 * @return string
 */
    public function getBillFolder():string{
        return "PDF/bill/";
    }
}
