import React, {useState, useContext} from 'react';
import { SailContext } from '../../shared/contexts/sailContext';

//llamada de parametros en el return de la aplicacion principal o sea ccuando pinta y devueve
export const GetLinkFromSail=(url)=>{
  const navega=useContext(SailContext);
  const aux=`/${url}/?
  latitude=${navega.latitude ?navega.latitude : ""}&
  longitude=${navega.longitude ?navega.longitude : ""}&
  localization=${navega.localization ?navega.localization : ""}&
  deliver=${navega.deliver ?navega.deliver : ""}&
  removal=${navega.removal ?navega.removal : ""}&
  pieces=${navega.pieces !== "" ?navega.pieces : ""}&
  useremail= ${navega.useremail ?navega.useremail : ""}&
  url=${navega.url !== "" ?navega.url : ""}&
  guardianemail=${navega.guardianemail !== "" ?navega.guardianemail : ""}&
  title=${navega.title !== "" ?navega.title : ""}&
  spacetitle=${navega.spacetitle !== "" ?navega.spacetitle : ""}&
  discount=${navega.discount !== "" ?navega.discount : ""}&
  preciosindiscount=${navega.preciosindiscount !== "" ?navega.preciosindiscount : ""}`
  return ({aux});
}
