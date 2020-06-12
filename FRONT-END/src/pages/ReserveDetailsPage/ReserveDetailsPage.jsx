import React from 'react';
import './ReserveDetailsPage.scss';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";

export function ReserveDetailsPage() {

  return (
    <div className="details">
      <ArrowBackComponent />
      <h2 className="b-title details__title">Detalles de tu reserva</h2>
      <div className="details__first">
        <table >
          <tr className="details__information">
            <th>Llegada</th>
            <th>Recogida</th>
            <th>Equipaje</th>
          </tr>
          <tr className="details__information">
            <td>30 de Julio</td>
            <td>30 de Julio</td>
            <td>2 Equipajes</td>
          </tr>
        </table>
      </div>
      <hr className="details__hr"/>
      <div className="details__description">
        <div>
          <span className="details__text">Primeras 24 horas<br/> 6,00 x 2 equipajes</span>
          <span className="details__text">Gastos de gestión</span>
          <span className="details__text">Servicio asegurado<br/> hasta 1000€</span>
          <span className="details__text">Total</span>
        </div>

        <div className="details__prices">
          <span className="details__text">10 €</span>
          <span className="details__text">2 €</span>
          <span className="details__text">Gratis</span>
          <span className="details__text"><strong>12 €</strong></span>
        </div>
      </div>
      <button className="b-btn details__button">Reservar</button>
      <NavComponent/>
    </div>
  );
}