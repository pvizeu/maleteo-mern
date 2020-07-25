import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './SliderComponent.scss'
import {ArrowBackComponent} from "../ArrowBackComponent/ArrowBackComponent";



export const SliderComponent=React.memo( (props)=> {
    console.log("slider component",props.info.photos);

    const photos = props.info.photos;

    let spacePhotos = [];

    if( photos !== undefined ){
    photos.forEach( element => {
      spacePhotos.push(element[0])
    })
}
    return(
      <div className="c-space-details">
      <div className="c-space-details__carousel">
          <Carousel showThumbs={false}>
              {spacePhotos.map ( (item, index)=>
              <div key={index}>
                <ArrowBackComponent navigation={props.navigation} history={props.history}/>
                <img src={item} alt="/" className="c-space-details__img"/>
              </div> )}
          </Carousel>
      </div>
      </div> 
    )
})