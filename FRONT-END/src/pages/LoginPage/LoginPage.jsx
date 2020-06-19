import React, {useState} from "react";
import './LoginPage.scss';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {SwitchComponent} from "../../shared/components/SwitchComponent/SwitchComponent";
import { LoginComponent } from '../../shared/components/LoginComponent/LoginComponent';
import { SocialMediaComponent } from '../../shared/components/SocialMediaComponent/SocialMediaComponent';
import {useLocation} from "react-router-dom";

export function LoginPage() {
  // Funcion necesaria para hacer uso de queryParams
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  //parametros de la url recogidos con query buscando la clave
  // let deliver = query.get("deliver");
  // let removal = query.get("removal");
  // let localization = query.get("localization");
  // let latitude = query.get("latitude");
  // let longitude = query.get("longitude");
  // let pieces = query.get("pieces");
  // let url = query.get("url");
  // let useremail = query.get("useremail");

  const [navigation, setNavigation] = useState({
    latitude: (query.get("latitude") ? query.get("latitude") : ""),
    longitude: (query.get("longitude") ? query.get("longitude") : ""),
    localization: (query.get("localization") ? query.get("localization") : ""),
    deliver: (query.get("deliver") ? query.get("deliver") : ""),
    removal: (query.get("removal") ? query.get("removal") : ""),
    pieces: (query.get("pieces") ? query.get("pieces") : ""),
    url: "home",
    useremail: (query.get("useremail") ? query.get("useremail") : "")
  });


  //?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${localization ? localization : ""}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}

  return (
    <div>
      <ArrowBackComponent navigation={navigation}/>
      <SwitchComponent className="switch"/>
      <h1 className="p-title">Inicia sesión ahora</h1>
      <SocialMediaComponent/>
      <div className="correo">
      <span className="p-subtitle">O utiliza tu correo electronico</span>
      </div>
      <LoginComponent navigation={navigation} />
    </div>
  );
}