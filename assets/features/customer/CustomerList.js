import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import apiBni from "../../conf/axios/api.bni";
import { setAlert, setCustomers } from "../../redux";
import { Loading } from "../../components/utils";
import { FaEye } from "react-icons/fa";
import dateFormat from "dateformat";
import Pagintation from "../../components/utils/Pagination";
import { DateFormat } from "../../components/utils/DateFormat";

import React from "react";
//création de la requete
const fetchCustomers = (link) => {
  return async (dispatch) => {
    await apiBni
      .get(link)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setCustomers(response));
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

export default function CustomerList() {
  const [itemPerPage, setItemPerPage] = useState(10);
  const [addFilter, setAddFilter] = useState("");
  const link = "/customers";
  const customers = useSelector((state) => state.customers.data);
  const dispatch = useDispatch();

  //création de notre requete API avec useEffect
  useEffect(() => {
    dispatch(
      fetchCustomers(link + "?page=1&itemsPerPage=" + itemPerPage + addFilter)
    );
  }, []);

  if (customers) {
    return (
      <>
        <ButtonsTris
          link={link}
          itemPerPage={itemPerPage}
          setAddFilter={setAddFilter}
        />
        <table className="app_table">
          <thead>
            <tr>
              <th>#</th>
              <th>Prénom</th>
              <th>nom</th>
              <th>Ville</th>
              <th>Date entrée</th>
              <th>Date sortie</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers["hydra:member"].map((customer, index) => (
              <CustomerListUnit customer={customer} key={customer.id} />
            ))}
          </tbody>
        </table>
        <Pagintation
          link={link}
          itemPerPage={itemPerPage}
          whatToDispatch={fetchCustomers}
          elem={customers}
        />
      </>
    );
  } else {
    return <Loading />;
  }
}

function CustomerListUnit(props) {
  const dateDay = new Date();
  const membreDone = new Date(props.customer.membership.membership_done_at);

  let trStyle = "app_table__tr--green";
  if (dateDay > membreDone) {
    trStyle = "app_table__tr--red";
  }

  return (
    <tr className={trStyle}>
      <th scope="row">{props.customer.id}</th>
      <td>{props.customer.firstname}</td>
      <td>{props.customer.lastname}</td>
      <td>{props.customer.zip_code + " " + props.customer.city}</td>
      <td>
        <DateFormat
          date={props.customer.membership.membership_at}
          format="dd.mm.yyyy"
        />
      </td>
      <td>
        <DateFormat
          date={props.customer.membership.membership_done_at}
          format="dd.mm.yyyy"
        />
      </td>
      <td>
        <NavLink
          to={"/customer/" + props.customer.id}
          className="nav-link"
          key={props.customer.id}
        >
          <FaEye />
        </NavLink>
      </td>
    </tr>
  );
}

function ButtonsTris({ setAddFilter, link, itemPerPage }) {
  const dispatch = useDispatch();

  const addFilter = (e) => {
    let filter = e.target.dataset.filter;
    setAddFilter("&membership.is_active=true");
    dispatch(
      fetchCustomers(link + "?page=1&itemsPerPage=" + itemPerPage + filter)
    );
  };

  return (
    <div className="d-flex justify-content-center mt-4 mb-4">
      <button
        className="btn btn-outline-success"
        onClick={addFilter}
        data-filter="&membership.is_active=true"
      >
        Membre actif
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={addFilter}
        data-filter="&membership.is_active=false"
      >
        Membre inactif
      </button>
    </div>
    // &membership.is_active=false
  );
}
