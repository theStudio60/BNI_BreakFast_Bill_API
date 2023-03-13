import React, { useEffect, useState } from "react";
import apiBni from "../../conf/axios/api.bni";
import { Loading, Alert } from "../../components/utils";
import { NavLink } from "react-router-dom";

// TODO Aficcher un loading //<Loading /> x
// TODO Destructor js
// TODO "" items details
// TODO Tableau

function ItemDetails(props) {
  const [items, setItems] = useState({
    items: null,
    loaded: true,
    errorMessage: null,
  });

  useEffect(() => {
    let path = props.path["*"];
    let id = path.split("/")[1];
    //Requete pour récuperer id
    apiBni
      .get("/items/" + id, {})
      .then((response) => {
        setItems({ items: response.data, loaded: false });
      })

      //si item pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        setItems({ errorMessage: err.message });
      });
  }, []);
  if (items) {
    return (
      <div>
        {this.state.errorMessage && (
          <Alert message={this.state.errorMessage} color="danger" />
        )}
        <h1>{items?.items?.name}</h1>
        <h1>{items?.items?.price_of}</h1>
        {/*<pre>{JSON.stringify(items, null, 2)}</pre>*/}
        <NavLink to={"/items"}>Back</NavLink>
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default ItemDetails;
