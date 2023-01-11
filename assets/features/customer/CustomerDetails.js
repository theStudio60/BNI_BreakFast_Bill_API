import React, { Component } from "react";
import apiBni from "../../conf/axios/api.bni";
import { Loading } from "../../components/utils";
import CustomerLeftColumn from "./template/CustomerLeftColumn";
import CustomerBillsList from "./template/CustomerBillsList";
import CustomerInfo from "./template/CustomerInfo";

export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = { customer: null, bills:null, loaded: true };
  }

  componentDidMount() {
    //Récupère le id en découpant la route
    let path = this.props.path['*'];
    const id = path.split("/")[1];

    //Requete pour récuperer id
    apiBni
      .get("/customers/"+id, {})
      .then((response) => {
        if (response.status === 200) {
          const customer = response.data;
          this.setState({ customer: customer});
        }
      })
      //si customer pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        console.log(err)
      });

      apiBni
      .get("/bills?customer.id="+id, {})
      .then((response) => {
        if (response.status === 200) {
          const bills = response.data;
          this.setState({ bills: bills, loaded: false });
        }
      })
      //si customer pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        console.log(err)
      });      
  }

  render() {
    if(this.state.loaded || this.state.customer === null){
      return <Loading />
    }

    return (    
        <>
          <CustomerInfo customer={this.state.customer} />
          {/* <CustomerLeftColumn customer={this.state.customer} />
          <CustomerBillsList bills={this.state.bills} /> */}
        </>
    );
  }
}