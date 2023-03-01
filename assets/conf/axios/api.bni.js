import * as axios from "axios";
import cookies from "js-cookie";

const REACT_APP_SERVER_NAME = process.env.REACT_APP_SERVER_NAME;

//on parse le cookie pour pouvoir récuperer le token ou le userId
function getToken() {
  if (cookies.get("APICOOKIE")) {
    const cookie = JSON.parse(cookies.get("APICOOKIE"));
    return cookie.token;
  }
}

const apiBni = axios.create({
  baseURL: REACT_APP_SERVER_NAME + "/api",
  headers: {
    "Content-Type": "application/ld+json",
    Authorization: "Bearer " + getToken(),
  },
});

export const apiBniFile = axios.create({
  baseURL: REACT_APP_SERVER_NAME + "/api",
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: "Bearer " + getToken(),
  },
});

export default apiBni;
