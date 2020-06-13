import React from 'react';
import './ArrowForwardComponent.scss';
import {Link} from "react-router-dom";

export function ArrowForwardComponent(props){

  return(
    <div className="forward-icon">
    <Link to={props.url} className="forward-icon__link"><i className="fas fa-arrow-circle-right"></i></Link>
    </div>
  )
}