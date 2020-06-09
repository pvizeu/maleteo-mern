import React from 'react';
import logoMaleteo from '../../shared/img/maleta@3x.png'
import textoMaleteo from '../../shared/img/maleteo@3x.png'
import './LogoPage.scss'


export function LogoPage () {

    return(
        <>
        <meta httpEquiv="refresh" content="1;URL=/welcome" />
        <div className="background-orange">
            <div className="p-logo">
                <img  src={logoMaleteo} alt="logo maleteo" className="p-logo__img"/>
                <img src={textoMaleteo} alt="texto maleteo" className="p-logo__texto"/>
            </div>
        </div>
        </>
    )

}