import {
  ADD_USER,
  FETCH_USERS,
  FETCH_USERS_FULFIELD,
  FETCH_USERS_REJECTED,
  FETCH_USERS_PENDING
} from '../constants/userConstants'

export default function reducer(state={
  users: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {...state, fetching: true};

    case FETCH_USERS_FULFIELD:
      return {...state, fetching: false, fetched: true, users: action.payload};

    case FETCH_USERS_REJECTED:
      return {...state, fetching: false, error: action.payload};

    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users]
      };

    default:
      return state;
  }
}
