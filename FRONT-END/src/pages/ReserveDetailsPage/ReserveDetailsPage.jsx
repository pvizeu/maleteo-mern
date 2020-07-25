import React, {useState} from "react";
import './ReserveDetailsPage.scss';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import {Link} from "react-router-dom";
import {useNavigations} from '../../shared/hooks/useNavigations';

export const  ReserveDetailsPage=React.memo(()=>{
  const {history,navigation}=useNavigations("reserveDetail");
  const [navega,setNavega]=useState(()=>{ return navigation;});
  
  console.log("ReserveDetailsPage #### /details  #", navega);

  function randomStr(len, arr) {
    let ans = '';
    for (let i = len; i > 0; i--) {
      ans +=
        arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
  }
  return (
    <div className="details">
      <ArrowBackComponent navigation={navega} history={history}/>
      <h2 className="b-title details__title">Detalles de tu reserva</h2>
      <div className="details__first">
        <table >
          <tr className="details__information">
            <th>Llegada</th>
            <th>Recogida</th>
            <th>Equipaje</th>
          </tr>
          <tr className="details__information">
            <td>{navega.deliver}</td>
            <td>{navega.removal}</td>
            <td>{navega.pieces} Equipajes</td>
          </tr>
        </table>
      </div>
      <hr className="details__hr"/>
      <div className="details__description">
        <div>
          <span className="details__text">Primeras 24 horas<br/> 6,00€ (4€ dia adicional) x {navega.pieces} equipajes</span>
          <span className="details__text">Gastos de gestión</span>
          <span className="details__text">Servicio asegurado<br/> hasta 1000€</span>
          <span className="details__text">Total</span>
        </div>

        <div className="details__prices">
          <span className="details__text">10 €</span>
          <span className="details__text">2 €</span>
          <span className="details__text">Gratis</span>
          <span className="details__text"><strong>12 €</strong></span>
        </div>
      </div>
      <Link to={{pathname:"/complete",state:navega}}>
        <button className="b-btn details__button">Reservar</button>
      </Link>
      <NavComponent navigation={navega}/>
    </div>
  );
})