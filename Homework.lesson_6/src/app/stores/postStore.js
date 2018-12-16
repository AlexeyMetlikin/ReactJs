import {ADD_POST, GET_POSTS} from '../constants/postConstants'
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class postStore extends EventEmitter {
  constructor() {
    super(...arguments);
    this.posts = [];
    this.getPosts = this.getPosts.bind(this);
    this.change = this.change.bind(this);
    this.addPost = this.addPost.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  getPosts(posts) {
    this.posts = posts;
    this.change();
  }

  change() {
    this.emit('change');
  }

  addPost(post) {
    this.posts.push(post);
    this.change();
  }

  handleActions(action) {
    switch (action.type) {
      case ADD_POST:
        this.addPost(action.data);
        break;

      case GET_POSTS:
        this.getPosts(action.data);
        break;
      default:
        break;
    }
  }
}

const store = new postStore;
dispatcher.register(store.handleActions);
export default store;
