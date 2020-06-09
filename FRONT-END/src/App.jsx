import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LogoPage } from './pages/Logo-Page/Logo-Page';
import { WelcomePage } from './pages/Welcome-Page/Welcome-Page';
import { GetStartedPage } from './pages/GetStarted-Page/GetStarted-Page';
import {PricesPage} from "./pages/Prices-Page/Prices-Page";

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/getstarted">
          <GetStartedPage/>
        </Route>
        <Route path="/welcome">
          <WelcomePage/>
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
