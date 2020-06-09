import React from "react";
import './NewsComponent.scss'

export function NewsComponent() {
    return(
        <div className="c-news">
            <div className="c-news__title">
                <h3>Novedades</h3>
            </div>
            <div className="c-news__overflow">
            <div className="c-news__item">
                <div>
                    <img src="https://media.nomadicmatt.com/2019/travelfreedom2.jpg" alt="/" className="c-news__img"/>
                </div>
            </div>
                    <div className="c-news__item">
                        <div>
                            <img src="https://image.freepik.com/free-photo/asian-man-life-jacket-hands-up-happy-travel-freedom-journey-lifestyle-concept_1428-1267.jpg" alt="/" className="c-news__img"/>
                        </div>

                    </div>
                <div className="final"></div>
            </div>
        </div>
    )
}