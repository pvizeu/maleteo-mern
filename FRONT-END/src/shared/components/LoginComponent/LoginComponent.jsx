import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './LoginComponent.scss'
import {environment} from "../../../environments/environment";
import { useHistory } from "react-router-dom";
import {LoginContext} from "../../contexts/loginContext";


export function LoginComponent () {
    const [login, setLogin] = useContext(LoginContext);
    const [token,setToken] = useState("");
    let history = useHistory();

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => axios.get(environment.url+"token?email="+ data.email+"&password="+data.password)
        .then(res=>{ console.log(res.data)
            if (res.data.status==401){
                alert('Datos incorrectos')
            }else {
                setToken(res.data.token)
                setLogin(true)
                handleClick()
            }
        })

        function handleClick() {
            history.push("/home");
        }

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