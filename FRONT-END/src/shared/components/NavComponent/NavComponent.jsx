import React from "react";
import './NavComponent.scss'
import home from '../../img/inicio@3x.png';
import search from '../../img/buscar@3x.png';
import chat from '../../img/mensaje@3x.png';
import user from '../../img/usuario@3x.png'
import {Link} from "react-router-dom";

export function NavComponent(props) {

  console.log("NAV COMPONENT ###",props.navigation);

  let localization = props.navigation.localization;
  let latitude = props.navigation.latitude;
  let longitude = props.navigation.longitude;
  let deliver = props.navigation.deliver;
  let removal = props.navigation.removal;
  let pieces = props.navigation.pieces;
  let useremail = props.navigation.useremail;
  let url = props.navigation.url;
  let guardianemail = props.navigation.guardianemail;
  let title = props.navigation.title;
  let spacetitle = props.navigation.spacetitle;
  let discount = props.navigation.discount;
  let preciosindiscount = props.navigation.preciosindiscount;

    return(
        <div className="c-nav">
           <Link to={`/home/?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${localization ? localization : ""}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}&useremail= ${useremail ? useremail : ""}&url=${url !== "" ? url : ""}&guardianemail=${guardianemail !== "" ? guardianemail : ""}&title=${title !== "" ? title : ""}&spacetitle=${spacetitle !== "" ? spacetitle : ""}&discount=${discount !== "" ? discount : ""}&preciosindiscount=${preciosindiscount !== "" ? preciosindiscount : ""}`}><img src={home} alt="/" className="c-nav__home"/></Link>
          <Link to={`/search/?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${localization ? localization : ""}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}&useremail= ${useremail ? useremail : ""}&url=${url !== "" ? url : ""}&guardianemail=${guardianemail !== "" ? guardianemail : ""}&title=${title !== "" ? title : ""}&spacetitle=${spacetitle !== "" ? spacetitle : ""}&discount=${discount !== "" ? discount : ""}&preciosindiscount=${preciosindiscount !== "" ? preciosindiscount : ""}`}><img src={search} alt="/" className="c-nav__search"/></Link>
            <img src={chat} alt="/" className="c-nav__chat"/>
          <Link to={`/login/?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${localization ? localization : ""}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}&useremail= ${useremail ? useremail : ""}&url=${url !== "" ? url : ""}&guardianemail=${guardianemail !== "" ? guardianemail : ""}&title=${title !== "" ? title : ""}&spacetitle=${spacetitle !== "" ? spacetitle : ""}&discount=${discount !== "" ? discount : ""}&preciosindiscount=${preciosindiscount !== "" ? preciosindiscount : ""}`}><img src={user} alt="/" className="c-nav__user"/></Link>
        </div>
    )
}