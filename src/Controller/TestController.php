<?php
namespace App\Controller;

use Fpdf\Fpdf;
use Sprain\SwissQrBill\QrBill;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sprain\SwissQrBill\DataGroup\Element\CombinedAddress;
use Sprain\SwissQrBill\DataGroup\Element\PaymentReference;
use Sprain\SwissQrBill\DataGroup\Element\StructuredAddress;
use Sprain\SwissQrBill\DataGroup\Element\CreditorInformation;
use Sprain\SwissQrBill\Reference\QrPaymentReferenceGenerator;
use Sprain\SwissQrBill\DataGroup\Element\AdditionalInformation;
use Sprain\SwissQrBill\PaymentPart\Output\FpdfOutput\FpdfOutput;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sprain\SwissQrBill\DataGroup\Element\PaymentAmountInformation;

class TestController extends AbstractController
{
    #[Route('/test', name: 'app_test')]
    public function index()
    {

    $police = "Arial";
    
// le mettre au debut car plante si on declare $mysqli avant !
$pdf = new Fpdf( 'P', 'mm', 'A4' );


// on sup les 2 cm en bas
$pdf->SetAutoPagebreak(False);
$pdf->SetMargins(0,0,0);


$nb_page = 1;

    $pdf->AddPage();

    // nom du fichier final
    $nom_file = "fichierpdf.pdf";
    
    // logo : 65 de largeur et 30 de hauteur
    $pdf->Image('./img/logo.jpg', 10, 10, 65, 30);
    
    //Numéro de facture
    $num_fact = utf8_decode("FACTURE N°XX0101 ");
    $pdf->SetLineWidth(0.1); $pdf->SetFillColor(192); $pdf->Rect(120, 15, 85, 8, "DF");
    $pdf->SetXY( 120, 15 ); $pdf->SetFont( $police, "B", 12 ); $pdf->Cell( 85, 8, $num_fact, 0, 0, 'C');

    //Dates
    $pdf->SetFont($police,'',11); $pdf->SetXY(120, 25);
    $pdf->Cell( 60, 8, utf8_decode("Date de la facture"));
    $pdf->SetFont($police,'',11); $pdf->SetXY(120, 30);
    $pdf->Cell( 60, 8, utf8_decode("Échéance de la facture"));

    $pdf->SetFont($police,'',11); $pdf->SetXY(183, 25);
    $pdf->Cell( 60, 8, "28-06-2022");
    $pdf->SetFont($police,'',11); $pdf->SetXY(183, 30);
    $pdf->Cell( 60, 8, "28-07-2022");
    
    // adr fact du client
    $pdf->SetFont($police,'' ,11); $x = 110 ; $y = 50;
    $pdf->SetXY( $x, $y ); $pdf->Cell( 100, 8, utf8_decode('PARTICULE Z'), 0, 0, ''); $y += 4;
    $pdf->SetXY( $x, $y ); $pdf->Cell( 100, 8, utf8_decode('Joëlle Cornuz'), 0, 0, ''); $y += 4;
    $pdf->SetXY( $x, $y ); $pdf->Cell( 100, 8, utf8_decode('Route d\'Eclepens 7'), 0, 0, ''); $y += 4;
    $pdf->SetXY( $x, $y ); $pdf->Cell( 100, 8, utf8_decode('1377-Oulens-sous-Echallens'), 0, 0, ''); $y += 4;
    $pdf->SetXY( $x, $y ); $pdf->Cell( 100, 8, utf8_decode('CCP Ville') , 0, 0, ''); $y += 4;    

    // observations
    $pdf->SetFont( $police, "BU", 10 ); $pdf->SetXY( 5, 75 ) ; $pdf->Cell($pdf->GetStringWidth("Observations"), 0, "Observations", 0, "L");
    $pdf->SetFont( $police, "", 10 ); $pdf->SetXY( 5, 78 ) ; $pdf->MultiCell(190, 4, 'Ici les observations', 0, "L");


    // ***********************
    // le cadre des articles
    // ***********************
    // cadre avec 11 lignes max ! et 118 de hauteur --> 90 + 76 = 166 pour les traits verticaux
    $pdf->SetLineWidth(0.1); $pdf->Rect(5, 90, 200, 0, "D");
    // cadre titre des colonnes
    $pdf->Line(5, 100, 205, 100);
    // titre colonne
    $pdf->SetXY( 5, 91.5 ); $pdf->SetFont($police,'B',8); $pdf->Cell( 33, 8, "Description", 0, 0, 'L');
    $pdf->SetXY( 106, 91.5 ); $pdf->SetFont($police,'B',8); $pdf->Cell( 33, 8, utf8_decode("Coût unitaire"), 0, 0, 'L');
    $pdf->SetXY( 139, 91.5 ); $pdf->SetFont($police,'B',8); $pdf->Cell( 33, 8, utf8_decode("Quantité (jours)"), 0, 0, 'L');
    $pdf->SetXY( 172, 91.5 ); $pdf->SetFont($police,'B',8); $pdf->Cell( 33, 8, "TOTAL HT", 0, 0, 'R');

    // les articles
    $pdf->SetFont('Arial','',8);
    $y = 92;

        for ($i=0; $i < 10; $i++) { 
            $pdf->SetXY(5, $y+9 ); $pdf->Cell( 106, 5, utf8_decode('Libellé'), 0, 0, 'L');
            $pdf->SetXY( 106, $y+9 ); $pdf->Cell( 33, 5, utf8_decode('Qté'), 3, ' ', true, 0, 0, 'R');
            $pdf->SetXY( 139, $y+9 ); $pdf->Cell( 33, 5, utf8_decode('prix'), 0, 0, 'C');
            $pdf->SetXY( 172, $y+9 ); $pdf->Cell( 33, 5, utf8_decode($y), 0, 0, 'R');
            
            $pdf->Line(5, $y+14, 205, $y+14);            
            $y += 6;
        }

        $h = $y+8;
    // les traits verticaux colonnes
    $pdf->Line(5, 90, 5, $h+8); $pdf->Line(106, 90, 106, $h); $pdf->Line(139, 90, 139, $h); $pdf->Line(172, 90, 172, $h); $pdf->Line(205, 90, 205, $h+8);        

    //Total
    $pdf->SetFont($police,'B' ,10);
    $pdf->SetLineWidth(0.1); $pdf->Rect(5, $h, 200, 8, "F");
    $pdf->SetXY( 139, $y+9.5 ); $pdf->Cell( 33, 5, 'TOTAL', 0, 0, 'C');
    $pdf->SetXY( 172, $y+9.5 ); $pdf->Cell( 33, 5, $y, 0, 0, 'R');
    
    $pdf->Line(5, $h+8, 205, $h+8);
    

    // **************************
    // pied de page
    // **************************
    $pdf->SetFont($police,'' ,8);
    $y1 = 270;
    $pdf->SetXY( 1, $y1 + 16 );
    $pdf->Cell( $pdf->GetPageWidth()-5, 5, utf8_decode("BNI - Talens Echallens <> Rue central 21 - 1040 Echallens <> Email: info@info.ch"), 0, 0, 'R');

    //Création du buletin QR
    $output = new FpdfOutput($this->getQrImage(), 'en', $pdf);
    $output
        ->setPrintable(false)
        ->getPaymentPart();

$pdf->Output("I", $nom_file);
    }



