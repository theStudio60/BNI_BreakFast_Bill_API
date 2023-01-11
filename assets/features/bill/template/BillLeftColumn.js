import React from "react";

export default function BillLeftColumn(props) {
  const customer = props.customer;

  return (
    <div className="column column--lg_3">
      <h3>Détails client</h3>

      <p className="column__title">Entreprise :</p>
      <p className="column__description">{customer.company}</p>

      <p className="column__title">Nom :</p>
      <p className="column__description">{customer.lastname}</p>

      <p className="column__title">Prénom :</p>
      <p className="column__description">{customer.firstname}</p>

      <p className="column__title">Adresse :</p>
      <p className="column__description mb-0">
        {customer.street + " " + customer.street_number}
      </p>
      <p className="column__description">
        {customer.zip_code + " " + customer.city}
      </p>

      <p className="column__title">Email :</p>
      <p className="column__description">{customer.email}</p>
    </div>
  );
}
