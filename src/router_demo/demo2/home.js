import React, { Component } from "react";
import { Link } from "react-router-dom";
export class home extends Component {
  render() {
    return (
      <div>
          <ul>
            <li>
              <Link to="/main">Main</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topic">Topic</Link>
            </li>
          </ul>
          <hr/>
          {this.props.children}
        </div>
    );
  }
}

export default home;
