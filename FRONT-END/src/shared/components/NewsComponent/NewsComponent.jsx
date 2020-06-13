import React from "react";
import './NewsComponent.scss'

export function NewsComponent(props) {

    const blogs = props.blogs;

    return(
        <div className="c-news">
            <div className="c-news__title">
                <h3>Novedades</h3>
            </div>
            <div className="c-news__overflow">
                {blogs.map((blogs, key)=>
            <div key={key} className="c-news__item">

                <div>
                    <img src={blogs.photo} alt="/" className="c-news__img"/>
                </div>
            </div>
                )}
                <div className="final"></div>

            </div>
        </div>
    )
}