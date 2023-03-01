//validation des données
export const validate = (values) => {
  let errors = {};
  if (!values.username && values.username.length < 3) {
    errors.username = "Nom trop court";
  }
  if (!values.password) {
    errors.password = "Veuillez inserer un mot de passe";
  }
  return errors;
};
