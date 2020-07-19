import React, {useState,useCallback} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import {useLocation} from "react-router-dom";
import { LogoPage } from './pages/LogoPage/LogoPage';
//import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { GetStartedPage } from './pages/GetStartedPage/GetStartedPage';
import {PricesPage} from "./pages/PricesPage/PricesPage";
import { useEffect } from 'react';
import {WelcomePage} from "./pages/WelcomePage/WelcomePage";
import {HomePage} from "./pages/HomePage/HomePage";
import {SearchPage} from "./pages/SearchPage/SearchPage";
import {ReserveDetailsPage} from "./pages/ReserveDetailsPage/ReserveDetailsPage";
import {ReserveCompletePage} from "./pages/ReserveCompletePage/ReserveCompletePage";
import {GuardianConfirmationPage} from "./pages/GuardianConfirmationPage/GuardianConfirmationPage";
import { CalendarPage } from './pages/CalendarPage/CalendarPage';
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";
import {TimePage} from "./pages/TimePage/TimePage";
import {SpaceDetailsPage} from "./pages/SpaceDetailsPage/SpaceDetailsPage";
import {LoginContext} from "./shared/contexts/loginContext";
import {sailDefinitions} from "./shared/contexts/sailDefinitions";
import {SailContext} from "./shared/contexts/sailContext";
import {GetSailFromLocation}from "./shared/hooks/GetSailFromLocation"




export default function App() {
  const [navigation, setNavigation] = useState({})
  console.log("navigation app arranque",navigation);
  const [login, setLogin] = useState(false);
  //setNavigation(useAsyncParametros(navigation));
  //console.log("aux en app",aux);

  // const devolucion=useCallback((datos)=>setNavigation(datos),[navigation]);
      
    // <SailContext.Provider value={navigation,}>
    // <LoginContext.Provider value={[login,setLogin]}>
  return(

    <Switch>
    <Route path="/calendar">
        <CalendarPage/>
      </Route>
      <Route path="/home">
        <HomePage/>
      </Route>
      <Route path="/getstarted">
        <GetStartedPage/>
      </Route>
      <Route path="/welcome">
        <WelcomePage/>
      </Route>
      <Route path="/search">
        <SearchPage/>
      </Route>
      <Route path="/time">
        <TimePage />
      </Route>
      <Route path="/login">
        <LoginPage/>
      </Route>
      <Route path="/register">
        <RegisterPage/>
      </Route>
      <Route exact path="/details" render={() => (
          login ? (
              <ReserveDetailsPage/>
          ) : (
              <LoginPage/>
          )
      )}/>

      <Route path="/complete">
        <ReserveCompletePage/>
      </Route>
      <Route path="/confirmation">
        <GuardianConfirmationPage/>
      </Route>
      <Route path="/location/">
        <SpaceDetailsPage/>
      </Route>
      <Route path="/prices">
        <PricesPage/>
      </Route>
      <Route path="/">
        <LogoPage/>
      </Route>
    </Switch>
  )
}

//llamada de parametros en el return de la aplicacion principal o sea ccuando pinta y devueve
const Parametros=({sail, onNavigation})=>{
  const [navigation, setNavigation] = useState({})
  let query = new URLSearchParams(useLocation().search);
  useEffect(()=>{
    console.log("sail en parametros",sail);
    const aux={
      latitude: (query.get("latitude") ? query.get("latitude") : ""),
      longitude: (query.get("longitude") ? query.get("longitude") : ""),
      localization: (query.get("localization") ? query.get("localization") : ""),
      deliver: (query.get("deliver") ? query.get("deliver") : ""),
      removal: (query.get("removal") ? query.get("removal") : ""),
      pieces: (query.get("pieces") ? query.get("pieces") : ""),
      url: (query.get("url") ? query.get("url") : ""),
      useremail: (query.get("useremail") ? query.get("useremail") : ""),
      guardianemail: (query.get("guardianemail") ? query.get("guardianemail") : ""),
      title: (query.get("title") ? query.get("title") : ""),
      spacetitle: (query.get("spacetitle") ? query.get("spacetitle") : ""),
      discount: (query.get("discount") ? query.get("discount") : ""),
      preciosindiscount: (query.get("preciosindiscount") ? query.get("preciosindiscount") : "")
    }
    setNavigation(aux);
    console.log("aux en paramtros",aux);
    onNavigation(aux);

  },[])
  
  return(
    <div>
    </div>
  )
}
//datos de navegacion para evitar repetir
function useAsyncParametros(sail){
  const [navigation, setNavigation] = useState({})
  const error=false;
  useEffect(()=>{
      // eslint-disable-next-line react-hooks/rules-of-hooks
      let query = new URLSearchParams(useLocation().search);
      const navegacion={
          latitude: (query.get("latitude") ? query.get("latitude") : ""),
          longitude: (query.get("longitude") ? query.get("longitude") : ""),
          localization: (query.get("localization") ? query.get("localization") : ""),
          deliver: (query.get("deliver") ? query.get("deliver") : ""),
          removal: (query.get("removal") ? query.get("removal") : ""),
          pieces: (query.get("pieces") ? query.get("pieces") : ""),
          url: "search",
          useremail: (query.get("useremail") ? query.get("useremail") : ""),
          guardianemail: (query.get("guardianemail") ? query.get("guardianemail") : ""),
          title: (query.get("title") ? query.get("title") : ""),
          spacetitle: (query.get("spacetitle") ? query.get("spacetitle") : ""),
          discount: (query.get("discount") ? query.get("discount") : ""),
          preciosindiscount: (query.get("preciosindiscount") ? query.get("preciosindiscount") : "")
      }
      setNavigation(navegacion);
      console.log("valor de navigation en useAsyncParamtros",navigation)
  },[navigation,sail]);
  return navigation;
}
