import { Component } from "react";
import apiBni from "../../../conf/axios/api.bni";
import { Loading, Alert } from "../../../components/utils";

export default class SessionPlaceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { sessionPlace: null, errorMessage: null, loaded: true };
  }

  componentDidMount() {
    //Récupère le id en découpant la route
    let path = this.props.path['*'];
    const id = path.split("/")[1];

    //Requete pour récuperer id
    apiBni
      .get("/session_places/"+id, {})
      .then((response) => {
        if (response.status === 200) {
          const sessionPlace = response.data;
          this.setState({ sessionPlace: sessionPlace, loaded: false });
        }
      })
      //si sessionPlace pas valide on update le state pour mettre un message d'erreur
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
        {this.state.loaded || this.state.sessionPlace === null ? (
          <Loading />
        ) : (
          this.state.sessionPlace.zip_code+' - '+this.state.sessionPlace.city
        )}
      </>
    );
  }
}
