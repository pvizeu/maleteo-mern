import React from "react";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import './PricesPage.scss'
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {Link} from "react-router-dom";

export function PricesPage() {

    return(
        <>
        <div className="p-prices">
            <Link to="/home"><ArrowBackComponent/></Link>
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
        </div>
    <NavComponent/>
    </>
    )
}