import {
  ADD_POST,
  GET_POSTS,
  FETCH_POSTS,
  FETCH_POSTS_FULFIELD,
  FETCH_POSTS_REJECTED
} from '../constants/postConstants'
import axios from 'axios'

export function fetchPosts() {
  return function(dispatch) {
    dispatch({type: FETCH_POSTS});

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        dispatch({type: FETCH_POSTS_FULFIELD, payload: response.data});
      })
      .catch(err => {
        dispatch({type: FETCH_POSTS_REJECTED, payload: err});
      });
  }
}

export function addPost(title, userId, body) {
  return {
    type: ADD_POST,
    payload: {title, userId, body}
  };
}
