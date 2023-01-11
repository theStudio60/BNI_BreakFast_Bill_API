import { Component } from "react";
import apiBni from "../../../conf/axios/api.bni";
import { Loading, Alert } from "../../../components/utils";
import dateFormat from "dateformat"

export default class SessiontypeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { session: null, errorMessage: null, loaded: true };
  }

  componentDidMount() {
    //Récupère le id en découpant la route
    let path = this.props.path['*'];
    const id = path.split("/")[1];

    //Requete pour récuperer id
    apiBni
      .get("/sessions/"+id, {})
      .then((response) => {
        if (response.status === 200) {
          const session = response.data;
          this.setState({ session: session, loaded: false });
        }
      })
      //si session pas valide on update le state pour mettre un message d'erreur
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
        {this.state.loaded || this.state.session === null ? (
          <Loading />
        ) : (
          this.state.session.session_type.name+" "+dateFormat(this.state.session.day_at, "dd mmm yyyy HH:MM:ss")
        )}
      </>
    );
  }
}
