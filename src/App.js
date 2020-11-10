import React, { Component } from 'react';

import { Route, BrowseRouter as Router, Switch} from "react-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Quote from "./components/Quote";
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
              <Route exact path="/quote" component={Quote} />
              <Route component={ErrorPage} /> 
          </Switch>
        </div>
      </Router>
    );
  }
}