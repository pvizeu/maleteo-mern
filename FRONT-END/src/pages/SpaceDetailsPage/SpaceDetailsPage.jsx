import React from 'react';
import axios from 'axios';
import { SliderComponent } from '../../shared/components/SliderComponent/SliderComponent';
import { useEffect } from 'react';
import {environment} from "../../environments/environment";


export function SpaceDetailsPage() {

    useEffect( ()=>{

        axios.get( environment.url + "/api/spaces/"  )

    }, [] )

  const space = {
    alias: "Marta1",
    availability: "Abierto 24h",
    createdAt: "2020-06-14T20:04:25.308Z",
    discount: 0,
    email: "pedro@mail.com",
    latitud: 40.417866,
    localization: "xxxx1ssss",
    locker: "El hall es un sitio espacioso y limpio que fue modificado 222",
    longitud: -3.709394,
    photos: (2) [["https://res.cloudinary.com/dqp7c3bnr/image/upload/v1592238573/espacios-guardianes/alojamientoCopy_3x_gx6qwm.png"],["https://res.cloudinary.com/dqp7c3bnr/image/upload/v1592238573/espacios-guardianes/living-room-2583032_640_rhsqwa.jpg"]],
    property: "casa",
    services: "bajamos de 10 a 4 euros mas llevamos a donde quiera dentro de la M30",
    space: "hall",
    title: "ESPACIO 1",
    updatedAt: "2020-06-15T13:09:05.020Z",
    __v: 0,
    _id: "5ee682c9621868ad754163ef",
  }
    return(
        <div>
            <SliderComponent info={space} />
        </div>
    )
}