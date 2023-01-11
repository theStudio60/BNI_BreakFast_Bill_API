import { Formik, Field } from "formik";
import apiBni from "../../conf/axios/api.bni";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addItem, setAlert } from "../../redux";

export default function ItemNew() {

  const dispatch = useDispatch();

  //creation de la requete
  const submit = (values, actions) => {
    apiBni
      .post("/items", values, {})
      .then((response) => {
        if (response.status === 201) {
            actions.isSubmitting = false;
            actions.resetForm();
            dispatch(addItem(response))
            dispatch(setAlert({ "color":"success", "message":"Item ajouté."}));
        }
      })
      //si erreur on update le state pour mettre un message d'erreur
      .catch((err) => {
        actions.isSubmitting = false;
      });
  };

  //validation des données
  const itemSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Prénom trop court').required('Veuillez indiquer un prénom'),
    priceOf: Yup.string().matches(/^\d+(.\d{1,2})?$/, 'Format invalide')
});

    //on affiche le formulaire
    return (
      <>
          <div className="container-fluid p-5 d-flex flex-column justify-content-center align-items-center">

            <Formik
              onSubmit={submit}
              initialValues={{ name: "", priceOf: ""}}
              validationSchema = { itemSchema }
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
                    <label>Prix</label>
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
      </>
    );
  }
