import React, { Component } from 'react'

export class Info extends Component {
  render() {
    return (
      <div>
        this is info.
        id: {this.props.match.params.id}
      </div>
    )
  }
}

export default Info
