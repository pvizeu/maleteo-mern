import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import './ArrowBack-Component.scss'

export  function ArrowBackComponent() {
    return(
        <div className="arrow-icon">
            <FontAwesomeIcon icon={faAngleLeft}/>
        </div>
    )
}