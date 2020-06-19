import React from "react";
import './CarrouselComponent.scss'
import { getDistance } from 'geolib';
import {Link} from "react-router-dom";
import loading from '../../img/loading.gif'

export function CarrouselComponent(props) {

        let localization = props.navigation.localization;
        let latitude = props.navigation.latitude;
        let longitude = props.navigation.longitude;
        let deliver = props.navigation.deliver;
        let removal = props.navigation.removal;
        let pieces = props.navigation.pieces;
        let useremail = props.navigation.useremail;
        let url = props.navigation.url;
        let guardianemail = props.navigation.guardianemail;
        let spacetitle = props.navigation.spacetitle;
        let discount = props.navigation.discount;
        let preciosindiscount = props.navigation.preciosindiscount;
    
       //convirtiendolos en float
       latitude = parseFloat(latitude)
       longitude = parseFloat(longitude)
    
       const center = {
        latitude: (latitude),
        longitude: (longitude)
      };

      

    const espacios = props.espacios;

    let orden=[]

    if( espacios[1] && espacios[1].latitud ){

     for (let i = 0; i < espacios.length; i++) {
      
        let espacio = espacios[i];

        const d = getDistance(
             center ,
            { latitude:espacio.latitud, longitude:espacio.longitud} 
           
            )
            orden.push([d,espacio]);
         
     }
           
    }

    orden.sort(function (a, b) {
        if (a[0] > b[0]) {
          return 1;
        }
        if (a[0] < b[0]) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });


    return(
        <div className="c-carrousel">
            <div className="c-carrousel__overflow">
            <div className="c-carrousel__final"></div>

            { espacios[1] === undefined ? <img src={loading} alt="/" className="loading" /> : null}

                {orden.map((espacios, key)=>

                  <Link to={`/location?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${localization ? localization : ""}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}&useremail= ${useremail ? useremail : ""}&url=${url !== "" ? url : ""}&guardianemail=${guardianemail !== "" ? guardianemail : ""}&title=${espacios[1].title}&spacetitle=${espacios[1].spacetitle}&discount=${espacios[1].discount}&preciosindiscount=${espacios[1].preciosindiscount}`}>
            <div key={key} className="c-carrousel__item">


                <img src={espacios[1].photos[0]} alt="/" className="c-carrousel__img"/>


                <div className="c-carrousel__details">
                <p className="c-carrousel__title">{espacios[1].title}</p>
                <p className="c-carrousel__alias">{espacios[1].alias}</p>
                    {/* foto de el guardian */}
                <p className="c-carrousel__space">{espacios[1].space}</p>
                <p className="c-carrousel__ubicacion">{(espacios[0]/1000).toFixed(1)} km de tu ubicación </p>
                </div>
            </div>
                  </Link>
                )}
                <div className="c-carrousel__final"></div>

            </div>
        </div>
    )
}