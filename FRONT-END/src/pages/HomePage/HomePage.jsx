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

  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);
  const [address, setAddress] = useState([]);
  const deliver = query.get("deliver");
  const removal = query.get("removal");
  const pieces = query.get("pieces");

//mostrando los datos de la query
    console.log(deliver);
    console.log(removal);
    console.log(pieces);
    console.log(lat);
    console.log(lng);
    console.log(address);

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
      setLat(datos.latLng.lat);
      setLng(datos.latLng.lng);
      setAddress(datos.address);
    }
    return(
        <div className="home">
          <p className="b-title">Encuentra tu guardian</p>
          <form>
            <InputComponent fnUpdateForm={(datos)=>{updateForm(datos)}}/>
            <div className="c-form">
              <div className="c-prueba">
                <Link to={"/calendar"}>
                  <img src={calendario} className="img"/>
                </Link>
                <input placeholder="Deposito" value={deliver ? deliver : ""} className="retirada"/>
              </div>
              <div className="c-prueba2">
                <Link to={"/calendar"}>
                  <img src={calendario} className="img"/>
                </Link>
                <input placeholder="Retirada" value={removal ? removal : ""} className="retirada"/>
              </div>
            </div>
            <div className="c-form2">
              <div className="c-prueba">
                <Link to={"/calendar"}>
                  <img src={maleta} className="img2"/>
                </Link>
                <input placeholder="Nº de piezas" value={pieces ? pieces : ""} className="retirada"/>
              </div>
              <div className="c-prueba3">
                <Link to={`/search/?lat=${lat}&lng=${lng}&address=${address}&deliver=${deliver}&removal=${removal}`}>
                  <button className="b-btn">Continuar</button>
                </Link>
              </div>
            </div>
          </form>
          <NewsComponent blogs={blogs}/> 
          <ExperienceComponent exp={experiences}/>
          <button className="b-btn home__button">Mostrar más</button>
          <NavComponent/>
        </div>
    );
}