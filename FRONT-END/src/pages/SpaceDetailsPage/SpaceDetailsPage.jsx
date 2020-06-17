import React from 'react';
import axios from 'axios';
import { SliderComponent } from '../../shared/components/SliderComponent/SliderComponent';
import { useEffect } from 'react';
import {environment} from "../../../environments/environment";


export function SpaceDetailsPage() {

    useEffect( ()=>{

        axios.get( environment.url + "/api/spaces/"  )

    }, [] )

    return(
        <div>
            <SliderComponent guardian={guardian} />
            GuardianDetails
            -title
            -direction
            -name
            -photo
            Tipo de Locker
            RoomDetails
            StaticMap
            OrderDetails
            Rules
            Cost
            Help
        </div>
    )
}