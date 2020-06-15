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