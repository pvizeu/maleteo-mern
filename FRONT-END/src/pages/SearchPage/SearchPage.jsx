import React , { useEffect, useState } from 'react';
import './SearchPage.scss';
import { SearchComponent } from '../../shared/components/SearchComponent/SearchComponent';
import { NavComponent } from '../../shared/components/NavComponent/NavComponent';
import { CarrouselComponent } from '../../shared/components/CarrouselComponent/CarrouselComponent';
import {environment} from "../../environments/environment";
import axios from 'axios';
import {useLocation} from "react-router-dom";

export function SearchPage() {

  // Funcion necesaria para hacer uso de queryParams
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  const [ espacios, setEspacios ] = useState([])
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

  useEffect(()=>{
      axios.get(environment.url+'spaces').then(res=>{
        // console.log(res.data.data);
        setEspacios(res.data.data);
      })
    },[]);


  const onSelect = (index) => {
    let aux = navigation;
    aux.title = espacios[index].title;
    aux.guardianemail = espacios[index].guardianemail;
    aux.spacetitle = espacios[index].spacetitle;
    aux.discount = espacios[index].discount;
    setNavigation(aux);
  }


  return (
    <div>
      <SearchComponent/>
      <div className="car" >
        <CarrouselComponent espacios={espacios} fnOnSelect={(index)=>{onSelect(index)}} navigation={navigation}/>
      </div>
      <NavComponent navigation={navigation} />
    </div>
  );
}