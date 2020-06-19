import React from 'react';
import { useForm } from "react-hook-form";
import './LoginComponent.scss'


export function LoginComponent (props) {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data)

    return(
        <div className="c-login">
            <form onSubmit={handleSubmit(onSubmit)} className="c-login__form" >
            <label className="c-login__label" htmlFor="email">
                    <span className="b-subtitle">Direccion de correo electronico</span>

                    <input className="c-login__input" name="email" id="email"
                           ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                    {errors.email && <span>Email is required</span>}
                </label>
                <label className="c-login__label" htmlFor="password">
                    <span className="b-subtitle">Contraseña</span>

                    <input className="c-login__input" name="password" id="password" type='password'
                           ref={register({ required: true})}/>
                    {errors.password && <span>Password is required</span>}
                </label>
                <div className="c-login__btn">
                <button className="b-btn">Inicia sesión</button>
                </div>
            </form>
        </div>
    )
}