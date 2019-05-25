import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import About from "./about";
import Topic from "./topic";
import Main from "./main";

export class home extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topic">Topic</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/topic" component={Topic} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default home;
