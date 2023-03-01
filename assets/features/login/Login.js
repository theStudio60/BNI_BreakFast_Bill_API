import React, { useState } from "react";
import { Formik } from "formik";
import * as axios from "axios";
import cookies from "js-cookie";
import { Loading, Alert } from "../../components/utils";
import { useDispatch } from "react-redux";
import { setAlert } from "../../redux";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login(props) {
  const [loaded, setLoaded] = useState(false);
  let dispatch = useDispatch();

  //validation du login
  const submit = (values, actions) => {
    //on passe setLoaded à true pour afficher le chargement en attendant la réponse
    setLoaded(true);
    //creation de la requete
    axios
      .post(process.env.REACT_APP_SERVER_NAME + "/api/login", values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          //si le login est bon on fait un reload ce qui nous redirigera vers la page d'accueil et évite un bug de cookie
          // création du cookie //inclus le token et les datas
          const cookiesData = JSON.stringify(response.data);
          cookies.set("APICOOKIE", cookiesData, {
            sameSite: "strict",
            expires: new Date(new Date().getTime() + 5 * 60 * 1000),
          }); //5minutes
          window.location.reload();
        }
      })
      //si login pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        console.error("error", err);
        setLoaded(false);
        actions.isSubmitting = false;
        actions.resetForm();
        dispatch(
          setAlert({
            color: "danger",
            message: "Mauvais login ou mot de passe !" + err,
          })
        );
      });
  };

  //validation des données
  const validate = (values) => {
    let errors = {};
    if (!values.username && values.username.length < 3) {
      errors.username = "Nom trop court";
    }
    if (!values.password) {
      errors.password = "Veuillez inserer un mot de passe";
    }
    return errors;
  };

  //Affichage du formulaire
  return (
    <>
      {loaded ? (
        <Loading />
      ) : (
        <div className="container-fluid p-5 d-flex flex-column justify-content-center align-items-center">
          {/* affichage de l'alert */}
          {alert ? <Alert /> : null}
          <Formik
            onSubmit={submit}
            initialValues={{ username: "", password: "" }}
            validate={validate}
          >
            {({
              values,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              errors,
              touched,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="bg-white border p-5 d-flex flex-column"
              >
                <div className="input-group">
                  <div className="input-group-text" id="btnGroupAddon">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  {errors.username && touched.username && (
                    <div className="text-danger">{errors.username}</div>
                  )}
                </div>
                <div className="input-group">
                  <div className="input-group-text" id="btnGroupAddon">
                    <FaLock />
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
}

//création de la requete pour récuperer user
export const fetchUser = (data) => {
  axios.get(
    REACT_APP_SERVER_NAME +
      "/api/users/" +
      data.data.userid +
      "?jwt=" +
      data.token
  );
};
