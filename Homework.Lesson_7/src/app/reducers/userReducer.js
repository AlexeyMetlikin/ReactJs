import {
  FETCH_USER,
  FETCH_USER_FULFIELD,
  FETCH_USER_REJECTED,
  FETCH_USER_PENDING
} from '../constants/userConstants'

export default function reducer(state={
  user: {},
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return {...state, fetching: true};

    case FETCH_USER_FULFIELD:
      return {...state, fetching: false, fetched: true, user: action.payload};

    case FETCH_USER_REJECTED:
      return {...state, fetching: false, error: action.payload};

    default:
      return state;
  }
}
