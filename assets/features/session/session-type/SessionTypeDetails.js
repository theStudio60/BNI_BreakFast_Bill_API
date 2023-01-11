import { Component } from "react";
import apiBni from "../../../conf/axios/api.bni";
import { Loading, Alert } from "../../../components/utils";

export default class SessiontypeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { sessionType: null, errorMessage: null, loaded: true };
  }

  componentDidMount() {
    //Récupère le id en découpant la route
    let path = this.props.path['*'];
    const id = path.split("/")[1];

    //Requete pour récuperer id
    apiBni
      .get("/session_types/"+id, {})
      .then((response) => {
        if (response.status === 200) {
          const sessionType = response.data;
          this.setState({ sessionType: sessionType, loaded: false });
        }
      })
      //si sessionType pas valide on update le state pour mettre un message d'erreur
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
        {this.state.loaded || this.state.sessionType === null ? (
          <Loading />
        ) : (
          this.state.sessionType.name+' - '+this.state.sessionType.description
        )}
      </>
    );
  }
}
