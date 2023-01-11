import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../redux";
import React from "react";

export default function Alert() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  //si une alert est lancée, on la desactive après X secondes
  if (alert) {
    setTimeout(() => {
      dispatch(setAlert(null));
    }, 4000);
  }

  if (alert) {
    return <div className={"alert alert-" + alert.color}>{alert.message}</div>;
  }
}
