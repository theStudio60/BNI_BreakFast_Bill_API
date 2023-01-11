import React, { useEffect } from "react";
import { Alert, Loading } from "../../components/utils";
import { Header, SideBar } from "../../components";
import AppRoutes from "../../conf/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import apiBni from "../../conf/axios/api.bni";
import { setAlert, setUser } from "../../redux";
import Cookies from "js-cookie";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  //création de notre requete API avec useEffect
  useEffect(() => {
    if (user.length === 0) {
      dispatch(FetchUser());
    }
  }, []);

  console.log("USER", user);

  //si l'utilisateur n'est pas encore charger on affiche le loading
  if (user.data) {
    return (
      <>
        <header className="header">
          <Header />
        </header>
        <div className="app_container">
          <div className="row">
            <SideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {/* affichage des alerts */}
              <Alert />
              {/* Affichage des liens */}
              <div className="row justify-content-md-center">
                <AppRoutes />
              </div>
            </main>
          </div>
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
}

//fonction de chargement de l'utilisateur
const FetchUser = () => {
  const cookie = JSON.parse(Cookies.get("APICOOKIE"));
  return async (dispatch) => {
    await apiBni
      .get("/users/" + cookie.data.userid)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setUser(response));
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
