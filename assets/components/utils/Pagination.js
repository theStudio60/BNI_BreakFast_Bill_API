import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Pagintation(props){

    const itemPerPage = props.itemPerPage;
    const nbPages = props.elem["hydra:totalItems"]/itemPerPage;

    const [actualPage, setActualPage] = useState(1);
    const [link, setLink] = useState(props.link+"?page="+actualPage+"&itemsPerPage="+itemPerPage);
    const [btnNextDisabled, setBtnNextDisabled] = useState();
    const [btnPrevDisabled, setBtnPrevDisabled] = useState();

    const dispatch = useDispatch();

    const changePage = (e) => {
    //Suppression de "/api" du lien
    const link = e.target.dataset.link.substr(4)
    //Récuperation du numéro de page
    const page = Number(e.target.dataset.page);
    setActualPage(page);  
    //mise à jour du lien
    setLink(link);
    dispatch(props.whatToDispatch(link));
  }

  const pagesRender = () => {
    let pageNumber = [];
    for (let i = 1; i <= nbPages; i++) {
        
        let pageActive = "";
        if(actualPage === i){
            pageActive = "active";
        }      

        pageNumber.push(
            <li key={i}>
                <button className={pageActive} onClick={changePage} data-page={i} data-link={"/api"+props.link+"?page="+i+"&itemsPerPage="+itemPerPage}>{i}</button>
            </li>            
        );
    }
    return pageNumber;   
  }

// mettre ceci dans un component update
//   setBtnPrevDisabled("")
//   if(actualPage === 1){
//       setBtnPrevDisabled("disabled")
//   }
//   setBtnNextDisabled("")
//   if(actualPage === nbPages){
//       setBtnNextDisabled("disabled")
//   }      

  useEffect(() => {
    dispatch(props.whatToDispatch(link));  
  }, []);

  if(nbPages <= 1){
    return
  }
  return(
        <nav>
        <ul className="pagination">
            <li>
                <button onClick={changePage} data-page={actualPage-1} data-link={props.elem["hydra:view"]["hydra:previous"]} className={btnPrevDisabled} >Précédent</button>
            </li>
                {pagesRender()}
            <li>
                <button onClick={changePage} data-page={actualPage+1}  data-link={props.elem["hydra:view"]["hydra:next"]} className={btnNextDisabled} >Suivant</button>
            </li>
        </ul>
        </nav>
  );
}