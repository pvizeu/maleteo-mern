import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LogoPage } from './pages/LogoPage/LogoPage';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { GetStartedPage } from './pages/GetStartedPage/GetStartedPage';
import {PricesPage} from "./pages/PricesPage/PricesPage";
import {HomePage} from "./pages/HomePage/HomePage";
import {SearchPage} from "./pages/SearchPage/SearchPage";
import {LocationPage} from "./pages/LocationPage/LocationPage";
import {ReserveDetailsPage} from "./pages/ReserveDetailsPage/ReserveDetailsPage";
import {ReserveCompletePage} from "./pages/ReserveCompletePage/ReserveCompletePage";
import {GuardianConfirmationPage} from "./pages/GuardianConfirmationPage/GuardianConfirmationPage";
import { CalendarPage } from './pages/CalendarPage/CalendarPage';
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";
import {TimePage} from "./pages/TimePage/TimePage";

function App() {
  return (
    <Router>

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
        <Route path="/search/:x/:y">
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
        <Route path="/details">
          <ReserveDetailsPage/>
        </Route>
        <Route path="/complete">
          <ReserveCompletePage/>
        </Route>
        <Route path="/confirmation">
          <GuardianConfirmationPage/>
        </Route>
        <Route path="/location/:id">
          <LocationPage/>
        </Route>
        <Route path="/prices">
          <PricesPage/>
        </Route>
        <Route path="/">
          <LogoPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
