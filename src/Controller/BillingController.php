<?php

namespace App\Controller;

use App\Entity\Bill;
use Fpdf\Fpdf;
use Sprain\SwissQrBill\QrBill;
use Doctrine\DBAL\Driver\PDO\Exception;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Sprain\SwissQrBill\DataGroup\Element\CombinedAddress;
use Sprain\SwissQrBill\DataGroup\Element\PaymentReference;
use Sprain\SwissQrBill\DataGroup\Element\StructuredAddress;
use Sprain\SwissQrBill\DataGroup\Element\CreditorInformation;
use Sprain\SwissQrBill\Reference\QrPaymentReferenceGenerator;
use Sprain\SwissQrBill\DataGroup\Element\AdditionalInformation;
use Sprain\SwissQrBill\PaymentPart\Output\FpdfOutput\FpdfOutput;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sprain\SwissQrBill\DataGroup\Element\PaymentAmountInformation;

class BillingController extends AbstractController
{

    function __construct(){
    }


    #[Route(path: '/test', name: '')]
    public function generateBill()
    {

        $spreadsheet = new Spreadsheet();

        $spreadsheet->getProperties("")
            ->setCreator("--BNI--")
            ->setLastModifiedBy("BNI - User")
            ->setTitle("Titre")
            ->setSubject("Sujet")
            ->setDescription("Description")
            ->setCategory("Factures");
        
        $spreadsheet->getActiveSheet()->getPageMargins()->setTop(0.2);
        $spreadsheet->getActiveSheet()->getPageMargins()->setLeft(0.3);
        $spreadsheet->getActiveSheet()->getPageMargins()->setRight(0.3);
        
        //footer
        $spreadsheet->getActiveSheet()->getHeaderFooter()
        ->setOddFooter('&C&B BNI &RPage &P of &N');
        
        $sheet = $spreadsheet->getActiveSheet();

        //dimension des colonnes		
        $sheet->getColumnDimension('A')->setWidth('30');		
        $sheet->getColumnDimension('B')->setWidth('15');	
        $sheet->getColumnDimension('C')->setWidth('17');		
        $sheet->getColumnDimension('D')->setWidth('15');
        $sheet->getColumnDimension('F')->setWidth('15');
        $sheet->getColumnDimension('G')->setWidth('15');
        $sheet->getColumnDimension('H')->setWidth('15');
        
        //grouper cellules
        $sheet->mergeCells('C3:D3');
        $sheet->mergeCells('C4:D4');
        $sheet->mergeCells('C5:D5');

        $sheet->mergeCells('D10:F10');
        $sheet->mergeCells('D11:F11');
        $sheet->mergeCells('D12:F12');
        $sheet->mergeCells('D13:F13');

        // add image
        $sheeti = new \PhpOffice\PhpSpreadsheet\Worksheet\Drawing();
        $sheeti->setName('Otime');
        $sheeti->setDescription('Otime - logo');
        $sheeti->setPath('./img/logo.jpg');
        $sheeti->setHeight(100);
        $sheeti->setWidth(250);
        $sheeti->setCoordinates("A1");
        $sheeti->setOffsetX(10);
        $sheeti->setOffsetY(5);
        $sheeti->setWorksheet($sheet);
    
        $sheet->setCellValue('C3', 'Numéro de facture');
        $sheet->setCellValue('C4', 'Date de la facture');
        $sheet->setCellValue('C5', 'Échéance de la facture');

        $sheet->setCellValue('F3', 'F-M0002Q2.22')->getStyle('G3')->applyFromArray(self::ST_ALIGN_RIGHT);
        $sheet->setCellValue('F4', '8/8/2022')->getStyle('G4')->applyFromArray(self::ST_ALIGN_RIGHT);
        $sheet->setCellValue('F5', '8/9/2022')->getStyle('G5')->applyFromArray(self::ST_ALIGN_RIGHT);

        //Nom du client
        $sheet->getRowDimension(17)->setRowHeight('30');
        $sheet->setCellValue('D10', 'PARTICULE Z');
        $sheet->setCellValue('D11', 'Joëlle Cornuz');
        $sheet->setCellValue('D12', 'Route d\'Eclepens 7');
        $sheet->setCellValue('D13', '1377-Oulens-sous-Echallens');

        $sheet->setCellValue('A16', 'Frais 2ème trimestre')->getStyle('A16')->applyFromArray(array_merge(self::ST_BOLD));

        $sheet->setCellValue('A17', 'Description')->getStyle('A17')->applyFromArray(array_merge(self::ST_BOLD, self::ST_ALIGN_VERT));
        $sheet->setCellValue('B17', 'Coût unitaire')->getStyle('B17')->applyFromArray(array_merge(self::ST_BOLD, self::ST_ALIGN_VERT));
        $sheet->setCellValue('C17', 'Quantité (jours)')->getStyle('C17')->applyFromArray(array_merge(self::ST_BOLD, self::ST_ALIGN_VERT));
        $sheet->setCellValue('D17', 'Total')->getStyle('D17')->applyFromArray(array_merge(self::ST_BOLD, self::ST_ALIGN_VERT, self::ST_ALIGN_RIGHT));

        $sheet->setCellValue('A18', 'Avril');
        $sheet->setCellValue('B18', 'fr. 18.00')->getStyle('B18')->applyFromArray(self::ST_ALIGN_RIGHT);
        $sheet->setCellValue('C18', '5');
        $sheet->setCellValue('D18', 'fr. 90.00')->getStyle('D18')->applyFromArray(self::ST_ALIGN_RIGHT);
        $sheet->setCellValue('A19', 'Abonnement Netflix');
        $sheet->setCellValue('B19', 'fr. 9.90')->getStyle('B19')->applyFromArray(self::ST_ALIGN_RIGHT);
        $sheet->setCellValue('C19', '1');
        $sheet->setCellValue('D19', 'fr. 9.90')->getStyle('D19')->applyFromArray(self::ST_ALIGN_RIGHT);

        $sheet->setCellValue('A21', 'Mai');
        $sheet->setCellValue('B21', 'fr. 18.00')->getStyle('B21')->applyFromArray(self::ST_ALIGN_RIGHT);
        $sheet->setCellValue('C21', '5');
        $sheet->setCellValue('D21', 'fr. 90.00')->getStyle('D21')->applyFromArray(self::ST_ALIGN_RIGHT);
        $sheet->setCellValue('A22', 'Abonnement Netflix');
        $sheet->setCellValue('B22', 'fr. 9.90')->getStyle('B22')->applyFromArray(self::ST_ALIGN_RIGHT);
        $sheet->setCellValue('C22', '1');
        $sheet->setCellValue('D22', 'fr. 9.90')->getStyle('D22')->applyFromArray(self::ST_ALIGN_RIGHT);

        $sheet->setCellValue('A24', 'Juin');
        $sheet->setCellValue('B24', 'fr. 18.00')->getStyle('B24')->applyFromArray(self::ST_ALIGN_RIGHT);
        $sheet->setCellValue('C24', '5');
        $sheet->setCellValue('D24', 'fr. 90.00')->getStyle('D24')->applyFromArray(self::ST_ALIGN_RIGHT);
        $sheet->setCellValue('A25', 'Abonnement Netflix');
        $sheet->setCellValue('B25', 'fr. 9.90')->getStyle('B25')->applyFromArray(self::ST_ALIGN_RIGHT);
        $sheet->setCellValue('C25', '1');
        $sheet->setCellValue('D25', 'fr. 9.90')->getStyle('D25')->applyFromArray(self::ST_ALIGN_RIGHT);

        $sheet->setCellValue('C27', 'Montant dû')->getStyle('C27')->applyFromArray(array_merge(self::ST_BOLD));
        $sheet->setCellValue('D27', 'fr. 324.00')->getStyle('D27')->applyFromArray(array_merge(self::ST_BOLD, self::ST_ALIGN_RIGHT));



        //export
        $writer = new Xlsx($spreadsheet);
        // Create a Temporary file in the system
        $fileName = 'hello.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        // Create the excel file in the tmp directory of the system
        $writer->save($temp_file);

        // Return the excel file as an attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
        
    }





//constante de style
  const ST_BOLD = 
  [
'font' => [
    'bold' => true,
],
];

const ST_ALIGN_VERT = 
[
'alignment' => [
    'vertical' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_CENTER,
]
];

const ST_ALIGN_RIGHT = 
[
'alignment' => [
    'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,
],
]; 


#[Route(path: '/getQR', name: '')]
public function getQr(){
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


        // 2. Create an FPDF instance (or use an existing one from your project)
        $fpdf = new Fpdf('P', 'mm', 'A4');
        $fpdf->AddPage();

        // 3. Create a full payment part for FPDF
        $output = new FpdfOutput($qrBill, 'en', $fpdf);
        $output
            ->setPrintable(false)
            ->getPaymentPart();

        // 4. For demo purposes, let's save the generated example in a file
        $examplePath = __DIR__ . "/fpdf_example.pdf";
        $fpdf->Output($examplePath, 'F');

        print "PDF example created here : " . $examplePath;
        }

}
