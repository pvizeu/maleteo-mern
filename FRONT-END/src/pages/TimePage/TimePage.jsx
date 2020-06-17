import React, {useEffect, useState} from "react";
import './TimePage.scss';
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {ArrowForwardComponent} from "../../shared/components/ArrowForwardComponent/ArrowForwardComponent";
import {useLocation} from "react-router-dom";

export function TimePage(){

  const [deposito, setDeposito] = useState([]);
  const [retirada, setRetirada] = useState([]);
  const [piezas, setPiezas] = useState([]);

  // Funcion necesaria para hacer uso de queryParams
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  const hour = 0;
  const min = 30;
  let time = [];
  let num = [];

  //parametros de la url recogidos con query buscando la clave
  let deliver = query.get("deliver");

  let removal = query.get("removal");

  for (let i = 0 ; i < 24 ; i++){
    time.push(((hour + i) < 10 ? "0" + (hour + i) : (hour + i)) + ":0" + hour);
    time.push(((hour + i) < 10 ? "0" + (hour + i) : (hour + i)) + ":" + min);
  }

  for (let i = 0 ; i < 100 ; i++){
    num.push(i);
  }


  useEffect(() => {  }, []);


  return(
    <div>
      <ArrowBackComponent />
      <div className="time">
        <div>
          <span className="b-title time__element" >Deposito</span>
          <select className="b-select time__element time__border-orange" onChange={(e) => {
            setDeposito(e.target.value);
          }}>
            {time.map((item, index)=> <option key={index} value={item}>{item}</option>)}
          </select>

        </div>
        <div>
          <span className="b-title time__element">Retirada</span>
          <select className="b-select time__element time__border-blue" onChange={(e) => {
            setRetirada(e.target.value);
          }}>
            {time.map((item, index)=> <option key={index} value={item}>{item}</option>)}
          </select>
        </div>
      </div>
      <div className="time__num">
        <span className="b-title ">Numero de equipaje</span>
        <select className="b-select time__select" onChange={(e) => {
          setPiezas(e.target.value);
        }}>
          {num.map((item, index) => <option key={index} value={item}>{item}</option>)}
        </select>
      </div>
      <ArrowForwardComponent url={`/home/?deliver=${deliver}T${deposito}&removal=${removal}T${retirada}&pieces=${piezas}`}/>
      <NavComponent />
    </div>
  );
}