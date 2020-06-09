import React from "react";
import './Nav-Component.scss'
import home from '../../img/inicio@3x.png';
import search from '../../img/buscar@3x.png';
import chat from '../../img/mensaje@3x.png';
import user from '../../img/usuario@3x.png'

export function NavComponent() {

    return(
        <div className="c-nav">
            <img src={home} alt="/" className="c-nav__home"/>
            <img src={search} alt="/" className="c-nav__search"/>
            <img src={chat} alt="/" className="c-nav__chat"/>
            <img src={user} alt="/" className="c-nav__user"/>
        </div>
    )
}