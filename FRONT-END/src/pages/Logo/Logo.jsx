import React from 'react';
import '../../styles/blocks/_background.blocks.scss'
import logoMaleteo from '../../shared/img/maleta@3x.png'
import textoMaleteo from '../../shared/img/maleteo@3x.png'
import './Logo.scss'


export function Logo () {

    return(
        <>
        <meta httpEquiv="refresh" content="1;URL=/paso1" />
            <div className="p-logo">
                <img  src={logoMaleteo} alt="logo maleteo" className="p-logo__img"/>
                <img src={textoMaleteo} alt="texto maleteo" className="p-logo__texto"/>
            </div>
        </>
    )

}