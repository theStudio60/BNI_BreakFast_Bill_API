import React, { Component } from "react";
import { Formik, Field } from "formik";
import apiBni from "../../../conf/axios/api.bni";
import { Loading, Alert } from "../../../components/utils";
import * as Yup from "yup";

export default class SessiontypeNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      messageColor: null,
      loaded: true,
      sessionPlaceListOption: [],
    };
  }

  //validation du formulaire
  submit = (values, actions) => {
    this.setState({ message: null, loaded: true });

    //creation de la requete
    apiBni
      .post("/session_types", values, {})
      .then((response) => {
        if (response.status === 201) {
          this.setState({
            message: "Type de session crée avec succès",
            messageColor: "success",
            loaded:false
          });
          // actions.resetForm();
        }
      })
      //si erreur on update le state pour mettre un message d'erreur
      .catch((err) => {
        this.setState({
          message: err.response.data.message,
          messageColor: "danger",
          loaded: false,
        });
        actions.isSubmitting = false;
      });
  };

  componentDidMount() {
    //récupération des sessionPlaces
    apiBni
      .get("/session_places", {})
      .then((response) => {
        if (response.status === 200) {
          const options = response.data["hydra:member"].map((sessionPlace) => ({
            value: sessionPlace.id,
            name: sessionPlace.zip_code+" "+sessionPlace.city+" - "+sessionPlace.street+" "+sessionPlace.street_number
          }
          ));
          this.setState({ sessionPlaceListOption: options, loaded: false });
        }
      })
      //si sessionPlace pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        this.setState({ message: err.message, loaded: false });
      });
  }

  //validation des données
  SessionTypeSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Nom trop court")
      .required("Veuillez indiquer un nom"),
    description: Yup.string()
      .min(10, "Veuillez indiquer une description, min 10 caractères")
      .required("Veuillez indiquer une description"),
    priceOf: Yup.number()
      .positive("Le prix n'est pas positif")
      .required("Veuillez indiquer un prix"),
    sessionPlace_id: Yup.number().min(1)
  });

  render() {
    //on affiche le formulaire
    return (
      <>
        {this.state.loaded ? (
          <Loading />
        ) : (
          <div className="container-fluid p-5 d-flex flex-column justify-content-center align-items-center">
            {/* affichage du message d'erreur */}
            {this.state.message && (
              <Alert
                message={this.state.message}
                color={this.state.messageColor}
              />
            )}

            <Formik
              onSubmit={this.submit}
              initialValues={{
                name: "",
                description: "",
                priceOf: "",
                sessionPlace_id: "",
              }}
              validationSchema={this.SessionTypeSchema}
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
                  <div className="form-group">
                    <label>Nom</label>
                    <Field
                      name="name"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name && (
                      <div className="text-danger">{errors.name}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <Field
                      name="description"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                    {errors.description && touched.description && (
                      <div className="text-danger">{errors.description}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Prix de la session</label>
                    <Field
                      name="priceOf"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.priceOf}
                    />
                    {errors.priceOf && touched.priceOf && (
                      <div className="text-danger">{errors.priceOf}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Place de session</label>
                    <Field
                      as="select"
                      name="sessionPlace_id"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option key="0" value="0">Veuillez selectionner</option>
                      {this.state.sessionPlaceListOption.map((s) => {
                        return <option key={s.value} value={s.value}>{s.name}</option>;
                      })}
                    </Field>
                    {errors.sessionPlace_id && touched.sessionPlace_id && (
                      <div className="text-danger">
                        {errors.sessionPlace_id}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    Envoyer
                  </button>
                </form>
              )}
            </Formik>
          </div>
        )}
      </>
    );
  }
}
