import React from 'react'
import UsersList from '../components/UsersList'
import User from './User'

export default class Users extends React.Component {
  render() {
    return (
      <div>
      {
        (!this.props.children)
        ? <UsersList/>
        : this.props.children
      }
      </div>
    );
  }
}
