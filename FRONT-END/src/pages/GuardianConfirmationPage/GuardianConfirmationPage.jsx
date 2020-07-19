import React, {useState, useEffect} from "react";
import './GuardianConfirmationPage.scss';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import {ReservationRequestComponent} from "../../shared/components/ReservationRequestComponent/ReservationRequestComponent";
import axios from 'axios';


export function GuardianConfirmationPage() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get(process.env.REACT_APP_NODE_MALETEO +'reservations' ).then(res=>{
      setData(res.data.data)
    })
  },[])

  return (
    <div>
      <ArrowBackComponent />
      <ReservationRequestComponent data={data} />
      <NavComponent />
    </div>
  );
}