// Fetch a user
export const FetchUser = async () => {
  try {
    const user = await await apiBni.get("/users/" + cookie.data.userid);
    return user;
  } catch (error) {
    return error;
  }
};

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
