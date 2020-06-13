import React from 'react';
import google from '../../img/google.svg'
import facebook from '../../img/facebook.svg'
import './SocialMediaComponent.scss'

export function SocialMediaComponent() {

    return(
        <div className="c-sm">
            <div className="c-sm__container-facebook">
                <img className="c-sm__img" src={facebook} alt="/"/>
            <p>Facebook</p>
            </div>
            <div className="c-sm__container-google">
                <img src={google} alt="/" className="c-sm__img google" />
                <p>Google</p>
            </div>
        </div>
    )
}