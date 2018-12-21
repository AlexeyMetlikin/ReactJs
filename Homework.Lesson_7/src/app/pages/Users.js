import React from 'react'
import {connect} from 'react-redux';
import {addUser, fetchUsers} from '../actions/usersActions'

import UsersList from '../components/UsersList'
import Input from '../components/Input'

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.newUser = this.newUser.bind(this);
    this.getAddUserForm = this.getAddUserForm.bind(this);
  }

  newUser() {
    const userData = {};
    Object.keys(this.refs).forEach(key => {
      userData[key] = this.refs[key].getValue();
    });
    const {username,
      name,
      email,
      phone,
      website} = userData;
    if(username && name && email && phone && website) {
      this.props.dispatch(addUser(username, name, email, phone, website));
      this.clearUserRefs();
    }
    else {
      alert('Заполните все поля для добавления пользователя');
    }
  }

  clearUserRefs() {
    Object.keys(this.refs).forEach(key => {
      this.refs[key].clearValue();
    });
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  getUsersList() {
    return (
      <div>
        {this.getAddUserForm()}
        <UsersList users={this.props.users} />
      </div>
    );
  }

  getAddUserForm() {
    return (
      <div>
          <div className="form-group">
            <Input type="text" className="form-control" placeholder="Enter Username" ref="username" />
          </div>
          <div className="form-group">
            <Input type="text" className="form-control" placeholder="Enter Name" ref="name" />
          </div>
          <div className="form-group">
            <Input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" ref="email"  />
          </div>
          <div className="form-group">
            <Input type="text" className="form-control" placeholder="Enter Phone" ref="phone"  />
          </div>
          <div className="form-group">
            <Input type="text" className="form-control" placeholder="Enter Website" ref="website"  />
          </div>
          <button className="btn btn-primary" onClick={this.newUser}>Добавить пользователя</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {
          (!this.props.children)
          ? this.getUsersList()
          : this.props.children
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.usersReducer.users,
    usersFetched: state.usersReducer.fetched
  };
}

export default connect(mapStateToProps)(Users);
