import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class main extends Component {
  render() {
    return (
      <div>
        this is main.
        <Link to="/main/a">嵌套路由</Link>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}

export default main
