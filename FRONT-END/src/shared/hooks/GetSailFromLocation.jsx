import React, {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";

//llamada de parametros en el return de la aplicacion principal o sea ccuando pinta y devueve
export const GetSailFromLocation=({sail, onNavigation})=>{
  const [navigation, setNavigation] = useState({})
  let query = new URLSearchParams(useLocation().search);
  useEffect(()=>{
    console.log("sail en parametros",sail);
    const aux={
      latitude: (query.get("latitude") ? query.get("latitude") : ""),
      longitude: (query.get("longitude") ? query.get("longitude") : ""),
      localization: (query.get("localization") ? query.get("localization") : ""),
      deliver: (query.get("deliver") ? query.get("deliver") : ""),
      removal: (query.get("removal") ? query.get("removal") : ""),
      pieces: (query.get("pieces") ? query.get("pieces") : ""),
      url: (query.get("url") ? query.get("url") : ""),
      useremail: (query.get("useremail") ? query.get("useremail") : ""),
      guardianemail: (query.get("guardianemail") ? query.get("guardianemail") : ""),
      title: (query.get("title") ? query.get("title") : ""),
      spacetitle: (query.get("spacetitle") ? query.get("spacetitle") : ""),
      discount: (query.get("discount") ? query.get("discount") : ""),
      preciosindiscount: (query.get("preciosindiscount") ? query.get("preciosindiscount") : "")
    }
    setNavigation(aux);
    console.log("aux en GetSailFromLocation",aux);
    onNavigation(aux);

  },[])
  
  return(
    <>
    </>
  )
}
