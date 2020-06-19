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

function App() {

  const [login, setLogin] = useState(false);
  return (
    <Router>
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
    </Router>
  );
}

export default App;
