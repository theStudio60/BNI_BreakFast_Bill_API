import React, { Component } from "react";
import apiBni from "../../conf/axios/api.bni";
import { Loading, Alert } from "../../components/utils";

export default class ItemDetails extends Component {
  useEffect() {
    //Récupère le id en découpant la route
    let path = this.props.path["*"];
    const id = path.split("/")[1];

    console.log(id);

    //Requete pour récuperer id
    apiBni
      .get("/items/" + id, {})
      .then((response) => {
        if (response.status === 200) {
          const item = response.data;
          console.log("item", item);
          this.setState({ item: item, loaded: false });
        }
      })
      //si item pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        console.log(err);
        this.setState({ errorMessage: err.message, loaded: false });
      });
  }

  render() {
    return (
      <>
        {items[id](() => (
          <div>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
          </div>
        ))}
      </>
    );
  }
}
