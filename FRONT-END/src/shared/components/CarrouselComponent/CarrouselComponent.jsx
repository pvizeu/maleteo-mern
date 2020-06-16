import React from 'react';
import './CarrouselComponent.scss'
import { orderByDistance, getDistance} from 'geolib';
import { useLocation } from "react-router-dom";
import { element } from 'prop-types';

export function CarrouselComponent(props) {
    
    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
    
       let query = useQuery();
       //parametros de la url recogidos con query buscando la clave
       let lat = query.get("lat");
       let lng = query.get("lng");
    
       //convirtiendolos en float
       lat = parseFloat(lat)
       lng = parseFloat(lng)
    
       const center = {
        latitude: (lat),
        longitude: (lng)
      };

      console.log(center);
      

    const espacios = props.espacios;

    let orden=[]


    if( espacios[1] && espacios[1].latitud ){
     console.log(espacios[1].latitud );

     for (let i = 0; i < espacios.length; i++) {
      
        let espacio = espacios[i];

        const d = getDistance(
             center ,
            { latitude:espacio.latitud, longitude:espacio.longitud} 
           
            )
            console.log(d);
            orden.push([d,espacio]);
            console.log(orden);          
         
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

      console.log(orden);

      if(orden !== [] && orden[0] !== undefined){
        let pp = orden
        console.log(orden)
    }
      

    return(
        <div className="c-carrousel">
            <div className="c-carrousel__overflow">
                {orden.map((espacios, key)=>
            <div key={key} className="c-carrousel__item">

                
                    <img src={espacios[1].photos[0]} alt="/" className="c-carrousel__img"/>
                
                <div className="c-carrousel__details">
                <h4>{espacios[1].title}</h4>
                <p>{espacios[1].alias}</p>
                    {/* foto de el guardian */}
                    <span>{espacios[1].space}</span>
                </div>
            </div>
                )}
                <div className="final"></div>

            </div>
        </div>
    )
}