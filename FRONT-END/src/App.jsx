import React, {useState} from 'react';
import './App.scss';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import { LogoPage } from './pages/LogoPage/LogoPage';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { GetStartedPage } from './pages/GetStartedPage/GetStartedPage';
import {PricesPage} from "./pages/PricesPage/PricesPage";
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
import {useLocation} from "react-router-dom";
//import {sailDefinitions} from "./shared/contexts/sailDefinitions";
import {SailContext} from "./shared/contexts/sailContext";

function App() {
// Funcion necesaria para hacer uso de queryParams
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
let query = useQuery();

const [navigation, setNavigation] = useState({
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
});

  const [login, setLogin] = useState(false);
  return (
    <Router>
      <SailContext.Provider value={navigation}>
      <LoginContext.Provider value={[login,setLogin]}>
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
            // login ? (
                <ReserveDetailsPage/>
            // ) : (
            //     <LoginPage/>
            // )
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
      </LoginContext.Provider>
      </SailContext.Provider>
    </Router>
  );
}

export default App;
