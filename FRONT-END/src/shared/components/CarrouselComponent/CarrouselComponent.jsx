import React from 'react';
import './CarrouselComponent.scss'

export function CarrouselComponent(props) {
    
    const blogs = props.blogs;


    return(
        <div className="c-carrousel">
            <div className="c-carrousel__overflow">
                {blogs.map((blogs, key)=>
            <div key={key} className="c-carrousel__item">

                <div>
                    <img src={blogs.img} alt="/" className="c-carrousel__img"/>
                </div>
                <div>
                    <span>Nombre Guardian</span>
                </div>
            </div>
                )}
                <div className="final"></div>

            </div>
        </div>
    )
}