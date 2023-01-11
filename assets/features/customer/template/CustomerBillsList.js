import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import dateFormat from "dateformat";

export default function CustomerBillsList(props){

    const user = useSelector((state) => state.user.data);

    const [bills] = useState(props.bills);

    return(
        <div className="column column--lg_5">
              <h3>Factures</h3>
                <table className="table">
                    <tbody>
                        {bills['hydra:member'].map((bill) => {

                                //Définition du type de badge en fonction du statut de la facture
                                let badgeStyle = "app_badge--info";
                                let badgeText = "En attente";
                                if(new Date() > new Date(bill.to_at)){
                                    badgeStyle = "app_badge--danger";
                                    badgeText = "Expirée";
                                }
                                if(bill.amount === bill.billStatut.balance){
                                    badgeStyle = "app_badge--success";
                                    badgeText = "Payé";
                                }

                            return (
                                
                                <tr key={bill.id}>
                                    <th><NavLink to={"/bill/" + bill.id} className="nav-link">{bill.billNumber}</NavLink></th>
                                    <td>{user.association.bankInformation.currency} {bill.amount}</td>
                                    <td>{dateFormat(bill.to_at, "dd.mm.yyyy")}</td>
                                    <td><span className={badgeStyle}>{badgeText}</span></td>
                                </tr>
                                
                            );
                        })}
                    </tbody>
                </table>
      </div>
        )

}