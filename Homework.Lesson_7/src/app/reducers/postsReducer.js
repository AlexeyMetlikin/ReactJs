import {
  ADD_POST,
  FETCH_POSTS_FULFIELD,
  FETCH_POSTS_REJECTED,
  FETCH_POSTS_PENDING
} from '../constants/postConstants'

export default function reducer(state={
  posts: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return {...state, fetching: true};

    case FETCH_POSTS_FULFIELD:
      return {...state, fetching: false, fetched: true, posts: action.payload};

    case FETCH_POSTS_REJECTED:
      return {...state, fetching: false, error: action.payload};

    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };

    default:
      return state;
  }
}
