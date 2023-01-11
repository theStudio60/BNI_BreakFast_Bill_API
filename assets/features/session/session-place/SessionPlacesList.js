import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import apiBni from "../../../conf/axios/api.bni";
import { setAlert, setSessionPlaces } from "../../../redux";
import { Loading } from "../../../components/utils";

//création de la requete
const fetchSessionPlaces = () => {
  return async (dispatch) => {
    await apiBni
      .get("/session_places?page=1&itemsPerPage=30")
      .then((response) => {
        if (response.status === 200) {
          dispatch(setSessionPlaces(response));
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

export default function SessionPlacesList() {
  const sessionPlaces = useSelector((state) => state.sessionPlaces.data);
  const dispatch = useDispatch();

  //création de notre requete API avec useEffect
  useEffect(() => {
    dispatch(fetchSessionPlaces());
  }, []);

  if (sessionPlaces) {
    return (
      <>
        {sessionPlaces["hydra:member"].map((sessionPlace, index) => (
          <NavLink
            to={"/session-place/" + sessionPlace.id}
            className="nav-link"
            key={sessionPlace.id}
          >
            {sessionPlace.zip_code + " " + sessionPlace.city}
          </NavLink>
        ))}
      </>
    );
  } else {
    return <Loading />;
  }
}
