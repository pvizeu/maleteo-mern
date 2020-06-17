import React, {useEffect, useState} from "react";
import './GuardianConfirmationPage.scss';
import axios from 'axios';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import {environment} from "../../environments/environment";

export function GuardianConfirmationPage() {

  const [reservations, setReservations] = useState([]);

  useEffect(()=>{
    axios.get(environment.url +'reservations').then(res=>{
      setReservations(res.data.data)
    })
  },[])

  console.log(reservations);

  return (
    <div>
      <ArrowBackComponent />
        {reservations.map((item, index) => {
          return(
            <div>
              {/*<img src="" alt="perfil" key={index}/>*/}
              <p className="b-subtitle" key={index}>{item.deliver}</p>
              <p className="b-subtitle" key={index}>{item.useremail}</p>
              <p className="b-subtitle" key={index}>{item.removal}</p>
              <button className="b-btn">Aceptar</button>


            </div>
            )})}
      <NavComponent />
    </div>
  );
}