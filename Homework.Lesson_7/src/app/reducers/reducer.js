import {combineReducers} from 'redux'

import posts from './postsReducer'
import users from './usersReducer'
import user from './userReducer'

export default combineReducers({
  postsReducer: posts,
  usersReducer: users,
  userReducer: user
});
