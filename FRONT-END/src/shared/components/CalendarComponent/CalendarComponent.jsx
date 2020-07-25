import React, { useState,useCallback } from 'react';
import { Calendar } from 'primereact/calendar'
import 'primeicons/primeicons.css';
import './CalendarComponent.scss'
import {Link, useLocation} from "react-router-dom";
import moment from "moment";
let es = {
  firstDayOfWeek: 1,
  dayNamesMin: ["", "", "", "", "", "", ""],
  monthNames: ["Enero de ", "Febrero de ", "Marzo de ", "Abril de ", "Mayo de ", "Junio de ", "Julio de ", "Agosto de ", "Septiembre de ", "Octubre de ", "Noviembre de ", "Diciembre de "],
  dateFormat: 'yyyy-mm-dd',
};


export function CalendarComponent({navigation}) {
    const [navega,SetNavega]=useState(navigation); //obligatorio para cambio de estado
    


    // Funcion necesaria para hacer uso de queryParams
    // function useQuery() {
    //   return new URLSearchParams(useLocation().search);
    // }
    // let query = useQuery();
    // let localization = query.get("localization");
    // let latitude = query.get("latitude");
    // let longitude = query.get("longitude");
    let today = new Date();


    const [date1, setDate1] = useState(today);
    const [date2, setDate2] = useState(null);
    const putDeliver=useCallback(
      (e) => {
        setDate1(e.value);
        SetNavega((previous)=>{return {...previous,...{deliver:moment(e.value).format("yyyy-MM-DD")}}});
        console.log("cambio de calendario deliver",navega,"date1",date1);
      },
      [navega,date1]
    );
    const putRemoval=useCallback((e) => {
        setDate2(e.value);
        SetNavega((previous)=>{return {...previous,...{removal:moment(e.value).format("yyyy-MM-DD")}}});
        console.log("cambio de calendario removal",navega,"date2",date2);
      },
      [navega,date2]
    );
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
        <Calendar locale={es} minDate={today} value={date1} onChange={(e) => putDeliver(e)} inline={true} showWeek={false} />
        <Calendar required={true} locale={es} minDate={date1} value={date2} onChange={(e) => putRemoval(e)} inline={true} showWeek={false} />
            </div>
        { date2 >= date1 ? <div className="btn-container">
          {console.log("antes de llamar a time",navega)}
          <Link to={{pathname:"/time",state:navega}}>
            <button className="b-btn">Continuar</button>
          </Link> </div> : null }

        </div>
    )
}