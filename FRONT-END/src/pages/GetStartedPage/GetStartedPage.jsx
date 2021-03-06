import React, {useContext} from 'react';
import world from "../../shared/img/world@3x.png";
import './GetStartedPage.scss'
import {Link} from "react-router-dom";
import { SailContext } from '../../shared/contexts/sailContext';
import {useNavigations} from '../../shared/hooks/useNavigations';
 
export function GetStartedPage () {
    let  {history,location,navigation}=useNavigations("GetStarted");

  //  let  {history,location,navigation}=useNavigations("GetStarted");

    const navega=useContext(SailContext)
   // console.log("navegacion en Getstarted",navega);
    return(
        <div className="background-orange">
        <div className="p-welcome">
            <div className="p-welcome__container">
                <img src={world} alt="/" className="p-get-started__img" />
                <div className="p-welcome__text">
                    <p className="b-title">El mismo precio en cualquier parte</p>
                </div>
                <div className="p-welcome__text">
                    <p>Dispondrás de un precio fijo estés donde estés, sin importar el tamaño o el peso.</p>
                </div>
                <div className="p-welcome__btn">
                    <Link to={{pathname:"/home",state:navigation}}><button className="b-btn">Empezar Ya</button></Link>
                    <Link to={{pathname:"/prices",state:navigation}}><p className="p-get-started__link">Consulta precios</p></Link>
                </div>
            </div>
        </div>
        </div>
    )

}