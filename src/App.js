import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import NoMatch from "./components/nomatch";
import LandingPage from "./pages/landing"
import SignIn from "./pages/signin"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={LandingPage} />
        <Route exact path="/signin" component={SignIn} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
