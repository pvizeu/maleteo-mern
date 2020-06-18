import React, {useEffect, useState} from "react";
import './ReservationRequestComponent.scss';
import {Link} from "react-router-dom";

export function ReservationRequestComponent(props){

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    setReservations(props.data);
  }, [props.data]);

  console.log(reservations);
  // console.log(reservations.removal);
  return(
    <div>
      <p className="b-title request__big-title">Peticion de reserva</p>
      {reservations.map((item, index) => {
        return(
          <div className="request p-4 flex-row d-flex align-content-center">
            <div className="d-flex flex-column">
              <img className="request__img" src={item.photo ? item.photo : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png"} alt="perfil" key={index}/>
            </div>
            <div className="d-flex flex-column p-1">
              <p className="b-title request__title" key={index}>{item.useremail}</p>
              <p className="b-text request__text" key={index}>{item.deliver}</p>
              <p className="b-text request__text" key={index}>{item.removal}</p>
            </div>
            <div className="d-flex flex-column">

              <button className="b-btn request__btn"><Link to={"/home"} className="request__btn">Aceptar</Link></button>

              <Link to={"/home"} className="request__link">Declinar</Link>
            </div>
          </div>
        )})}
    </div>
  )
}