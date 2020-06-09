import React from "react";
import {Nav} from "../../shared/components/Nav/Nav";
import './Prices.scss'

export function Prices() {

    return(
        <div className="p-prices">
        <div className="p-prices__container">
        <p className="title-primary">Selecciona</p>
            <div>
        <select className="p-prices__select">
            <option value="europa">Europa</option>
            <option value="america">America</option>
        </select>
            </div>

            <p className="title-primary">Nuestras Tarifas</p>

            <div className="p-prices__item">
                <p>24 Horas</p>
                <p className="p-prices__price">6$</p>
                <p>Por equipaje</p>
            </div>

            <div className="p-prices__adicional">
            <p>Día adicional</p>
                <p className="p-prices__price">4$</p>
                <p>Por equipaje</p>
            </div>
        </div>
            <Nav/>
        </div>
    )
}