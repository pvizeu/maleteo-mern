import React from 'react';
import './LoginPage.scss';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {SwitchComponent} from "../../shared/components/SwitchComponent/SwitchComponent";

export function LoginPage() {

  return (
    <div>
      <ArrowBackComponent />
      <SwitchComponent className="switch"/>
    </div>
  );
}