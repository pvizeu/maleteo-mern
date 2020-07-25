import React, {useEffect, useState, useRef, useMemo} from 'react';
import axios from 'axios';
import {NewsComponent} from "../../shared/components/NewsComponent/NewsComponent";
import {ExperienceComponent} from "../../shared/components/ExprienceComponent/ExperienceComponent";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import "./HomePage.scss";
import { InputComponentTwo } from '../../shared/components/InputComponent/InputComponentTwo'
import {Link, useLocation} from "react-router-dom";
import calendario from "../../shared/img/icons8Calendar100Copy@3x.jpg";
import maleta from "../../shared/img/maletita@3x.jpg";
import {useNavigations} from '../../shared/hooks/useNavigations';
import {Navigations} from '../../shared/hooks/Navigations';
import {Search} from "../../shared/components/SearchComponent/SearchComponent";


export function HomePage() {

  const [navega,setNavega]=useState(()=>{let {navigation}=Navigations("home"); return navigation;});
  const [experiences, setExperiences] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [latitude,setLatitude]=useState();
  const [longitude,setLongitude]=useState();
  const [localization,setLocalization]=useState();

  const center = {
    lat: (latitude ? latitude : 40.415383),
    lng: (longitude ? longitude : -3.707189)
  };
  useEffect(()=>{
    //setNavega(navigation);
    setLatitude(parseFloat(navega.latitude));
    setLongitude(parseFloat(navega.longitude));
    setLocalization(navega.localization);
    console.log("en use efect*************");
  },[]);
  //console.log("variable navea en home",navega);

    useEffect(()=>{
      console.log("experiencias",process.env.REACT_APP_NODE_MALETEO);
        axios.get(process.env.REACT_APP_NODE_MALETEO+'experiences').then(res=>{
            setExperiences(res.data.data);
            console.log("leido experiencias");
        })
    },[])
    useEffect(()=>{
        axios.get(process.env.REACT_APP_NODE_MALETEO +'blogs').then(res=>{
            setBlogs(res.data.data)
            console.log("leido blogs",process.env.REACT_APP_NODE_MALETEO)
        })
    },[])

    const updateForm = (datos) => {
      setLatitude(datos.latLng.lat);
      setLongitude(datos.latLng.lng);
      setLocalization(datos.localization);
      setNavega(previous=>{return {
                                   ...previous,
                                   ...{latitude:datos.lat},
                                   ...{longitude:datos.lng},
                                   ...{localization:datos.localization}};});
        console.log("home page el input componet",navega);
    }
    return(
        <div className="home">
          <p className="b-title home__title">Encuentra tu guardian</p>
          <form>
            {/* <InputComponent localization={localization} fnUpdateForm={(datos)=>{updateForm(datos)}}/> */}
            <div className="c-form">
            {/* <InputComponentTwo localization={localization} latitude={latitude} longitude={longitude} panto={(datos)=>{updateForm(datos)}}/> */}

              <div className="c-prueba">
              {/* <Link to={`/calendar/?latitude=${latitude !== "" ? latitude : ""}&longitude=${longitude !== "" ? longitude : ""}&localization=${localization !== "" ? localization : ""}&deliver=${deliver !== "" ? deliver : ""}&removal=${removal !== "" ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}`}> */}
              <Link to={{pathname:"/calendar",state:navega}} key="1">
                  <img src={calendario} className="img" alt="/"/>
                </Link>
                <input placeholder="Deposito" value={navega.deliver ? navega.deliver : ""} className="retirada"/>
              </div>
              <div className="c-prueba2">
              <Link to={{pathname:"/calendar",state:navega}} key="2">
                  <img src={calendario} className="img" alt="/"/>
                </Link>
                <input placeholder="Retirada" value={navega.removal ? navega.removal : ""} className="retirada"/>
              </div>
            </div>
            <div className="c-form2">
              <div className="c-prueba">
              <Link to={{pathname:"/calendar",state:navega}} key="3">
                  <img src={maleta} className="img2" alt="/"/>
                </Link>
                <input placeholder="Nº de piezas" value={navega.pieces ? navega.pieces : ""} className="retirada"/>
              </div>
              <div className="c-prueba3">
                <Link to={{pathname:"/search",state:navega}} key="3">
                  <button className="b-btn">Continuar</button>
                </Link>
              </div>
            </div>
          </form>
          <NewsComponent blogs={blogs}/> 
          <ExperienceComponent exp={experiences}/>
          <button className="b-btn home__button">Mostrar más</button>
          <NavComponent navigation={navega}/>
        </div>
    );
}