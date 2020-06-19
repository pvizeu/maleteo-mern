import React from "react";
import './ArrowBackComponent.scss'
import {Link} from "react-router-dom";

export  function ArrowBackComponent(props) {

  console.log("ARROW BACK ####" , props.navigation);

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
        <div className="arrow-icon">
          <Link to={`/${url}/?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${localization ? localization : ""}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}&useremail= ${useremail ? useremail : ""}&url=${url !== "" ? url : ""}&guardianemail=${guardianemail !== "" ? guardianemail : ""}&title=${title !== "" ? title : ""}&spacetitle=${spacetitle !== "" ? spacetitle : ""}&discount=${discount !== "" ? discount : ""}&preciosindiscount=${preciosindiscount !== "" ? preciosindiscount : ""}`} className="arrow-icon__link"><i className="fas fa-chevron-left"></i></Link>
        </div>
    );
}