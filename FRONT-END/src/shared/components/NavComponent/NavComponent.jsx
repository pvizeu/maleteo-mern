import React from "react";
import './NavComponent.scss'
import home from '../../img/inicio@3x.png';
import search from '../../img/buscar@3x.png';
import chat from '../../img/mensaje@3x.png';
import user from '../../img/usuario@3x.png'
import {Link} from "react-router-dom";

export const NavComponent=React.memo((props)=> {
  console.log("NAV COMPONENT ###",props.navigation);
    return(
        <div className="c-nav">
           <Link to={{pathname:"/home",state:props.navigation}}><img src={home} alt="/" className="c-nav__home"/></Link>
          <Link to={{pathname:"/search",state:props.navigation}}><img src={search} alt="/" className="c-nav__search"/></Link>
            <img src={chat} alt="/" className="c-nav__chat"/>
          <Link to={{pathname:"/login",state:props.navigation}}><img src={user} alt="/" className="c-nav__user"/></Link>
        </div>
    )
}
)