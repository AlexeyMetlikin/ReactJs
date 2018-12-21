import axios from 'axios';
import {
  ADD_USER,
  GET_USERS,
  FETCH_USERS,
  FETCH_USERS_FULFIELD,
  FETCH_USERS_REJECTED
} from '../constants/userConstants'

export function addUser(username, name, email, phone, website) {
  return {
    type: ADD_USER,
    payload: {username, name, email, phone, website}
  };
}

export function fetchUsers() {
  return function(dispatch) {
    dispatch({type: FETCH_USERS});

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      dispatch({type: FETCH_USERS_FULFIELD, payload: response.data});
    })
    .catch(err => {
      dispatch({type: FETCH_USERS_REJECTED, payload: err});
    });
  }
}