    public function getQrImage(){
        // This is an example how to create a typical qr bill:
    // - with reference number
    // - with known debtor
    // - with specified amount
    // - with human-readable additional information
    //
    // - using your QR-IBAN
    //
    // Likely the most common use-case in the business world.
    
    // Create a new instance of QrBill, containing default headers with fixed values
    $qrBill = QrBill::create();
    
    // Add creditor information
    // Who will receive the payment and to which bank account?
    $qrBill->setCreditor(
        CombinedAddress::create(
            'Robert Schneider AG',
            'Rue du Lac 1268',
            '2501 Biel',
            'CH'
        ));
    
    $qrBill->setCreditorInformation(
        CreditorInformation::create(
            'CH4431999123000889012' // This is a special QR-IBAN. Classic IBANs will not be valid here.
        ));
    
    // Add debtor information
    // Who has to pay the invoice? This part is optional.
    //
    // Notice how you can use two different styles of addresses: CombinedAddress or StructuredAddress.
    // They are interchangeable for creditor as well as debtor.
    $qrBill->setUltimateDebtor(
        StructuredAddress::createWithStreet(
            'Pia-Maria Rutschmann-Schnyder',
            'Grosse Marktgasse',
            '28',
            '9400',
            'Rorschach',
            'CH'
        ));
    
    // Add payment amount information
    // What amount is to be paid?
    $qrBill->setPaymentAmountInformation(
        PaymentAmountInformation::create(
            'CHF',
            2500.25
        ));
    
    // Add payment reference
    // This is what you will need to identify incoming payments.
    $referenceNumber = QrPaymentReferenceGenerator::generate(
        '210000',  // You receive this number from your bank (BESR-ID). Unless your bank is PostFinance, in that case use NULL.
        '313947143000901' // A number to match the payment with your internal data, e.g. an invoice number
    );
    
    $qrBill->setPaymentReference(
        PaymentReference::create(
            PaymentReference::TYPE_QR,
            $referenceNumber
        ));
    
    // Optionally, add some human-readable information about what the bill is for.
    $qrBill->setAdditionalInformation(
        AdditionalInformation::create(
            'Invoice 123456, Gardening work'
        )
    );
    
    // Now get the QR code image and save it as a file.
    try {
        // $qrBill->getQrCode()->writeFile(__DIR__ . '/qr.png');
        // $qrBill->getQrCode()->writeFile(__DIR__ . '/qr.svg');
    } catch (Exception $e) {
        print $e;
        exit;
    }

    return $qrBill;
}    
}
