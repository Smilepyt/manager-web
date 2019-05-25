import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './home'
import Info from "./info";
import Topic from "./topic";
import Main from "./main";
import About from "./about";

export class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Home>
          <Switch>
            <Route path="/main" render={()=>
              <Main>
                <Route path="/main/a" component={Info}/>
              </Main>
            }/>
            <Route path="/topic" component={Topic}/>
            <Route path="/about" component={About}/>
          </Switch>
        </Home>
      </HashRouter>
    );
  }
}

export default Router;
