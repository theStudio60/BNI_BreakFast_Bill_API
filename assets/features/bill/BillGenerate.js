import { Formik, Field } from "formik";
import apiBni from "../../conf/axios/api.bni";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setAlert } from "../../redux";
import { useEffect, useState } from "react";
import monthFR from "../../components/utils/monthFR";
import { Loading } from "../../components/utils";
import React from "react";

export default function BillGenerate() {
  let dateYear = new Date().getUTCFullYear();

  const [itemsOptions, setItemsOptions] = useState([]);
  const [month] = useState(new Date().getUTCMonth());
  const [year] = useState(dateYear);
  const [yearPlus] = useState(dateYear + 1);
  const [yearMinus] = useState(dateYear - 1);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  //creation de la requete
  const submit = (values, actions) => {
    const newItems = [];
    //suppresion du $ devant les items
    values.itemList.map((i) => {
      let item = i.split("$");
      return newItems.push(Number(item[1])); //Ajoute l'item formaté en nombre au tableau
    });
    //création d'un nouveau tableau avec les données correct pour API
    const newValues = {
      billing_month: values.billing_month + "-" + values.billing_year,
      itemList: newItems,
      from_at: values.from_at,
    };

    apiBni
      .post("/bills/generator", newValues, {})
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          dispatch(
            setAlert({
              color: "success",
              message: "Les factures on bien étées crées",
            })
          );
          actions.isSubmitting = false;
          actions.resetForm();
        }
      })
      //si erreur on update le state pour mettre un message d'erreur
      .catch((err) => {
        console.log("Error", err);
        actions.isSubmitting = false;
      });
  };

  //création de notre requete API pour le chargement des items
  useEffect(() => {
    //récupération des items
    apiBni
      .get("/items", {})
      .then((response) => {
        if (response.status === 200) {
          const options = response.data["hydra:member"].map((item) => ({
            value: item.id,
            name: item.name,
          }));
          setItemsOptions(options);
          setLoading(false);
        }
      })
      //si sessionType pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        dispatch(
          setAlert({ color: "danger", message: "Une erreur est survenue !" })
        );
      });
  }, []);

  //validation des données
  const itemSchema = Yup.object().shape({
    billing_month: Yup.string().required(),
    billing_year: Yup.string().required(),
    itemList: Yup.array().min(0),
    from_at: Yup.string()
      .matches(
        /^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[012]).(19|20)\d\d$/,
        "Format dd.mm.yyyy"
      )
      .required("Date Requise"),
  });

  if (loading) {
    return <Loading />;
  }
  //on affiche le formulaire
  return (
    <>
      <div className="container-fluid p-5 d-flex flex-column justify-content-center align-items-center">
        <Formik
          onSubmit={submit}
          initialValues={{
            billing_month: month + 1,
            billing_year: year,
            itemList: [],
            from_at: "",
          }}
          validationSchema={itemSchema}
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
                <label>Mois de factureation</label>
                <Field
                  as="select"
                  name="billing_month"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billing_month}
                >
                  {monthFR.map((m) => {
                    return (
                      <option value={m[0]} key={m[0] + m[1]}>
                        {m[1]}
                      </option>
                    );
                  })}
                </Field>
                {errors.billing_month && touched.billing_month && (
                  <div className="text-danger">{errors.billing_month}</div>
                )}

                <Field
                  as="select"
                  name="billing_year"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billing_year}
                >
                  <option value={yearMinus}>{yearMinus}</option>
                  <option value={year}>{year}</option>
                  <option value={yearPlus}>{yearPlus}</option>
                </Field>
                {errors.billing_month && touched.billing_month && (
                  <div className="text-danger">{errors.billing_month}</div>
                )}
              </div>

              {itemsOptions.map((i) => {
                return (
                  <div className="form-check form-switch" key={i.value}>
                    <Field
                      type="checkbox"
                      name="itemList"
                      value={"$" + i.value}
                      id={i.value + i.name}
                      className="form-check-input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={i.value + i.name}
                    >
                      {i.name}
                    </label>
                  </div>
                );
              })}
              {errors.itemList && touched.itemList && (
                <div className="text-danger">{errors.itemList}</div>
              )}

              <div className="form-group">
                <label>Date d'émission de la facture</label>
                <Field
                  name="from_at"
                  className="form-control"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.from_at}
                />
                {errors.from_at && touched.from_at && (
                  <div className="text-danger">{errors.from_at}</div>
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
