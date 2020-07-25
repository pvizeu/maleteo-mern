import React from "react";
import './CarrouselComponent.scss'
import { getDistance } from 'geolib';
import {Link} from "react-router-dom";
import loading from '../../img/loading.gif'
import { idText } from "typescript";

export function CarrouselComponent({espacios,navigation,fnOnSelect}) {

        let localization = navigation.localization;
        let latitude = navigation.latitude;
        let longitude = navigation.longitude;
        let deliver = navigation.deliver;
        let removal = navigation.removal;
        let pieces = navigation.pieces;
        let useremail = navigation.useremail;
        let url = navigation.url;
        let guardianemail = navigation.guardianemail;
        let spacetitle = navigation.spacetitle;
        let discount = navigation.discount;
        let preciosindiscount = navigation.preciosindiscount;
    
       //convirtiendolos en float
       latitude = parseFloat(latitude)
       longitude = parseFloat(longitude)
    
   const center = {
    latitude: (latitude ? latitude : 40.415383),
    longitude: (longitude ? longitude : -3.707189)
  };
  
      console.log("carrousel centro",center);
    let orden=[]

    if( espacios[1] && espacios[1].latitud ){

     for (let i = 0; i < espacios.length; i++) {
        let d=0.0;
        let espacio = espacios[i];
        if(center.latitude === 0.0 || center.longitude===0.0 || isNaN(center.latitude) || isNaN(center.longitude)){
          d=0;
        }
        else{
          d = getDistance(center,{latitude:espacio.latitud,longitude:espacio.longitud})            }
        orden.push({...{d:d},...espacio}); 
     }
    }
    // console.log("orden sin ordenar ",orden);
    orden.sort(function (a, b) {return a.d-b.d})
    // console.log("orden",orden);

    return(
        <div className="c-carrousel">
            <div className="c-carrousel__overflow">
            <div className="c-carrousel__final"></div>
            {/* { orden === undefined ? <img src={loading} alt="/" className="loading" /> : null} */}
                {orden.map((espacio, key)=>

                  <Link  key= {key} to={{pathname:"/spaceDetails/",state:{...navigation,
                  ...{title:espacio.title,discount:espacio.discount,guardianemail:espacio.email}}}}>
                    <div key={key} className="c-carrousel__item">
                      <img src={espacio.photos[0]} alt="/" className="c-carrousel__img"/>
                      <div className="c-carrousel__details">
                        <p className="c-carrousel__title">{espacio.title}</p>
                        <p className="c-carrousel__alias">{espacio.alias}</p>
                            {/* foto de el guardian */}
                        <p className="c-carrousel__space">{espacio.space}</p>
                        <p className="c-carrousel__ubicacion">{(espacio.d/1000).toFixed(2)} km de tu ubicación </p>
                      </div>
                    </div>
                  </Link>
            )}
            {/* <div className="c-carrousel__final"></div> */}
            </div>
        </div>
    )
}