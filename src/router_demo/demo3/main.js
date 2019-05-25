import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class main extends Component {
  render() {
    return (
      <div>
        this is main.
        <Link to="/main/123">嵌套路由1</Link>
        <Link to="/main/456">嵌套路由2</Link>
        <Link to="/main/abc">嵌套路由3</Link>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}

export default main
