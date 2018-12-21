import React from 'react'
import UserProfile from '../components/User'
import {fetchUser} from '../actions/userActions'
import {connect} from 'react-redux';

class User extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.params.userId));
  }

  render() {
    return (
      <div>
        {this.props.user && <UserProfile {...this.props.user} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    userFetched: state.userReducer.fetched
  };
}

export default connect(mapStateToProps)(User);
