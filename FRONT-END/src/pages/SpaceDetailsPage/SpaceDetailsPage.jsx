import React, {useState} from "react";
import { SliderComponent } from '../../shared/components/SliderComponent/SliderComponent';
import { GuardianDetailsComponent } from '../../shared/components/GuardianDetailsComponent/GuardianDetailsComponent';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { environment } from "../../environments/environment";


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
    url: "location",
    useremail: (query.get("useremail") ? query.get("useremail") : ""),
    guardianemail: (query.get("guardianemail") ? query.get("guardianemail") : ""),
    title: (query.get("title") ? query.get("title") : ""),
    spacetitle: (query.get("spacetitle") ? query.get("spacetitle") : ""),
    discount: (query.get("discount") ? query.get("discount") : ""),
    preciosindiscount: (query.get("preciosindiscount") ? query.get("preciosindiscount") : "")
  });
  console.log("SpaceDetailsPage #####  /location  #", navigation);

  const [ space, setSpace ] = useState([])

  useEffect(()=>{
    axios.get(environment.url +"spaces/?title=" + navigation.title)
    .then(res => {
      console.log(res.data.data)
      setSpace(res.data.data[0]);
    })
  },[])

  console.log(space)
    return(
        <div>
            <SliderComponent navigation={navigation} info={space} />
            <GuardianDetailsComponent info={space} navigation={navigation}/>
        </div>
    )
}