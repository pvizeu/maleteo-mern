import React from 'react';
import './TimePage.scss';
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {ArrowForwardComponent} from "../../shared/components/ArrowForwardComponent/ArrowForwardComponent";

export function TimePage(){
  const hour = 0;
  const min = 30;
  let time = [];
  let num = [];

  for (let i = 0 ; i < 24 ; i++){
    time.push(((hour + i) < 10 ? "0" + (hour + i) : (hour + i)) + ":0" + hour);
    time.push(((hour + i) < 10 ? "0" + (hour + i) : (hour + i)) + ":" + min);
  }


  for (let i = 0 ; i < 100 ; i++){
    num.push(i);
  }


  return(
    <div>
      <ArrowBackComponent />
      <div className="time">
        <div>
          <span className="b-title time__element">Deposito</span>
          <select className="b-select time__element time__border-orange">
            {time.map((item, index)=> <option key={index}>{item}</option>)}
          </select>
        </div>
        <div>
          <span className="b-title time__element">Retirada</span>
          <select className="b-select time__element time__border-blue">
            {time.map((item, index)=> <option key={index}>{item}</option>)}
          </select>
        </div>
      </div>
      <div className="time__num">
        <span className="b-title ">Numero de equipaje</span>
        <select className="b-select time__select">
          {num.map((item, index) => <option key={index}>{item}</option>)}
        </select>
      </div>
      <ArrowForwardComponent url={"/home"}/>
      <NavComponent />
    </div>
  );
}