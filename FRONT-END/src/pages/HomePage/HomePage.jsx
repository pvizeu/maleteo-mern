import React, {useEffect, useState} from 'react';
import {environment} from "../../environments/environment";
import axios from 'axios';
import {NewsComponent} from "../../shared/components/NewsComponent/NewsComponent";
import {ExperienceComponent} from "../../shared/components/ExprienceComponent/ExperienceComponent";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import "./HomePage.scss";
import { InputComponent } from '../../shared/components/InputComponent/InputComponent'
import {Link, useLocation} from "react-router-dom";
import calendario from "../../shared/img/icons8Calendar100Copy@3x.jpg";
import maleta from "../../shared/img/maletita@3x.jpg";



export function HomePage() {
    const [experiences, setExperiences] = useState([]);
    const [blogs, setBlogs] = useState([]);

  // Funcion necesaria para hacer uso de queryParams
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  const [latitude, setLatitude] = useState(query.get("latitude") ? query.get("latitude") : "");
  const [longitude, setLongitude] = useState(query.get("longitude") ? query.get("longitude") : "");
  const [localization, setLocalization] = useState(query.get("localization") ? query.get("localization") : "");


  const [deliver, setDeliver] = useState(query.get("deliver") ? query.get("deliver") : "");
  const [removal, setRemoval] = useState(query.get("removal") ? query.get("removal") : "");
  const [pieces, setPieces] = useState(query.get("pieces") ? query.get("pieces") : "");

  const [navigation, setNavigation] = useState({
    latitude: (query.get("latitude") ? query.get("latitude") : ""),
    longitude: (query.get("longitude") ? query.get("longitude") : ""),
    localization: (query.get("localization") ? query.get("localization") : ""),
    deliver: (query.get("deliver") ? query.get("deliver") : ""),
    removal: (query.get("removal") ? query.get("removal") : ""),
    pieces: (query.get("pieces") ? query.get("pieces") : ""),
    url: "home",
    useremail: (query.get("useremail") ? query.get("useremail") : ""),
    guardianemail: (query.get("guardianemail") ? query.get("guardianemail") : ""),
    title: (query.get("title") ? query.get("title") : ""),
    spacetitle: (query.get("spacetitle") ? query.get("spacetitle") : ""),
    discount: (query.get("discount") ? query.get("discount") : ""),
    preciosindiscount: (query.get("preciosindiscount") ? query.get("preciosindiscount") : "")
  });

    useEffect(()=>{
        axios.get(environment.url +'experiences').then(res=>{
            setExperiences(res.data.data);
        })
    },[])
    useEffect(()=>{
        axios.get(environment.url +'blogs').then(res=>{
            setBlogs(res.data.data)
        })
    },[])

    const updateForm = (datos) => {
      setLatitude(datos.latLng.lat);
      setLongitude(datos.latLng.lng);
      setLocalization(datos.localization);

    }
    return(
        <div className="home">
          <p className="b-title home__title">Encuentra tu guardian</p>
          <form>
            <InputComponent localization={localization} fnUpdateForm={(datos)=>{updateForm(datos)}}/>
            <div className="c-form">
              <div className="c-prueba">
                <Link to={`/calendar/?latitude=${latitude !== "" ? latitude : ""}&longitude=${longitude !== "" ? longitude : ""}&localization=${localization !== "" ? localization : ""}&deliver=${deliver !== "" ? deliver : ""}&removal=${removal !== "" ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}`}>
                  <img src={calendario} className="img" alt="/"/>
                </Link>
                <input placeholder="Deposito" value={deliver ? deliver : ""} className="retirada"/>
              </div>
              <div className="c-prueba2">
                <Link to={`/calendar/?latitude=${latitude !== "" ? latitude : ""}&longitude=${longitude !== "" ? longitude : ""}&localization=${localization !== "" ? localization : ""}&deliver=${deliver !== "" ? deliver : ""}&removal=${removal !== "" ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}`}>
                  <img src={calendario} className="img" alt="/"/>
                </Link>
                <input placeholder="Retirada" value={removal ? removal : ""} className="retirada"/>
              </div>
            </div>
            <div className="c-form2">
              <div className="c-prueba">
                <Link to={`/calendar/?latitude=${latitude !== "" ? latitude : ""}&longitude=${longitude !== "" ? longitude : ""}&localization=${localization !== "" ? localization : ""}&deliver=${deliver !== "" ? deliver : ""}&removal=${removal !== "" ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}`}>
                  <img src={maleta} className="img2" alt="/"/>
                </Link>
                <input placeholder="Nº de piezas" value={pieces ? pieces : ""} className="retirada"/>
              </div>
              <div className="c-prueba3">
                <Link to={`/search/?latitude=${latitude !== "" ? latitude : ""}&longitude=${longitude !== "" ? longitude : ""}&localization=${localization !== "" ? localization : ""}&deliver=${deliver !== "" ? deliver : ""}&removal=${removal !== "" ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}`}>
                  <button className="b-btn">Continuar</button>
                </Link>
              </div>
            </div>
          </form>
          <NewsComponent blogs={blogs}/> 
          <ExperienceComponent exp={experiences}/>
          <button className="b-btn home__button">Mostrar más</button>
          <NavComponent navigation={navigation}/>
        </div>
    );
}