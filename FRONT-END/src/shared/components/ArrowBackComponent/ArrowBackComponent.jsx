import React from "react";
import './ArrowBackComponent.scss'

export  const  ArrowBackComponent=React.memo((props)=> {

  console.log("ARROW BACK ####" , props.navigation,props.history.length);

    return(
        <div className="arrow-icon">
          <button onClick={(e)=>{console.log("historia");props.history.goBack();}} className="arrow-icon__button"><i className="fas fa-chevron-left"></i></button>
        </div>
    );
})