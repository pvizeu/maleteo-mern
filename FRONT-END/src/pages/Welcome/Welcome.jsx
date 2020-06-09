import React from 'react';
import string from '../../shared/img/cadena@2x.png'
import '../../styles/blocks/_background.blocks.scss'
import './Welcome.scss'


export function Welcome () {

    return(
    <div className="p-welcome">
        <div className="p-welcome__container">
            <img src={string} alt="/" className="p-welcome__img" />
            <div className="p-welcome__text">
            <p className="title-primary">Preparate para liberarte tu equipaje</p>
            </div>
            <div className="p-welcome__text">
            <p className="text-secondary">Encuentra a tu guardián y disfruta a tu manera. Miles de usuarios ya estan aprovechando las ventajas.</p>
            </div>
            <div className="p-welcome__btn">
            <a href="/paso2"><button className="b-btn">Continuar</button></a>
            </div>
        </div>
    </div>
    )

}