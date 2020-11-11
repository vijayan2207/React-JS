import React, { Component } from 'react';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Quote from "./components/Quote";
import QuoteComplete from "./components/QuoteComplete";
import ErrorPage from "./components/ErrorPage";

export default class App extends Component {
  render() {
    return (
      <Router>     
        <div>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/quote" component={Quote} />
              <Route exact path="/quotecomplete" component={QuoteComplete} />
              <Route component={ErrorPage} /> 
          </Switch>
        </div>
      </Router>
    );
  }
}