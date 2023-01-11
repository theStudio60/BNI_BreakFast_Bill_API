import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import apiBni from "../../conf/axios/api.bni";
import { setAlert, setItem } from "../../redux";
import { Loading } from "../../components/utils";

//création de la requete
export const fetchItems = () => {
  return async (dispatch, getState) => {
    await apiBni
      .get("/items?page=1&itemsPerPage=30")
      .then((response) => {
        if (response.status === 200) {
          dispatch(setItem(response));
        }
      })
      //si item pas valide on update le state pour mettre un message d'erreur
      .catch((err) => {
        dispatch(setAlert({ "color":"danger", "message":"Une erreur est survenue !"}));
      });
  };
};

export default function ItemList() {

  const items = useSelector((state) => state.items.data);
  const dispatch = useDispatch();

  //création de notre requete API avec useEffect
  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  if(items){
    return (
      <>
        {items["hydra:member"].map((item, index) => (
          <NavLink to={"/item/" + item.id} className="nav-link" key={item.id}>
            { item.id+" - "+item.name }
          </NavLink>
        ))}
      </>
    );
  }else{
    return <Loading />
  }
}
