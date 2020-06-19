import React from 'react';
import './SwitchComponent.scss';

export function SwitchComponent(){
  return (
    <div className="switch">
      <span className={window.location.href === "http://localhost:3000/login" ? "switch__text switch__border" : "switch__text"}>Iniciar sesión</span>
      <span className={window.location.href === "http://localhost:3000/register" ? "switch__text switch__border" : "switch__text"}>Resgístrate</span>
    </div>
  );
}