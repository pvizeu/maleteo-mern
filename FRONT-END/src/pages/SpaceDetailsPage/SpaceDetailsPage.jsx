import React, {useState} from "react";
import { SliderComponent } from '../../shared/components/SliderComponent/SliderComponent';
import { GuardianDetailsComponent } from '../../shared/components/GuardianDetailsComponent/GuardianDetailsComponent';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {useLocation} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import {Navigations} from '../../shared/hooks/Navigations';
import {useNavigations} from '../../shared/hooks/useNavigations';

export function SpaceDetailsPage() {
  const {history,navigation}=useNavigations("spaceDetail");
  const [historia,setHistoria]=useState(()=>{ return history;})
  const [navega,setNavega]=useState(()=>{ return navigation;});
  // Funcion necesaria para hacer uso de queryParams
  
  console.log("SpaceDetailsPage ##### #");

  const [ space, setSpace ] = useState([])

  useEffect(()=>{
    console.log("lectura de un espacio",navega.title);
    axios.get(process.env.REACT_APP_NODE_MALETEO +"spaces/?title=" + navega.title)
    .then(res => {
      console.log(res.data.data)
      setSpace(res.data.data[0]);
    })
  },[])

  console.log(space)
    return(
        <div>
            <SliderComponent navigation={navega} info={space} history={historia}/>
            <GuardianDetailsComponent info={space} navigation={navega}/>
        </div>
    )
}