
import { useSelector } from "react-redux";
import { DateFormat } from "../../../components/utils/DateFormat";
import {FaSearch} from 'react-icons/fa';


export default function CustomerInfo({customer}){

    const user = useSelector((state) => state.user.data);


    let customerActive = <span className="app_badge app_badge--success">Membre actif</span>
    if(!customer.membership.is_active){
        customerActive = <span className="app_badge app_badge--danger">Membre inactif</span>
    }

    return (
      <>
      <div className="customer_row">
        <div className="customer_row__column--sm customer_search_bar">
          Rechercher&nbsp;<FaSearch />&nbsp;<input type="text"></input>
        </div>           
      </div>

        <div className="customer_row">

          <div className="customer_row__column--sm column_center__row">
            <p>{ customer.company }</p>
            <img className="img--rounded" src={ process.env.REACT_APP_SERVER_NAME +"/img/bggrey.jpg" } alt="logo" />
          </div>          
          
          <div className="customer_row__column--sm column_bottom">
            <p className="">N°{ customer.id }</p>
            <p className="">{ customer.firstname }</p>
            <p className="">{ customer.lastname }</p>
          </div>

          <div className="customer_row__column--sm column_bottom">
            <p className="">{ customer.street } { customer.street_number}</p>
            <p className="">{customer.zip_code}</p>
            <p className="">{customer.city}</p>
          </div>

          <div className="customer_row__column--sm column_bottom">
            {customerActive}
            <p className="">Date d'entrée :</p>
            <p className="">Date de sortie :</p>
          </div>

          <div className="customer_row__column--sm column_bottom">
            <p className=""><DateFormat date={customer.membership.membership_at} format="dd.mm.yyyy" /></p>
            <p className=""><DateFormat date={customer.membership.membership_done_at} format="dd.mm.yyyy" /></p>
          </div>          
        </div>      

        <div className="customer_row">
          <div className="customer_row__column--sm customer_buttons">
            <button className="customer_buttons--success">Modifier</button>
            <button className="customer_buttons--danger">Supprimer</button>
          </div>           
        </div>        
          </>    
        )
}
