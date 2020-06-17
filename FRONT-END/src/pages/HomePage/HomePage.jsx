import React, {useEffect, useState} from 'react';
import {environment} from "../../environments/environment";
import axios from 'axios';
import {NewsComponent} from "../../shared/components/NewsComponent/NewsComponent";
import {ExperienceComponent} from "../../shared/components/ExprienceComponent/ExperienceComponent";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import "./HomePage.scss";
import { InputComponent } from '../../shared/components/InputComponent/InputComponent'
import {useLocation} from "react-router-dom";



export function HomePage() {
    const [experiences, setExperiences] = useState([]);
    const [blogs, setBlogs] = useState([]);

  // Funcion necesaria para hacer uso de queryParams
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

    const deliver = query.get("deliver");
    const removal = query.get("removal");
    const pieces = query.get("pieces");
    const [lat, setLat] = useState([]);
    const [lng, setLng] = useState([]);
    const [address, setAddress] = useState([]);

//mostrando los datos de la query
    console.log(deliver);
    console.log(removal);
    console.log(pieces);
    console.log(lat);
    console.log(lng);
    console.log(address);

    useEffect(()=>{
        axios.get(environment.url +'experiences').then(res=>{
            console.log(res.data.data);
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
          <InputComponent fnUpdateForm={(datos)=>{updateForm(datos)}}/>
          <NewsComponent blogs={blogs}/> 
          <ExperienceComponent exp={experiences}/>
          <button className="b-btn home__button">Mostrar más</button>
          <NavComponent/>
        </div>
    );
}