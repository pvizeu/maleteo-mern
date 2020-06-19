import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './SliderDetails.scss'
import {Link} from "react-router-dom";


export function SliderComponent (props) {
    console.log(props.info.photos);

    let spacePhotos = [];

    (props.info.photos).forEach(element => {
        spacePhotos.push(element[0])
    });



    return(
      <div className="c-space-details">
      {/*<div className="arrow-back">*/}
      {/*<Link to="/" className="arrow-icon__link"><i className="fas fa-chevron-left"></i></Link>  */}
      {/*</div>*/}
      <div className="c-space-details__carousel">
          <Carousel showThumbs={false}>
              {spacePhotos.map ( (item, index)=>
              <div key={index}>
                <img src={item} alt="/" className="c-space-details__img"/>
              </div> )}
          </Carousel>
      </div>
  
          {/* <p> Normas de {props.info.alias}</p>
          <p>Como debe ser tu maleta</p>
          <p>Tipo de cancelacion de reserva</p>
          <p>Contactas con guardian</p>
          <p>Denunciar anuncio</p>
          <p>{props.info.latitud}</p>
          <p>{props.info.longitud}</p>
          <p>{props.info.localization}</p>
          <p>{props.info.locker}</p>
          <p>{props.info.property}</p>
          <p>{props.info.services}</p>
          <p>{props.info.space}</p>
          <p>{props.info._id}</p>
        <hr/>
          <div>
              <div>
                <img src="" alt=""/>
                <p>Tipo de locker</p>
                <p>El salón de su casa será el lugar idóneo para alojar tus maletas y cuidar de ellas.</p>
              </div>
              <div>
                <img src="" alt=""/>
                <p>Como la patena</p>
                <p>19 usuarios recientes han catalogado su espacio como muy limpo.</p>
              </div>
              <div>
                <img src="" alt=""/>
                <p>Un Fortín</p>
                <p>el 95% de los usuarios han valorado su experiéncia como muy segura.</p>
              </div>
          </div>
          <hr/><p>Habitación espaciada a 15 minutos del centro de madrid y a 5 minutos del la Linea 1. Además ofrezco información turística personalizada.</p><hr/>
          <div>
              <p>Ubicacion</p>
              <img src="https://storage.googleapis.com/support-forums-api/attachment/thread-9014924-11470506657998028469.JPG" alt=""/>
          </div>
          <div>
              <p className="b-title">Reseñas</p>
              <div> */}
                  {/* <img src="https://res.cloudinary.com/dqp7c3bnr/image/upload/v1592238573/espacios-guardianes/living-room-2583032_640_rhsqwa.jpg" alt=""/> */}
                  {/* <p>{props.info.alias}</p>
                  <p>En Julio de 2019</p>
                  <p>{props.info.locker}</p>
              </div>
              <div> */}
                  {/* <img src="https://res.cloudinary.com/dqp7c3bnr/image/upload/v1592238573/espacios-guardianes/living-room-2583032_640_rhsqwa.jpg" alt=""/> */}
                  {/* <p>{props.info.alias}</p>
                  <p>En Julio de 2019</p>
                  <p>{props.info.locker}</p>
              </div>
              <div> */}
                  {/* <img src="https://res.cloudinary.com/dqp7c3bnr/image/upload/v1592238573/espacios-guardianes/living-room-2583032_640_rhsqwa.jpg" alt=""/> */}
                  {/* <p>{props.info.alias}</p>
                  <p>En Julio de 2019</p>
                  <p>{props.info.locker}</p>
              </div>
          </div> */}
          {/* <div>
              <p className="b-title">Normas de Marta</p>
              <p>Cómo debe ser tu maleta</p><hr/>
              <p>Tipo de cancelación de reserva</p><hr/>
              <p>Contactar con tu guardián</p><hr/>
              <p>Denunciar anuncio</p><hr/>
          </div>
          <div>
              <p className="b-title">Otros lockers cerca de ti</p> */}
              {/*<img src="" alt=""/>*/}
              {/*<img src="" alt=""/>*/}
          {/* </div>

          <div>
              <p>Total <strong>12 $</strong></p>
              <a href="/">Desglose del precio</a>
              <button className="b-btn">Reservar Ahora</button>
          </div>*/}
      </div> 

    )
}