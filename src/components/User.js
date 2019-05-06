import React, { Component } from 'react'
import PropsTypes from 'prop-types'

export class User extends Component {
  render() {
    const { name } = this.props
    return (
      <div>
        <p>Привет, {name} </p>
      </div>
    )
  }
}

User.propTypes = {
  name: PropsTypes.string.isRequired,
}
