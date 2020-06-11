import React from 'react';
import './ReserveCompletePage.scss';
import {CloseComponent} from "../../shared/components/CloseComponent/CloseComponent";
import fenix from '../../shared/img/fenix@3x.png';

export function ReserveCompletePage() {

  return (
    <div className="justify-content-center p-3 complete">
      <CloseComponent/>
      <p className="complete__title">Reserva Completada</p>
      <img src={fenix} alt="fenix" className="complete__fenix"/>
      <p>codigo de reserva: <strong>QWERTY</strong></p>
      <h3>BE FREE!</h3>
      <p>Contacta ya con tu guardian y espera a que acepte tu reserva</p>
    </div>
  );
}