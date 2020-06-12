import React from 'react';
import { CalendarComponent } from '../../shared/components/CalendarComponent/CalendarComponent';
import { ArrowBackComponent } from '../../shared/components/ArrowBackComponent/ArrowBackComponent';
import { NavComponent } from '../../shared/components/NavComponent/NavComponent';

export function CalendarPage() {

    return(
        <div>
        <ArrowBackComponent url={"/home"}/>
        <CalendarComponent/>
        <NavComponent/>
        </div>
    );
}