import React, {useState} from "react";
import { SliderComponent } from '../../shared/components/SliderComponent/SliderComponent';
import { GuardianDetailsComponent } from '../../shared/components/GuardianDetailsComponent/GuardianDetailsComponent';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {useLocation} from "react-router-dom";


export function SpaceDetailsPage() {

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
    url: "search",
    useremail: (query.get("useremail") ? query.get("useremail") : ""),
    guardianemail: (query.get("guardianemail") ? query.get("guardianemail") : ""),
    title: (query.get("title") ? query.get("title") : ""),
    spacetitle: (query.get("spacetitle") ? query.get("spacetitle") : ""),
    discount: (query.get("discount") ? query.get("discount") : ""),
    preciosindiscount: (query.get("preciosindiscount") ? query.get("preciosindiscount") : "")
  });
  console.log("SpaceDetailsPage #####  /location  #", navigation);
  const space = {
    alias: "Marta1",
    availability: "Abierto 24h",
    createdAt: "2020-06-14T20:04:25.308Z",
    discount: 0,
    email: "pedro@mail.com",
    latitud: 40.417866,
    localization: "xxxx1ssss",
    locker: "El hall es un sitio espacioso y limpio que fue modificado 222",
    longitud: -3.709394,
    photos: [["https://res.cloudinary.com/dqp7c3bnr/image/upload/v1592238573/espacios-guardianes/alojamientoCopy_3x_gx6qwm.png"],["https://res.cloudinary.com/dqp7c3bnr/image/upload/v1592238573/espacios-guardianes/living-room-2583032_640_rhsqwa.jpg"]],
    property: "casa",
    services: "bajamos de 10 a 4 euros mas llevamos a donde quiera dentro de la M30",
    space: "hall",
    title: "ESPACIO 1",
    updatedAt: "2020-06-15T13:09:05.020Z",
    __v: 0,
    _id: "5ee682c9621868ad754163ef",
  }
    return(
        <div>
            <SliderComponent navigation={navigation} info={space} />
            <GuardianDetailsComponent info={space} navigation={navigation}/>
        </div>
    )
}