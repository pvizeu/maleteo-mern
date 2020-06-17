import React from 'react';
import axios from 'axios';
import {environment} from "../../../environments/environment";
import { useForm } from "react-hook-form";
import './RegisterComponent.scss'


export function RegisterComponent () {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        const date = new Date(data.date);
        const today = new Date();
        let edad = today.getFullYear() - date.getFullYear();
        let m = today.getMonth() - date.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
            edad--;
        }
        if(edad >= 18){
            console.log("se mandan los datos");
            console.log(data)
             axios.post(environment.url+'new',data).then(res=>console.log('respuestaa',data));
        }else{
            alert ("menor")
        }
    }

    return(
        <div className="c-register">
            <form onSubmit={handleSubmit(onSubmit)}>
            <label className="c-register__label" htmlFor="email" >
                    <span className="b-text-label ">Direccion de correo electronico</span>

                    <input className="c-register__input" name="email" id="email"
                           ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                    {errors.email && <span>Este campo es requerido</span>}
                </label >
                <label className="c-register__label" htmlFor="name">
                    <span className="b-text-label ">Nombre</span>

                    <input className="c-register__input" name="name" id="name"
                           ref={register({ required: true})}/>
                    {errors.email && <span>Este campo es requerido</span>}
                </label >
                <label className="c-register__label" htmlFor="LastName">
                    <span className="b-text-label">Apellido</span>

                    <input className="c-register__input" name="surname" id="lastName"
                           ref={register({ required: true})}/>
                    {errors.email && <span>Este campo es requerido</span>}
                </label >
                <label className="c-register__label" htmlFor="password">
                    <span className="b-text-label ">Contraseña</span>

                    <input className="c-register__input" name="password" id="password" type='password'
                           ref={register({ required: true})}/>
                    {errors.email && <span>Este campo es requerido</span>}
                </label >
                <label className="c-register__label" htmlFor="date">
                    <span className="b-text-label ">Contraseña</span>

                    <input className="c-register__input" name="date" id="date" type='date'
                           ref={register({ required: true})}/>
                    {errors.email && <span>Este campo es requerido</span>}
                </label >
                <button className="b-btn">Resgistrarse</button>

            </form>
        </div>
    )
}