import React from 'react';
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
    let localization = query.get("localization");
    let latitude = query.get("latitude");
    let longitude = query.get("longitude");
    let deliver = query.get("deliver");
    let removal = query.get("removal");
    let pieces = query.get("pieces");
    return(
        <div>
        <ArrowBackComponent url={`/home?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${localization ? localization : ""}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}`}/>
        <CalendarComponent/>
        <NavComponent/>
        </div>
    );
}