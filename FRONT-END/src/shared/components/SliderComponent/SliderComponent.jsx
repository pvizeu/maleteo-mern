import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './SliderComponent.scss'
import {Link} from "react-router-dom";


export function SliderComponent (props) {
    console.log(props.info.photos);

    const photos = props.info.photos;

    let spacePhotos = [];

    if( photos !== undefined ){
    photos.forEach( element => {
      spacePhotos.push(element[0])
    })
}
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
      <div className="c-space-details">
      <div className="arrow-back">
      <Link to={`/${url}/?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${localization ? localization : ""}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}&useremail= ${useremail ? useremail : ""}&url=${url !== "" ? url : ""}&guardianemail=${guardianemail !== "" ? guardianemail : ""}&title=${title !== "" ? title : ""}&spacetitle=${spacetitle !== "" ? spacetitle : ""}&discount=${discount !== "" ? discount : ""}&preciosindiscount=${preciosindiscount !== "" ? preciosindiscount : ""}`} className="arrow-icon__link"><i className="fas fa-chevron-left"></i></Link>
      </div>
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