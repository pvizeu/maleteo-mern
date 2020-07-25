import React from 'react'
import './GuardianDetailsComponent.scss'
import house from '../../img/house.png'
import {Link} from "react-router-dom";

export const  GuardianDetailsComponent=React.memo((props)=> {
    const info = props.info
    console.log("guardianDetail component",info);
  // console.log("GuardianDetailsComponent ###",props.navigation);

  let deliver = props.navigation.deliver;
  let removal = props.navigation.removal; 
  let pieces = props.navigation.pieces;


  //Formateando deliver
let splitDeliver = deliver.split("T") 
let dateDeliver = splitDeliver[0].split("-")
let hourDeliver = splitDeliver[1].split(":")
let arrival = new Date(dateDeliver[0],dateDeliver[1],dateDeliver[2],hourDeliver[0],hourDeliver[1]);

console.log(arrival);


//Formateando removal
let splitRemoval = removal.split("T")
console.log(splitRemoval);
let dateRemoval = splitRemoval[0]
dateRemoval = dateRemoval.split("-")

let hourRemoval = splitRemoval[1].split(":")

 let departure = new Date (dateRemoval[0],dateRemoval[1],dateRemoval[2],hourRemoval[0],hourRemoval[1])
const diffTime = Math.abs(departure - arrival)
const diffHours = (Math.floor((diffTime/1000/60)<<0)/60);

console.log(departure);


console.log(diffHours);

 
let price;

if( diffHours / 24 <= 2 && diffHours % 24 !== 0 ){
  let horaExtra = (diffHours - 24 );
  price = 6 + ( horaExtra )
}

if( diffHours / 24 >= 2 && diffHours % 24 !== 0 ){
  let diasE = Math.floor(diffHours/ 24)
  let horasE = diffHours - (diasE * 24) 
  price = (diasE*6) + horasE    
}

if ( diffHours % 24 === 0 ){
  let dias = diffHours / 24;
  price = 6 + ((dias - 1)*4)
}

if( diffHours < 24 ){
  price = 6;  
}

price = price * pieces;


    return(
        <div className="c-guardian-details">
            <div className="c-guardian-details__container" >
        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png" alt="/" className="user-photo c-guardian-details__img"/>
          <p className="b-title" >{props.info.title}</p>
          <p className="b-text" >{props.info.localization}</p>
          <p className="b-text" > Guardian: {props.info.alias}</p>
          <p className="b-text" > Contacto: {props.info.email}</p>
          </div>

          <div className="c-guardian-details__type">
              <div>
                <img src={house} alt="/" className="c-guardian-details__icon" />
                </div>
                <div>
                <p className="b-subtitle">Tipo de locker: {props.info.locker}</p>
                <p className="c-guardian-details__type-text">{props.info.availability}</p>
                </div>
            </div>

        <div className="c-guardian-details__description">

        </div>

          <div className="c-guardian-details__ubicacion">
              <div className="c-guardian-details__ubicacion-text" >
              <p className="b-subtitle">Ubicacion</p>
              </div>
              <img src="https://storage.googleapis.com/support-forums-api/attachment/thread-9014924-11470506657998028469.JPG" alt="" className="c-guardian-details__ubicacion-img" />
          </div>
    
            <div>
              <p className="b-subtitle">Detalles</p>
              <p className="c-guardian-details__rules" >Cómo debe ser tu maleta</p>
              <p className="c-guardian-details__rules" >Tipo de propiedad:{props.info.property}</p>
              <p className="c-guardian-details__rules" >Tipo de espacio:{props.info.space}</p>
              <p className="c-guardian-details__rules" >Servicios:{props.info.services}</p>
              <p className="c-guardian-details__rules" >Denunciar anuncio</p>

            <div className="c-guardian-details__reservar">
                <div className="c-guardian-details__total">
                <p className="c-guardian-details__total-text">Total: {price} </p>
                <a  href="/" className="c-guardian-details__desgloce">Desglose de precio</a>
                </div>
                <div className="c-guardian-details__button">
                  <Link to={{pathname:"/reserveDetails",state:props.navigation}}>
                    <button className="b-btn">Reservar Ahora</button>
                  </Link>
                </div>
            </div>
          </div>

          </div>
    )
})