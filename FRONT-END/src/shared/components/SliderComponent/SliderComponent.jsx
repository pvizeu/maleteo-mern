import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './SliderComponent.scss'
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
      </div> 

    )
}