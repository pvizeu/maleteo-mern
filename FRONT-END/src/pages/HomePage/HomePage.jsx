import React from "react";
import {NewsComponent} from "../../shared/components/NewsComponent/NewsComponent";
import {ExperienceComponent} from "../../shared/components/ExprienceComponent/ExperienceComponent";
import {NavComponent} from "../../shared/components/NavComponent/NavComponent";

export function HomePage() {

    const exp = [{
        title : "Un pedazito de italia",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta lacus a vestibulum rhoncus. Nulla vehicula ligula eget mollis mattis. Duis pellentesque tincidunt feugiat ",
        img : "https://www.ef.com/sitecore/__/~/media/universal/pg/8x5/destination/IT_00_00_1.jpg",
    },{
        title : "Visita Barcelona",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta lacus a vestibulum rhoncus. Nulla vehicula ligula eget mollis mattis. Duis pellentesque tincidunt feugiat ",
        img : "https://gd-consejosdeespana.sfo2.cdn.digitaloceanspaces.com//2015/05/Sagrada-Familia-Barcelona.jpg",
    }]

    return(
        <div>
        <h1>Home</h1>
            <NewsComponent/>
            <ExperienceComponent exp={exp}/>
            <NavComponent/>
        </div>
    )
}