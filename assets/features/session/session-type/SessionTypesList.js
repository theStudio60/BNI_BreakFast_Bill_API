import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import apiBni from "../../../conf/axios/api.bni";
import { setAlert, setSessionTypes } from "../../../redux";
import { Loading } from "../../../components/utils";

//création de la requete
const fetchSessionTypes = () => {
  return async (dispatch) => {
    await apiBni
      .get("/session_types?page=1&itemsPerPage=30")
      .then((response) => {
        if (response.status === 200) {
          dispatch(setSessionTypes(response));
        }
      })
      //si item pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        dispatch(
          setAlert({
            color: "danger",
            message: "Une erreur est survenue !" + err,
          })
        );
      });
  };
};

export default function SessionPlacesList() {
  const sessionTypes = useSelector((state) => state.sessionTypes.data);
  const dispatch = useDispatch();

  //création de notre requete API avec useEffect
  useEffect(() => {
    dispatch(fetchSessionTypes());
  }, []);

  if (sessionTypes) {
    return (
      <>
        {sessionTypes["hydra:member"].map((sessionType, index) => (
          <NavLink
            to={"/session-type/" + sessionType.id}
            className="nav-link"
            key={sessionType.id}
          >
            {sessionType.name}
          </NavLink>
        ))}
      </>
    );
  } else {
    return <Loading />;
  }
}
