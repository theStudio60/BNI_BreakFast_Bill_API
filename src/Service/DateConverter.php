<?php 

namespace App\Service;

/**
 * Cette fonction return les mois de l'année en français
 * @return string
 *
 * @author Julien Ochsenbein (julien.ochsenbein@gmail.com)
 * @todo Pour Studio60
 */
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