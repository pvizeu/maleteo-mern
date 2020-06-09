import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Logo } from './pages/Logo/Logo';
import { Welcome } from './pages/Welcome/Welcome';
import { GetStarted } from './pages/GetStarted/GetStarted';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/getstarted">
          <GetStarted/>
        </Route>
        <Route path="/welcome">
          <Welcome/>
        </Route>
        <Route path="/">
          <Logo/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
