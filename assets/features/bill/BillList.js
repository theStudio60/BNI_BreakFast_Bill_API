import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import apiBni from "../../conf/axios/api.bni";
import { setAlert, setBill } from "../../redux";
import { Loading } from "../../components/utils";
import { FaEye } from "react-icons/fa";
import Pagintation from "../../components/utils/Pagination";

//création de la requete
const fetchBills = (link) => {
  return async (dispatch) => {
    await apiBni
      .get(link)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setBill(response));
        }
      })
      //si item pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        dispatch(
          setAlert({ color: "danger", message: "Une erreur est survenue !" })
        );
      });
  };
};

export default function BillList() {
  const [itemPerPage, setItemPerPage] = useState(10);
  const link = "/bills";
  const bills = useSelector((state) => state.bills.data);
  const dispatch = useDispatch();

  //création de notre requete API avec useEffect
  useEffect(() => {
    dispatch(fetchBills(link + "?page=1&itemsPerPage=" + itemPerPage));
  }, []);

  if (bills) {
    return (
      <>
        <table className="app_table">
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Montant</th>
              <th>Client</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bills["hydra:member"].map((bill) => (
              <BillListUnit bill={bill} key={bill.id} />
            ))}
          </tbody>
        </table>
        <Pagintation
          link={link}
          itemPerPage={itemPerPage}
          whatToDispatch={fetchBills}
          elem={bills}
        />
      </>
    );
  } else {
    return <Loading />;
  }
}

function BillListUnit(props) {
  const user = useSelector((state) => state.user.data);
  const dateDay = new Date();
  const billingDate = new Date(props.bill.to_at);

  //Définition du type de badge en fonction du statut de la facture
  let badgeStyle = "app_badge--info";
  let badgeText = "En attente";
  if (dateDay > new Date(billingDate)) {
    badgeStyle = "app_badge--danger";
    badgeText = "Expirée";
  }
  if (props.bill.amount === props.bill.billStatut.balance) {
    badgeStyle = "app_badge--success";
    badgeText = "Payé";
  }

  //Nom à afficher (company - fistname lastname) ou (fistname lastname)
  let displayName =
    props.bill.customer.firstname + " " + props.bill.customer.lastname;
  if (props.bill.customer.company) {
    displayName = props.bill.customer.company + " - " + displayName;
  }

  return (
    <tr key={props.bill.id}>
      <th>{props.bill.billNumber}</th>
      <td>
        <span className={badgeStyle}>{badgeText}</span>
      </td>
      <td>
        {user.association.bankInformation.currency + " " + props.bill.amount}
      </td>
      <td>{displayName}</td>
      <td>
        <NavLink to={"/bill/" + props.bill.id} className="nav-link">
          <FaEye />
        </NavLink>
      </td>
    </tr>
  );
}
