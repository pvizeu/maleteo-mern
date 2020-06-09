import React from "react";
import {NewsComponent} from "../../shared/components/NewsComponent/NewsComponent";
import {ExperienceComponent} from "../../shared/components/ExprienceComponent/ExperienceComponent";
import {NavComponent} from "../../shared/components/Nav-Component/Nav-Component";

export function HomePage() {

    return(
        <div>
        <h1>Home</h1>
            <NewsComponent/>
            <ExperienceComponent/>
            <NavComponent/>
        </div>
    )
}