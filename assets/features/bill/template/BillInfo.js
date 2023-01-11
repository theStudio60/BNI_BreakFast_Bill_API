import React from "react";
import { useSelector } from "react-redux";
import { DateFormat } from "../../../components/utils/DateFormat";

export default function BillInfo(props) {
  const bill = props.bill;
  const user = useSelector((state) => state.user.data);

  //Définition du type de badge en fonction du statut de la facture
  let badgeStyle = "app_badge--info";
  let badgeText = "En attente";
  if (new Date() > new Date(props.bill.to_at)) {
    badgeStyle = "app_badge--danger";
    badgeText = "Expirée";
  }
  if (props.bill.amount === props.bill.billStatut.balance) {
    badgeStyle = "app_badge--success";
    badgeText = "Payé";
  }

  //definition du montant deja payé
  let balance = "--";
  if (bill.billStatut.balance) {
    balance =
      user.association.bankInformation.currency + " " + bill.billStatut.balance;
  }

  return (
    <div className="column column--lg_3">
      <h3>Info Facture</h3>

      <p className="column__title">Facture :</p>
      <p className="column__description">{props.bill.billNumber}</p>

      <p className="column__title">Status facture :</p>
      <p className="column__description">
        <span className={badgeStyle}>{badgeText}</span>
      </p>

      <p className="column__title">Montant total:</p>
      <p className="column__description">
        {user.association.bankInformation.currency} {bill.amount}
      </p>

      <p className="column__title">Déjà payé :</p>
      <p className="column__description">{balance}</p>

      <p className="column__title">Date facturation :</p>
      <p className="column__description">
        <DateFormat date={bill.from_at} format="dd.mm.yyyy" />
      </p>

      <p className="column__title">Payable jusque au :</p>
      <p className="column__description">
        <DateFormat date={bill.to_at} format="dd.mm.yyyy" />
      </p>
    </div>
  );
}
