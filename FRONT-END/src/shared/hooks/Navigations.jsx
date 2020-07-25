import React from 'react';
import {  useLocation,useHistory} from "react-router-dom";
const aux={
  latitude: "",
  longitude: "",
  localization:"",
  deliver: "",
  removal: "",
  pieces: 0,
  url:"",
  useremail: "",
  guardianemail:"",
  title: "",
  spacetitle: "",
  discount: "",
  preciosindiscount: 0
}
export const Navigations=(pagina)=>{
    
    let history=useHistory();
    let location=useLocation();
    console.log(`Navigation >>>>>>>>>>PAGINA ${pagina} >>>`,history.length);
    // console.log(JSON.stringify(location));
    // console.log("aux",aux);
    //console.log("state",location.state);
    let navigation ={...aux,...location.state};  //para que tenga los campos se pone aux
    console.log("navigation>>>>",navigation);
    return {history,location,navigation};
  }
