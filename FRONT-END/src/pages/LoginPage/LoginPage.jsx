import React from 'react';
import './LoginPage.scss';
import {ArrowBackComponent} from "../../shared/components/ArrowBackComponent/ArrowBackComponent";
import {SwitchComponent} from "../../shared/components/SwitchComponent/SwitchComponent";
import { LoginComponent } from '../../shared/components/LoginComponent/LoginComponent';
import { SocialMediaComponent } from '../../shared/components/SocialMediaComponent/SocialMediaComponent';

export function LoginPage() {

  return (
    <div>
      <ArrowBackComponent />
      <SwitchComponent className="switch"/>
      <h1 className="p-title">Inicia sesión ahora</h1>
      <SocialMediaComponent/>
      <div className="correo">
      <span className="p-subtitle">O utiliza tu correo electronico</span>
      </div>
      <LoginComponent/>
    </div>
  );
}