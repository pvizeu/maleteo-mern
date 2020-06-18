import React , { useEffect, useState } from 'react';
import './SearchPage.scss';
import { SearchComponent } from '../../shared/components/SearchComponent/SearchComponent';
import { NavComponent } from '../../shared/components/NavComponent/NavComponent';
import { CarrouselComponent } from '../../shared/components/CarrouselComponent/CarrouselComponent';
import {environment} from "../../environments/environment";
import axios from 'axios';

export function SearchPage() {
    
  const [ espacios, setEspacios ] = useState([])

  useEffect(()=>{
      axios.get(environment.url+'spaces').then(res=>{
        console.log(res.data.data);
        setEspacios(res.data.data);
      })
    },[])

  return (
    <div>
      <SearchComponent/>
      <div className="car" >
        <CarrouselComponent espacios={espacios}/>
      </div>
      <NavComponent/>
    </div>
  );
}