import React from 'react';
import world from "../../shared/img/world@3x.png";
import './GetStarted.scss'

export function GetStarted () {

    return(
        <div className="background-orange">
        <div className="p-welcome">
            <div className="p-welcome__container">
                <img src={world} alt="/" className="p-get-started__img" />
                <div className="p-welcome__text">
                    <p className="title-primary">El mismo precio en cualquier parte</p>
                </div>
                <div className="p-welcome__text">
                    <p className="text-secondary">Dispondrás de un precio fijo estés donde estés, sin importar el tamaño o el pesp.</p>
                </div>
                <div className="p-welcome__btn">
                    <a href="/"><button className="b-btn">Empezar Ya</button></a>
                    <a href="/prices" className="p-get-started__link"><p>Consulta precios</p></a>
                </div>
            </div>
        </div>
        </div>
    )

}