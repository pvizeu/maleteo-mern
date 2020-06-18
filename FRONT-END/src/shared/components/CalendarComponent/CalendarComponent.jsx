import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar'
import 'primeicons/primeicons.css';
import './CalendarComponent.scss'
import {Link, useLocation} from "react-router-dom";
import moment from "moment";

export function CalendarComponent() {
    // Funcion necesaria para hacer uso de queryParams
    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let localization = query.get("localization");
    let latitude = query.get("latitude");
    let longitude = query.get("longitude");
    let today = new Date();

    let es = {
        firstDayOfWeek: 1,
        dayNamesMin: ["", "", "", "", "", "", ""],
        monthNames: ["Enero de ", "Febrero de ", "Marzo de ", "Abril de ", "Mayo de ", "Junio de ", "Julio de ", "Agosto de ", "Septiembre de ", "Octubre de ", "Noviembre de ", "Diciembre de "],
        dateFormat: 'yyyy-mm-dd',
    };

    const [date1, setDate1] = useState(today);
    const [date2, setDate2] = useState(null);

    return(
        <div>
            <div className="week">
            <p>Lun</p>
            <p>Mar</p>
            <p>Mier</p>
            <p>Jue</p>
            <p>Vie</p>
            <p>Sab</p>
            <p>Dom</p>
            </div>
            <div className={ date2 >= date1 ? "calendar-container" : null}>
        <Calendar locale={es} minDate={today} value={date1} onChange={(e) => setDate1(e.value)} inline={true} showWeek={false} />
        <Calendar required={true} locale={es} minDate={date1} value={date2} onChange={(e) => setDate2(e.value)} inline={true} showWeek={false} />
            </div>
        { date2 >= date1 ? <div className="btn-container">
          <Link to={`/time/?latitude=${latitude}&longitude=${longitude}&localization=${localization}&deliver=${moment(date1).format("yyyy-MM-DD")}&removal=${moment(date2).format("yyyy-MM-DD")}`}>
            <button className="b-btn">Continuar</button>
          </Link> </div> : null }

        </div>
    )
}