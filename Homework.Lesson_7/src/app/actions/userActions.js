import axios from 'axios';
import {
  FETCH_USER,
  FETCH_USER_FULFIELD,
  FETCH_USER_REJECTED
} from '../constants/userConstants'

export function fetchUser(userId) {
  return function(dispatch) {
    dispatch({type: FETCH_USER});
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        dispatch({type: FETCH_USER_FULFIELD, payload: response.data});
      })
      .catch((response) => {
        dispatch({type: FETCH_USER_REJECTED, payload: err});
      });
  }
}
