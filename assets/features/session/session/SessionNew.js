import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import apiBni from "../../../conf/axios/api.bni";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setAlert } from "../../../redux";
import { useSearchParams } from "react-router-dom";

export default function SessiontypeNew() {

  const [stOptions, setStOptions] = useState([]);
  const [date, setDate] = useState();
  let [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch()

    //validation du formulaire
    const submit = (values, actions) => {
      //creation de la requete
      apiBni
        .post("/sessions", values, {})
        .then((response) => {
          if (response.status === 201) {
            dispatch(setAlert({ "color":"success", "message":"La session à bien étée ajoutée !"}));
            actions.resetForm();
          }
        })
        //si erreur on update le state pour mettre un message d'erreur
        .catch((err) => {
          dispatch(setAlert({ "color":"danger", "message":"Une erreur est survenue !"}));
          actions.resetForm();
        });
        actions.isSubmitting = false;
    };

  //création de notre requete API avec useEffect
  useEffect(() => {
    //récupération des sessionTypes
    apiBni
      .get("/session_types", {})
      .then((response) => {
        if (response.status === 200) {
          const options = response.data["hydra:member"].map((sessionType) => ({
            value: sessionType.id,
            name: sessionType.name
          }
          ));
          setStOptions(options);
        }
      })
      //si sessionType pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        dispatch(setAlert({ "color":"danger", "message":"Une erreur est survenue !"}));
      });
  }, []);


  //validation des données
 const SessionSchema = Yup.object().shape({
    dayAt: Yup.string().matches(/^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)\d\d[\s](0[0-9]|1[0-9]|2[0-4]):(0[0-9]|[12345][0-9])$/, 'Format dd.mm.yyyy hh:mm').required('Date Requise'),
    toDone: Yup.number().min(0).max(1),
    sessionType_id: Yup.number().min(1)
  });


    //on affiche le formulaire
    return (
      <>
            <Formik
              onSubmit={submit}
              initialValues={{
                dayAt: searchParams.get("date"),
                toDone: 1,
                sessionType_id: "",
              }}
              validationSchema={SessionSchema}
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
                    <label>Jour et heure</label>
                    <Field
                      name="dayAt"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dayAt}
                    />
                    {errors.dayAt && touched.dayAt && (
                      <div className="text-danger">{errors.dayAt}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>A lieu ?</label>
                    <Field
                      as="select"
                      name="toDone"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.toDone}
                    >
                      <option value={1}>Oui</option>
                      <option value={0}>Non</option>
                    </Field>
                    {errors.toDone && touched.toDone && (
                      <div className="text-danger">{errors.toDone}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Type de session</label>
                    <Field
                      as="select"
                      name="sessionType_id"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option key="0" value="0">Veuillez selectionner</option>
                      {stOptions.map((s) => {
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
      </>
    );
}
