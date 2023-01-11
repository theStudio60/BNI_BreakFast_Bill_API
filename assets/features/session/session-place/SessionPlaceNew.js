import React, { Component } from "react";
import { Formik, Field } from "formik";
import apiBni from "../../../conf/axios/api.bni";
import { Loading, Alert } from "../../../components/utils";
import * as Yup from "yup";

export default class SessionPlaceNew extends Component {
  constructor(props) {
    super(props);
    this.state = { message: null, messageColor:null, loaded: false};
  }

  //validation du formulaire
  submit = (values, actions) => {
    this.setState({ message: null, loaded: true });

    //creation de la requete
    apiBni
      .post("/session_places", values, {})
      .then((response) => {
        if (response.status === 201) {
            this.setState({
                message: "Place de session crée avec succès",
                messageColor: "success",
                loaded: false,
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

  //validation des données
  SessionPlaceSchema = Yup.object().shape({
    street: Yup.string().min(3, 'Nom de rue trop court').required('Veuillez indiquer un nom de rue'),
    streetNumber: Yup.string().min(1, 'Veuillez indiquer un numéro de rue'),
    zipCode: Yup.number().min(1000, 'Le code zip doit être de min 4 chiffres').max(9999, 'Le code zip doit être de max 4 chiffre').required('Veuillez indiquer un code postal'),
    city: Yup.string().min(3, 'Nom de ville trop court').required('Veuillez indiquer une ville'),
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
              <Alert message={this.state.message} color={this.state.messageColor} />
            )}

            <Formik
              onSubmit={this.submit}
              initialValues={{ street: "", streetNumber: "", zipCode: "", city: "" }}
              validationSchema = { this.SessionPlaceSchema }
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
                    <label>Rue</label>
                    <Field
                      name="street"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.street}
                    />
                    {errors.street && touched.street && (
                      <div className="text-danger">{errors.street}</div>
                    )}
                  </div>  
                  <div className="form-group">
                    <label>Numéro de rue</label>
                    <Field
                      name="streetNumber"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.streetNumber}
                    />
                    {errors.streetNumber && touched.streetNumber && (
                      <div className="text-danger">{errors.streetNumber}</div>
                    )}
                  </div>          
                  <div className="form-group">
                    <label>Code postal</label>
                    <Field
                      type="number"
                      name="zipCode"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.zipCode}
                    />
                    {errors.zipCode && touched.zipCode && (
                      <div className="text-danger">{errors.zipCode}</div>
                    )}
                  </div>       
                  <div className="form-group">
                    <label>Ville</label>
                    <Field
                      name="city"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                    />
                    {errors.city && touched.city && (
                      <div className="text-danger">{errors.city}</div>
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
