import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar'
import 'primeicons/primeicons.css';
import './CalendarComponent.scss'
import {Link} from "react-router-dom";
//import 'primereact/resources/themes/nova-light/theme.css';



export function CalendarComponent() {

    let today = new Date();

    let es = {
        firstDayOfWeek: 1,
        dayNamesMin: ["", "", "", "", "", "", ""],
        monthNames: ["Enero de ", "Febrero de ", "Marzo de ", "Abril de ", "Mayo de ", "Junio de ", "Julio de ", "Agosto de ", "Septiembre de ", "Octubre de ", "Noviembre de ", "Diciembre de "],
        dateFormat: 'dd/mm/yy',
    };

    const [date1, setDate1] = useState(today);
    const [date2, setDate2] = useState(null);
    console.log(date1);
    console.log(date2);
    
    

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
        { date2 >= date1 ? <div className="btn-container"><Link to={"/time"}>
          <button className="b-btn">Continuar</button>
        </Link> </div> : null }

        </div>
    )
}