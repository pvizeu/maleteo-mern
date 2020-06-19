import React from "react";
import './ExperienceComponent.scss'

export function ExperienceComponent(props) {

    const exp = props.exp;

    return (
        <div className="c-experience">
            <p className="title-primary b-title">Experiencias</p>
            <div className="c-experience__container">
                {
                    exp.map( (exp, key) =>
                  <div key={key} className="c-experience__item">
                <div className="c-experience__container-img">
                    <img src={exp.photo} alt="/" className="c-experience__img" />
                </div>
                <p className="title-secondary">{exp.title}</p>
                <p className="text-secondary">{exp.text}</p>
                </div>
                 )}
            </div>

        </div>
    )
}