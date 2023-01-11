import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import apiBni from "../../../conf/axios/api.bni";
import { setAlert } from "../../../redux";
import { Loading } from "../../../components/utils";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import frLocale from "@fullcalendar/core/locales/fr";
import { DateFormat } from "../../../components/utils/DateFormat";
import React from "react";

const handleDateClick = (arg) => {
  // bind with an arrow function
  let date = arg.dateStr.split("-");
  date = date[2] + "." + date[1] + "." + date[0];
  if (window.confirm("Ajouter une session le " + date + " ?") === true) {
    window.location.assign("/new-session?date=" + date + " " + "17:30:00");
  }
};

export default function SessionsList() {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

  //création de notre requete API avec useEffect
  useEffect(() => {
    apiBni
      .get("/sessions")
      .then((response) => {
        if (response.status === 200) {
          let array = [];
          response.data["hydra:member"].map((session) => {
            array.push({
              title: session.session_type.name,
              date: session.day_at,
              url: "/session/" + session.id,
              display: "list-item",
            });
            array.push({
              title: "hello",
              date: session.day_at,
              display: "background",
              backgroundColor: "pink",
            });
          });
          setList(array);
        }
      })
      //si item pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        dispatch(
          setAlert({
            color: "danger",
            message: "Une erreur est survenue !" + err,
          })
        );
      });
  }, []);

  if (list.length !== 0) {
    console.log(list);
    return (
      <>
        <FullCalendar
          locale={frLocale}
          firstDay="1"
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={list}
          dateClick={handleDateClick}
          eventBackgroundColor="#CC0000"
          eventColor="#378006"
          aspectRatio="2.5"
        />
      </>
    );
  } else {
    return <Loading />;
  }
}
