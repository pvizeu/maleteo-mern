import React from 'react';
import string from '../../shared/img/cadena@2x.png'
import '../../styles/blocks/_background.blocks.scss'
import './WelcomePage.scss'
import {Link} from "react-router-dom";

export function WelcomePage () {

    return(
        <div className="background-orange">
    <div className="p-welcome">
        <div className="p-welcome__container">
            <img src={string} alt="/" className="p-welcome__img" />
            <div className="p-welcome__text">
            <p className="b-title">Preparate para liberarte tu equipaje</p>
            </div>
            <div className="p-welcome__text">
            <p>Encuentra a tu guardián y disfruta a tu manera. Miles de usuarios ya estan aprovechando las ventajas.</p>
            </div>
            <div className="p-welcome__btn">
            <Link to="/getstarted"><button className="b-btn">Continuar</button></Link>
            </div>
        </div>
    </div>
        </div>
    )

}