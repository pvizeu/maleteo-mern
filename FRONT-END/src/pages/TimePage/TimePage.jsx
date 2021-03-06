import React, {useState, useEffect} from "react";
import './TimePage.scss';
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {ArrowForwardComponent} from "../../shared/components/ArrowForwardComponent/ArrowForwardComponent";
import {useLocation} from "react-router-dom";
import {useNavigations} from '../../shared/hooks/useNavigations';
// var ArrowForwardComponent=require("../../shared/components/ArrowForwardComponent/ArrowForwardComponent").ArrowForwardComponen;
export function TimePage(){
  let  {history,location,navigation}=useNavigations("time");
  const [navega,setNavega]=useState(navigation);
  
  // useEffect(()=>{
  //   setNavega(navigation); 
  // },[])


  const [deposito, setDeposito] = useState([]);
  const [retirada, setRetirada] = useState([]);
  const [piezas, setPiezas] = useState([]);

  // Funcion necesaria para hacer uso de queryParams
  // function useQuery() {
  //   return new URLSearchParams(useLocation().search);
  // }
  // let query = useQuery();
  // const [navigation, setNavigation] = useState({
  //   latitude: (query.get("latitude") ? query.get("latitude") : ""),
  //   longitude: (query.get("longitude") ? query.get("longitude") : ""),
  //   localization: (query.get("localization") ? query.get("localization") : ""),
  //   deliver: (query.get("deliver") ? query.get("deliver") : ""),
  //   removal: (query.get("removal") ? query.get("removal") : ""),
  //   pieces: (query.get("pieces") ? query.get("pieces") : ""),
  //   url: "home",
  //   useremail: (query.get("useremail") ? query.get("useremail") : "")
  // });
  console.log("TIME PAGE ###", navega);
  const hour = 0;
  const min = 30;
  let time = [];
  let num = [];

  //parametros de la url recogidos con query buscando la clave
  // let deliver = query.get("deliver");
  // let removal = query.get("removal");
  // let localization = query.get("localization");
  // let latitude = query.get("latitude");
  // let longitude = query.get("longitude");

  for (let i = 0 ; i < 24 ; i++){
    time.push(((hour + i) < 10 ? "0" + (hour + i) : (hour + i)) + ":0" + hour);
    time.push(((hour + i) < 10 ? "0" + (hour + i) : (hour + i)) + ":" + min);
  }

  for (let i = 0 ; i < 100 ; i++){
    num.push(i);
  }

  let navigationTime = (a,b) => {
    let aux = {...navega};
    if (a === 1){
      aux.deliver = navega.deliver.substring(0,10).concat("T", b);
      setNavega(aux);
    }
    if (a === 2){
      aux.removal = navega.removal.substring(0,10).concat("T", b);
      setNavega(aux);
    }
    if (a === 3){
      aux.pieces = b;
      setNavega(aux);
    }
    console.log("time en cambio",aux);
  }


  return(
    <div>
      <ArrowBackComponent navigation={navega} history={history}/>
      <div className="time">
        <div>
          <span className="b-title time__element" >Deposito</span>
          <select className="b-select time__element time__border-orange" onChange={(e) => {
            setDeposito(e.target.value);
            navigationTime(1,e.target.value);
          }}>
            {time.map((item, index)=> <option key={index} value={item}>{item}</option>)}
          </select>

        </div>
        <div>
          <span className="b-title time__element">Retirada</span>
          <select className="b-select time__element time__border-blue" onChange={(e) => {
            setRetirada(e.target.value);
            navigationTime(2,e.target.value);
          }}>
            {time.map((item, index)=> <option key={index} value={item}>{item}</option>)}
          </select>
        </div>
      </div>
      <div className="time__num">
        <span className="b-title ">Numero de equipaje</span>
        <select className="b-select time__select" onChange={(e) => {
          setPiezas(e.target.value);
          navigationTime(3, e.target.value);
        }}>
          {num.map((item, index) => <option key={index} value={item}>{item}</option>)}
        </select>
      </div>
      <ArrowForwardComponent pagina="/home" navigation={navega}/>
      <NavComponent navigation={navega} />
    </div>
  );
}