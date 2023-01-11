import dateFormat from "dateformat";

export function DateFormat({date, format}){

    let dt = date.split("-");
    // Récupération de l'année et du mois
        let year = dt[0];
        let month = dt[1];
    let dateDayandHours = dt[2].split("T");
        let day = dateDayandHours[0];
    let dateHours = dateDayandHours[1].split(":");
        let hours = dateHours[0];
        let min = dateHours[1];

    let dateTime = year+"/"+month+"/"+day+" "+hours+":"+min+":00"
    return(dateFormat(dateTime, format))    
}