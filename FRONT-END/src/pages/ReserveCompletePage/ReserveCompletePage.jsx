import React, {useState} from "react";
import './ReserveCompletePage.scss';
import {CloseComponent} from "../../shared/components/CloseComponent/CloseComponent";
import fenix from '../../shared/img/fenix@3x.png';
import {useLocation} from "react-router-dom";

export function ReserveCompletePage() {

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
  let code = query.get("code") ? query.get("code") : "QTS7";

  return (
    <div className=" p-4 complete">
      <CloseComponent navigation={navigation}/>
      <p className="b-title">Reserva Completada</p>
      <img src={fenix} alt="fenix" className="complete__fenix"/>
      <p>Codigo de reserva: <strong>{code}</strong></p>
      <h3>BE FREE!</h3>
      <p>Contacta ya con tu guardian y espera a que acepte tu reserva</p>
      <p>Guardian email: {navigation.guardianemail}</p>
    </div>
  );
}