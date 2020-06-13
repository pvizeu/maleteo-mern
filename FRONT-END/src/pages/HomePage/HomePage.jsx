import React, {useEffect, useState} from 'react';
import {environment} from "../../environments/environment";
import axios from 'axios';
import {NewsComponent} from "../../shared/components/NewsComponent/NewsComponent";
import {ExperienceComponent} from "../../shared/components/ExprienceComponent/ExperienceComponent";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import "./HomePage.scss";
import { InputComponent } from '../../shared/components/InputComponent/InputComponent'

export function HomePage() {
    const [experiences, setExperiences] = useState([]);
    const [blogs, setBlogs] = useState([]);
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

    //TEXTO DE PRUEBA
    //const exp = [{
      //  title : "Un pedazito de italia",
        //descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta lacus a vestibulum rhoncus. Nulla vehicula ligula eget mollis mattis. Duis pellentesque tincidunt feugiat ",
       // img : "https://www.ef.com/sitecore/__/~/media/universal/pg/8x5/destination/IT_00_00_1.jpg",
    //},{
      //  title : "Visita Barcelona",
        //descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta lacus a vestibulum rhoncus. Nulla vehicula ligula eget mollis mattis. Duis pellentesque tincidunt feugiat ",
        //img : "https://gd-consejosdeespana.sfo2.cdn.digitaloceanspaces.com//2015/05/Sagrada-Familia-Barcelona.jpg",
    //}]

    return(
        <div className="home">
            <NewsComponent blogs={blogs}/>
            <InputComponent />
            <ExperienceComponent exp={experiences}/>
            <button className="b-btn home__button">Mostrar más</button>
            <NavComponent/>
        </div>
    )
}