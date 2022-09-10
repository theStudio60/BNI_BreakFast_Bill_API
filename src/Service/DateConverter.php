<?php 

namespace App\Service;
class DateConverter {

/**
 * Retourne le nom d'un mois en Français
 *
 * @param integer $month
 * @return string
 */
public function NameOfMonth(int $month): string{
    $monthName = ['', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    return $monthName[$month];
}    
}