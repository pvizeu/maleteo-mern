import React from 'react'
import './GuardianDetailsComponent.scss'
import house from '../../img/house.png'
import {Link} from "react-router-dom";

export function GuardianDetailsComponent (props) {
    const info = props.info
    console.log(info)
  // console.log("GuardianDetailsComponent ###",props.navigation);
  let localization = props.navigation.localization;
  let latitude = props.navigation.latitude;
  let longitude = props.navigation.longitude;
  let deliver = props.navigation.deliver;
  let removal = props.navigation.removal;
  let pieces = props.navigation.pieces;
  let useremail = props.navigation.useremail;
  let url = props.navigation.url;
  let guardianemail = props.navigation.guardianemail;
  let title = props.navigation.title;
  let spacetitle = props.navigation.spacetitle;
  let discount = props.navigation.discount;
  let preciosindiscount = props.navigation.preciosindiscount;

    return(
        <div className="c-guardian-details">
            <div className="c-guardian-details__container" >
        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png" alt="/" className="user-photo c-guardian-details__img"/>
          <p className="b-title" >{props.info.title}</p>
          <p className="b-text" >Tetuan, Madrid</p>
          <p className="b-text" > Guardian: {props.info.alias}</p>
          </div>

          <div className="c-guardian-details__type">
              <div>
                <img src={house} alt="/" className="c-guardian-details__icon" />
                </div>
                <div>
                <p className="b-subtitle">Tipo de locker</p>
                <p className="c-guardian-details__type-text">{info.locker}</p>
                </div>
            </div>

        <div className="c-guardian-details__description">

            <p>Habitación espaciada a 15 minutos del centro de madrid y a 5 minutos del la Linea 1. Además ofrezco información turística personalizada.</p>

        </div>

          <div className="c-guardian-details__ubicacion">
              <div className="c-guardian-details__ubicacion-text" >
              <p className="b-subtitle">Ubicacion</p>
              </div>
              <img src="https://storage.googleapis.com/support-forums-api/attachment/thread-9014924-11470506657998028469.JPG" alt="" className="c-guardian-details__ubicacion-img" />
          </div>
    
            <div>
              <p className="b-subtitle">Normas de Marta</p>
              <p className="c-guardian-details__rules" >Cómo debe ser tu maleta</p>
              <p className="c-guardian-details__rules" >Tipo de cancelación de reserva</p>
              <p className="c-guardian-details__rules" >Contactar con tu guardián</p>
              <p className="c-guardian-details__rules" >Denunciar anuncio</p>

            <div className="c-guardian-details__reservar">
                <div className="c-guardian-details__total">
                <p className="c-guardian-details__total-text">Total: ??</p>
                <a  href="/" className="c-guardian-details__desgloce">Desglose de precio</a>
                </div>
                <div className="c-guardian-details__button">
                  <Link to={`/details?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${localization ? localization : ""}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}&useremail= ${useremail ? useremail : ""}&url=${url !== "" ? url : ""}&guardianemail=${guardianemail !== "" ? guardianemail : ""}&title=${title !== "" ? title : ""}&spacetitle=${spacetitle !== "" ? spacetitle : ""}&discount=${discount !== "" ? discount : ""}&preciosindiscount=${preciosindiscount !== "" ? preciosindiscount : ""}`}>
                    <button className="b-btn">Reservar Ahora</button>
                  </Link>
                </div>
            </div>
          </div>

          </div>
    )
}