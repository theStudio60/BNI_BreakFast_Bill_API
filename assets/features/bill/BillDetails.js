import React, { Component } from "react";
import apiBni from "../../conf/axios/api.bni";
import { Loading, Alert } from "../../components/utils";
import BillLeftColumn from "./template/BillLeftColumn";
import BillDetailsFacturation from "./template/BillDetailsFacturation";
import BillInfo from "./template/BillInfo";

export default class BillDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { bill: null, errorMessage: null, loaded: true };
  }

  componentDidMount() {
    //Récupère le id en découpant la route
    let path = this.props.path['*'];
    const id = path.split("/")[1];

    //Requete pour récuperer id
    apiBni
      .get("/bills/"+id, {})
      .then((response) => {
        if (response.status === 200) {
          const bill = response.data;
          this.setState({ bill: bill, loaded: false });
        }
      })
      //si customer pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        alert("Une erreur est survenue !"+err)
      });
  }

  render() {
    if(this.state.loaded || !this.state.bill){
      return <Loading />
    }
    return (
      <>
          <BillLeftColumn customer={this.state.bill.customer} />
          <BillDetailsFacturation bill={this.state.bill} />
          <BillInfo bill={this.state.bill} />
      </>
    );
  }
}
