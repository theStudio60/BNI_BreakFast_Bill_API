import React, { Component } from "react";
import apiBni from "../../conf/axios/api.bni";
import { Loading, Alert } from "../../components/utils";

export default class ItemDetails extends Component {

  useEffect() {
    //Récupère le id en découpant la route

    let path = this.props.path["*"];
    let id = path.split("/")[1];

    //Requete pour récuperer id
    apiBni
      .get("/items/" + id, {})
      .then((response) => {
        if (response.status === 200) {
          const item = response.data;

          this.setState({ items: item, loaded: false });
        }
      })

      //si item pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        console.log(err);
        this.setState({ errorMessage: err.message, loaded: false });
      });
  }

  render(items) {
    console.log(this.state);
    return (
      /*<div>
        {this.state.errorMessage && (
          <Alert message={this.state.errorMessage} color="danger" />
        )}
        {this.state.loaded || this.state.item === null ? (
          <Loading />
        ) : (
          this.state.item.id + " - " + this.state.item.name
        )}
      </div>*/
      <div>
        <h1>item</h1>
        {/*  {items["hydra:member"].map((item, index) => (
          <p>{item.name}</p>
        ))}
        */}
      </div>
    );
  }
}
