import { Component } from "react";
import apiBni from "../../conf/axios/api.bni";
import { Loading, Alert } from "../../components/utils";

export default class ItemDetails extends Component {


  useEffect() {
    //Récupère le id en découpant la route
    let path = this.props.path['*'];
    const id = path.split("/")[1];

    //Requete pour récuperer id
    apiBni
      .get("/items/"+id, {})
      .then((response) => {
        if (response.status === 200) {
          const item = response.data;
          this.setState({ item: item, loaded: false });
        }
      })
      //si item pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        this.setState({ errorMessage: err.message, loaded: false });
      });
  }

  render() {
    return (
      <>
        {/* affichage du message d'erreur */}
        {this.state.errorMessage && (
          <Alert message={this.state.errorMessage} color="danger" />
        )}
        {this.state.loaded || this.state.item === null ? (
          <Loading />
        ) : (
          this.state.item.id+' - '+this.state.item.name
        )}
      </>
    );
  }
}
