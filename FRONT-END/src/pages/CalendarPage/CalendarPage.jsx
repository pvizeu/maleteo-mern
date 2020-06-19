import React, {useState} from "react";
import { CalendarComponent } from '../../shared/components/CalendarComponent/CalendarComponent';
import { ArrowBackComponent } from '../../shared/components/ArrowBackComponent/ArrowBackComponent';
import { NavComponent } from '../../shared/components/NavComponent/NavComponent';
import {useLocation} from "react-router-dom";

export function CalendarPage() {

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
        <ArrowBackComponent navigation={navigation}/>
        <CalendarComponent/>
        <NavComponent navigation={navigation}/>
        </div>
    );
}