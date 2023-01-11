import React, { Component } from "react";
import { Formik, Field } from "formik";
import apiBni, { apiBniFile } from "../../conf/axios/api.bni";
import * as Yup from "yup";

export default class CustomerNew extends Component {
  constructor(props) {
    super(props);
    this.state = { company: "", firstname: "", lastname: "", email: "", street: "", city: "", zipCode: "", phone: "" };
  }

  //cache element popur les fichier vcard
  componentDidMount() {
    document.getElementById("fileForm").style.cssText = "display:none !important";
  }

  //si ouverture Vcard on cache le formulaire utilisateur et on affiche le formulaire pour chargement de la Vcard
  openVcard() {
    document.getElementById("newCustomerForm").style.cssText = "display:none !important";
    document.getElementById("fileForm").style.cssText = "display:flex";
  }

  closeVcard() {
    document.getElementById("fileForm").style.cssText = "display:none !important";
    document.getElementById("newCustomerForm").style.cssText = "display:flex";
  }

  //fonction envoi de la vcard
  submitFile = (values, actions) => {
    const formdata = new FormData();
    let file = document.querySelector("#vcardfile");
    formdata.append("file", file.files[0])
    apiBniFile
      .post("/vcard/parser", formdata)
    .then((response) => {
      if (response.status === 200) {
        const data = response.data.data;
        actions.isSubmitting = false;
        actions.resetForm();
        document.getElementById("newCustomerForm").style.cssText = "display:flex !important";
        document.getElementById("fileForm").style.cssText = "display:none !important"; 
        //update du state pour mettre à jour les chants formulaire
        this.setState({
          company: data.company, 
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          street: data.street,
          city: data.city,
          zipCode: data.zipCode,
          phone: data.phone
        });
      }
    })
    //Erreur
    .catch((err) => {
      actions.isSubmitting = false;
    });
  };

  ///////////////////////////////////////////////
  //fonction enregistrement d'un nouveau customer
  submit = (values, actions) => {
    //creation de la requete
    apiBni
      .post("/customers", values, {})
      .then((response) => {
        if (response.status === 201) {
          // actions.resetForm();
        }
      })
      //si erreur
      .catch((err) => {
        actions.isSubmitting = false;
      });
  };

  //validation des données
  customerSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(3, "Prénom trop court")
      .required("Veuillez indiquer un prénom"),
    lastname: Yup.string()
      .min(3, "Nom trop court")
      .required("Veuillez indiquer un nom"),
    street: Yup.string()
      .min(3, "Nom de rue trop court")
      .required("Veuillez indiquer un nom de rue"),
    streetNumber: Yup.string().min(1, "Veuillez indiquer un numéro de rue"),
    zipCode: Yup.number()
      .min(1000, "Le code zip doit être de min 4 chiffres")
      .max(9999, "Le code zip doit être de max 4 chiffre")
      .required("Veuillez indiquer un code postal"),
    city: Yup.string()
      .min(3, "Nom de ville trop court")
      .required("Veuillez indiquer une ville"),
    company: Yup.string()
      .min(3, "Nom entreprise trop court")
      .required("Veuillez indiquer une entreprise"),
    email: Yup.string()
      .email(3, "Email non valide")
      .required("Veuillez indiquer un email"),
    memberShip_at: Yup.string().matches(
      /^(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d$/,
      "Format dd.mm.yyyy"
    ),
  });

  render() {
    //Affichage du formulaire
    return (
      <div className="form form--lg_8">
            <Formik
              onSubmit={this.submit}
              initialValues={{
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                street: this.state.street,
                streetNumber: "",
                zipCode: this.state.zipCode,
                city: this.state.city,
                company: this.state.company,
                email: this.state.email,
                memberShip_at: "",
              }}
              enableReinitialize //permet de mettre à jour le formulaire avec le state
              validationSchema={this.customerSchema}
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
                  className="form__row"
                  id="newCustomerForm"
                >
                  <div className="form__column--lg-6">
                    <label>Prénom</label>
                    <Field
                      name="firstname"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstname}
                    />
                    {errors.firstname && touched.firstname && (
                      <div className="text-danger">{errors.firstname}</div>
                    )}
                  </div>
                  <div className="form__column--lg-6">
                    <label>Nom</label>
                    <Field
                      name="lastname"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastname}
                    />
                    {errors.lastname && touched.lastname && (
                      <div className="text-danger">{errors.lastname}</div>
                    )}
                  </div>
                  <div className="form__column--lg-8">
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
                  <div className="form__column--lg-4">
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
                  <div className="form__column--lg-4">
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
                  <div className="form__column--lg-8">
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
                  <div className="form__column--lg-12">
                    <label>Entreprise</label>
                    <Field
                      name="company"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.company}
                    />
                    {errors.company && touched.company && (
                      <div className="text-danger">{errors.company}</div>
                    )}
                  </div>
                  <div className="form__column--lg-8">
                    <label>Email</label>
                    <Field
                      name="email"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>
                  <div className="form__column--lg-4">
                    <label>Membre depuis</label>
                    <Field
                      name="memberShip_at"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.memberShip_at}
                    />
                    {errors.memberShip_at && touched.memberShip_at && (
                      <div className="text-danger">{errors.memberShip_at}</div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="button"
                    disabled={isSubmitting}
                  >
                    Enregistrer
                  </button>
                  <button
                    type="button"
                    className="button"
                    disabled={isSubmitting}
                    onClick={this.openVcard}
                  >
                    Vcard
                  </button>
                </form>
              )}
            </Formik>

            {/* affichage fu formulaire pour fichier Vcard */}
            <Formik
              onSubmit={this.submitFile}
              initialValues={{ file: "" }}
              validate={this.validate}
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
                  className="form__row"
                  id="fileForm"
                >           
                  <div className="form__column--lg-10">
                    <input
                      type="file"
                      name="file"
                      id="vcardfile"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.file}
                      required
                    />
                    {errors.file && touched.file && (
                      <div className="text-danger">{errors.file}</div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="button"
                    disabled={isSubmitting}
                  >
                    Charger
                  </button>
                  <input
                    type="button"                    
                    className="button button--red"
                    disabled={isSubmitting}
                    value="Annuler"
                    onClick={this.closeVcard}
                  />                
                </form>
              )}
            </Formik>
      </div>
    );
  }
}
