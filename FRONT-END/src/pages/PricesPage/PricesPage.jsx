import React, {useState} from "react";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import './PricesPage.scss'
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {useLocation} from "react-router-dom";

export function PricesPage() {

    // Funcion necesaria para hacer uso de queryParams
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();

    const [navigation, setNavigation] = useState({
        latitude: (query.get("latitude") ? query.get("latitude") : ""),
        longitude: (query.get("longitude") ? query.get("longitude") : ""),
        localization: (query.get("localization") ? query.get("localization") : ""),
        deliver: (query.get("deliver") ? query.get("deliver") : ""),
        removal: (query.get("removal") ? query.get("removal") : ""),
        pieces: (query.get("pieces") ? query.get("pieces") : ""),
        url: "home",
        useremail: (query.get("useremail") ? query.get("useremail") : ""),
        guardianemail: (query.get("guardianemail") ? query.get("guardianemail") : ""),
        title: (query.get("title") ? query.get("title") : ""),
        spacetitle: (query.get("spacetitle") ? query.get("spacetitle") : ""),
        discount: (query.get("discount") ? query.get("discount") : ""),
        preciosindiscount: (query.get("preciosindiscount") ? query.get("preciosindiscount") : "")
    });

    return(
      <div>
        <div className="p-prices">
            <ArrowBackComponent navigation={navigation}/>
            <div className="p-prices__container">
            <p className="b-title">Selecciona</p>
            <select className="b-select">
                <option value="europa">Europa</option>
                <option value="america">America</option>
            </select>
                <p className="b-title">Nuestras tarifas fijas</p>

                <div className="p-prices__item">
                    <p>24 Horas</p>
                    <p className="p-prices__price">6€</p>
                    <p>Por equipaje</p>
                </div>

                <div className="p-prices__adicional">
                    <p>Día adicional</p>
                    <p className="p-prices__price">4€</p>
                    <p>Por equipaje</p>
                </div>
            </div>
        </div>
        <NavComponent navigation={navigation}/>
      </div>
    )
}