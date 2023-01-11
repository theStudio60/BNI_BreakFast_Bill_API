import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import dateFormat from "dateformat";
import apiBni from "../../../conf/axios/api.bni";
import { setAlert } from "../../../redux";
import { Loading } from "../../../components/utils";

export default function BillDetailsFacturation({ bill }) {
  const [customerSessions, setCustomerSessions] = useState(null);
  //récuperation de l'utilisateur courrant
  const user = useSelector((state) => state.user.data);

  let date = bill.billingMonth.split("-");

  date = new Date(date[1], date[0] - 1);
  let firstDay = dateFormat(
    new Date(date.getFullYear(), date.getMonth(), 1),
    "dd.mm.yyyy"
  );
  let lastDay = dateFormat(
    new Date(date.getFullYear(), date.getMonth() + 1, 0),
    "dd.mm.yyyy"
  );

  const link =
    "customer_sessions?page=1&itemsPerPage=100&customer.id=" +
    bill.customer.id +
    "&session.day_at%5Bbefore%5D=" +
    lastDay +
    "&session.day_at%5Bafter%5D=" +
    firstDay;

  //Définition du type de badge en fonction du statut de la facture
  let badgeStyle = "app_badge--info";
  let badgeText = "En attente";
  if (new Date() > new Date(bill.to_at)) {
    badgeStyle = "app_badge--danger";
    badgeText = "Expirée";
  }
  if (bill.amount === bill.billStatut.balance) {
    badgeStyle = "app_badge--success";
    badgeText = "Payé";
  }

  //création de notre requete API pour les CustomerSessions avec useEffect
  useEffect(() => {
    apiBni
      .get(link)
      .then((response) => {
        if (response.status === 200) {
          setCustomerSessions(response.data);
        }
      })
      //si item pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        console.log("Une erreur esr survenue !" + err);
      });
  }, []);

  //si chargement des usersession on met un loading
  if (!customerSessions) {
    return (
      <div className="column column--lg_5">
        <Loading />
      </div>
    );
  }
  return (
    <div className="column column--lg_5">
      <h3>Détail facturation</h3>
      <table className="table">
        <tbody>
          <tr>
            <th colSpan="3">Sessions</th>
          </tr>
          {customerSessions["hydra:member"].map((cs) => (
            <tr key={cs.id}>
              <td>{cs.session.session_type.name}</td>
              <td>{dateFormat(cs.session.day_at, "dd.mm.yyyy")}</td>
              <td>
                {user.association.bankInformation.currency}{" "}
                {cs.session.session_type.price_of}
              </td>
            </tr>
          ))}
          {
            <ItemList
              items={bill.items}
              currency={user.association.bankInformation.currency}
            />
          }
          <tr>
            <th colSpan="2">Total</th>
            <th>
              {user.association.bankInformation.currency} {bill.amount}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function ItemList({ items, currency }) {
  if (items != null) {
    return (
      <>
        <tr>
          <th colSpan="3">Liste des Items</th>
        </tr>
        {items.map((item) => (
          <tr key={item.id + item.name}>
            <td colSpan="2">{item.name}</td>
            <td>
              {currency} {item.price_of}
            </td>
          </tr>
        ))}
      </>
    );
  }
}
