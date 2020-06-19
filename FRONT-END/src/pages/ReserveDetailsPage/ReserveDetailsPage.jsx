import React, {useState} from "react";
import './ReserveDetailsPage.scss';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import {useLocation} from "react-router-dom";

export function ReserveDetailsPage() {

  // Funcion necesaria para hacer uso de queryParams
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  const [navigation, setNavigation] = useState({
    latitude: (query.get("latitude") ? query.get("latitude") : ""),
    longitude: (query.get("longitude") ? query.get("longitude") : ""),
    localization: (query.get("localization") ? query.get("localization") : ""),
    deliver: (query.get("deliver") ? query.get("deliver") : ""),
    removal: (query.get("removal") ? query.get("removal") : ""),
    pieces: (query.get("pieces") ? query.get("pieces") : ""),
    url: "location",
    useremail: (query.get("useremail") ? query.get("useremail") : ""),
    guardianemail: (query.get("guardianemail") ? query.get("guardianemail") : ""),
    title: (query.get("title") ? query.get("title") : ""),
    spacetitle: (query.get("spacetitle") ? query.get("spacetitle") : ""),
    discount: (query.get("discount") ? query.get("discount") : ""),
    preciosindiscount: (query.get("preciosindiscount") ? query.get("preciosindiscount") : "")
  });

  console.log("ReserveDetailsPage #### /details  #", navigation);

  return (
    <div className="details">
      <ArrowBackComponent navigation={navigation}/>
      <h2 className="b-title details__title">Detalles de tu reserva</h2>
      <div className="details__first">
        <table >
          <tr className="details__information">
            <th>Llegada</th>
            <th>Recogida</th>
            <th>Equipaje</th>
          </tr>
          <tr className="details__information">
            <td>30 de Julio</td>
            <td>30 de Julio</td>
            <td>2 Equipajes</td>
          </tr>
        </table>
      </div>
      <hr className="details__hr"/>
      <div className="details__description">
        <div>
          <span className="details__text">Primeras 24 horas<br/> 6,00 x 2 equipajes</span>
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
      <button className="b-btn details__button">Reservar</button>
      <NavComponent navigation={navigation}/>
    </div>
  );
}