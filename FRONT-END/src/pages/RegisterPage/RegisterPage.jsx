import React from 'react';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {SwitchComponent} from "../../shared/components/SwitchComponent/SwitchComponent";
import { SocialMediaComponent } from '../../shared/components/SocialMediaComponent/SocialMediaComponent';
import { RegisterComponent } from '../../shared/components/RegisterComponent/RegisterComponent';

export function RegisterPage() {

  return (
    <div>
      <ArrowBackComponent />
      <SwitchComponent className="switch"/>
      <h1 className="p-title">Inicia sesión ahora</h1>
      <SocialMediaComponent/>
      <div className="correo">
      <span className="p-subtitle">O utiliza tu correo electronico</span>
      </div>
      <RegisterComponent/>
    </div>
  );
}