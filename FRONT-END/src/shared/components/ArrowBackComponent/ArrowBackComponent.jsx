import React from "react";
import './ArrowBackComponent.scss'
import {Link} from "react-router-dom";

export  function ArrowBackComponent(props) {
    return(
        <div className="arrow-icon">
          <Link to={props.url} className="arrow-icon__link"><i className="fas fa-chevron-left"></i></Link>
        </div>
    )
}