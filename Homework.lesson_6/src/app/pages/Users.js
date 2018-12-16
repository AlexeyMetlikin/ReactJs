import React from 'react'
import UsersList from '../components/UsersList'
import {getUsers, addUser} from '../actions/userActions'
import UserStore from '../stores/UserStore'
import Input from '../components/Input'

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.onUsersChange = this.onUsersChange.bind(this);
    this.newUser = this.newUser.bind(this);
    this.getUsersList = this.getUsersList.bind(this);
    this.getAddUserForm = this.getAddUserForm.bind(this);
  }

  newUser() {
    var username = this.refs.username.getValue();
    var name = this.refs.name.getValue();
    var email = this.refs.email.getValue();
    var phone = this.refs.phone.getValue();
    var website = this.refs.website.getValue();
    addUser(username, name, email, phone, website);

    this.clearUserRefs();
  }

  clearUserRefs() {
    this.refs.username.clearValue();
    this.refs.name.clearValue();
    this.refs.email.clearValue();
    this.refs.phone.clearValue();
    this.refs.website.clearValue();
  }

  onUsersChange() {
    this.setState({
      users: UserStore.users
    });
  }

  componentDidMount() {
    getUsers();
    UserStore.on('change', this.onUsersChange);
  }

  componentWillUnmount() {
    UserStore.removeListener('change', this.onUsersChange);
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

  getUsersList() {
    return (
      <div>
        {this.getAddUserForm()}
        <UsersList users={this.state.users}/>
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
