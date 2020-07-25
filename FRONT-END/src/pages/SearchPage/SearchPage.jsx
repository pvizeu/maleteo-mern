import React , { useEffect, useState } from 'react';
import './SearchPage.scss';
import { SearchComponent } from '../../shared/components/SearchComponent/SearchComponent';
import { NavComponent } from '../../shared/components/NavComponent/NavComponent';
import { CarrouselComponent } from '../../shared/components/CarrouselComponent/CarrouselComponent';
import axios from 'axios';
import {useLocation} from "react-router-dom";
import { useCallback } from 'react';
import {Navigations} from '../../shared/hooks/Navigations';

export function SearchPage() {
  //let  {history,location,navigation}=useNavigations("search");
  const [navega,setNavega]=useState(()=>{let {navigation}=Navigations("search"); return navigation;});
  const [ espacios, setEspacios ] = useState([])

  useEffect(()=>{
      axios.get(process.env.REACT_APP_NODE_MALETEO+'spaces').then(res=>{        // console.log(res.data.data);
        setEspacios(res.data.data);
      })
    },[]);
  const onSelect = useCallback((index) => {
    let aux = navega;
    aux.title = espacios[index].title;
    aux.guardianemail = espacios[index].guardianemail;
    aux.spacetitle = espacios[index].spacetitle;
    aux.discount = espacios[index].discount;
    setNavega((previous)=>{return {...previous,...aux}});
  },[navega]);

 const onPosition = useCallback((coordEle) => {
          console.log("pagina searp",coordEle);
          setNavega((previous)=>{return {...previous,...{latitude:coordEle.lat,longitude:coordEle.lng}}});
}, [navega]);

  return (
    <div>
      <SearchComponent espacios={espacios} onPosition={onPosition}/>
      <div className="car" >
        <CarrouselComponent espacios={espacios} fnOnSelect={(index)=>{onSelect(index)}} navigation={navega}/>
      </div>
      <NavComponent navigation={navega} />
    </div>
  );
}