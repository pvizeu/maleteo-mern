import React from 'react';
import './ArrowForwardComponent.scss';
import {Link} from "react-router-dom";

export function ArrowForwardComponent(props){
  console.log("ARROW FORWARD", props.navigation);
  let localization = props.navigation.localization;
  let latitude = props.navigation.latitude;
  let longitude = props.navigation.longitude;
  let deliver = props.navigation.deliver;
  let removal = props.navigation.removal;
  let pieces = props.navigation.pieces;
  let useremail = props.navigation.useremail;
  let url = props.navigation.url;

  return(
    <div className="forward-icon">
    <Link to={`/${url}/?latitude=${latitude ? latitude : ""}&longitude=${longitude ? longitude : ""}&localization=${localization ? localization : ""}&deliver=${deliver ? deliver : ""}&removal=${removal ? removal : ""}&pieces=${pieces !== "" ? pieces : ""}&useremail= ${useremail ? useremail : ""}&url=${url ? url : ""}`} className="forward-icon__link"><i className="fas fa-arrow-circle-right"></i></Link>
    </div>
  )
}