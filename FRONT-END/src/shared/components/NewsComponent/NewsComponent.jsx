import React from "react";
import './NewsComponent.scss'

export function NewsComponent(props) {

    const blogs = props.blogs;

    return(
        <div className="c-news">
          <p className="b-title c-news__title">Novedades</p>

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