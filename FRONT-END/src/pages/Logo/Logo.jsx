import React from 'react';
import '../../styles/blocks/_background.blocks.scss'
import logoMaleteo from '../../shared/img/maleta@3x.png'
import textoMaleteo from '../../shared/img/maleteo@3x.png'
import './Logo.scss'


export function Logo () {

    return(
        <>
        <meta httpEquiv="refresh" content="1;URL=/paso1" />
            <div className="p-welcome">
                <img  src={logoMaleteo} alt="logo maleteo" className="p-welcome__img"/>
                <img src={textoMaleteo} alt="texto maleteo" className="p-welcome__texto"/>
            </div>
        </>
    )

}