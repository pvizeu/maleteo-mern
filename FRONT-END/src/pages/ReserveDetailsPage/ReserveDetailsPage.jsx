import React, {useState} from "react";
import './ReserveDetailsPage.scss';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import {Link, useLocation} from "react-router-dom";

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
            <td>{navigation.deliver}</td>
            <td>{navigation.removal}</td>
            <td>{navigation.pieces} Equipajes</td>
          </tr>
        </table>
      </div>
      <hr className="details__hr"/>
      <div className="details__description">
        <div>
          <span className="details__text">Primeras 24 horas<br/> 6,00 x {navigation.pieces} equipajes</span>
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
      <Link to={`/complete/?latitude=${navigation.latitude ? navigation.latitude : ""}&longitude=${navigation.longitude ? navigation.longitude : ""}&localization=${navigation.localization ? navigation.localization : ""}&deliver=${navigation.deliver ? navigation.deliver : ""}&removal=${navigation.removal ? navigation.removal : ""}&pieces=${navigation.pieces !== "" ? navigation.pieces : ""}&useremail= ${navigation.useremail ? navigation.useremail : ""}&url=${navigation.url !== "" ? navigation.url : ""}&guardianemail=${navigation.guardianemail !== "" ? navigation.guardianemail : ""}&title=${navigation.title !== "" ? navigation.title : ""}&spacetitle=${navigation.spacetitle !== "" ? navigation.spacetitle : ""}&discount=${navigation.discount !== "" ? navigation.discount : ""}&preciosindiscount=${navigation.preciosindiscount !== "" ? navigation.preciosindiscount : ""}&code=${randomStr(4,'123456789ABCDQWETRY')}`}>
        <button className="b-btn details__button">Reservar</button>
      </Link>
      <NavComponent navigation={navigation}/>
    </div>
  );
}