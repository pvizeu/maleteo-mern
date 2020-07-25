import React from 'react';
import './ArrowForwardComponent.scss';
import {Link} from "react-router-dom";
export const  ArrowForwardComponent= React.memo(({pagina,navigation})=>{
  console.log("ARROW FORWARD",pagina,">>>>", navigation);

  return(
    <div className="forward-icon">
    <Link to={{pathname:pagina,state:navigation}} className="forward-icon__link"><i className="fas fa-arrow-circle-right"></i></Link>
    </div>
  )
}
)

