import React from 'react'
import {connect} from 'react-redux';
import {addPost, fetchPosts} from '../actions/postsActions'
import PostsList from '../components/PostsList'

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.newPost = this.newPost.bind(this);
  }

  newPost() {
    this.props.dispatch(addPost('Мой пост', 1, 'Текст нового поста'));    
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.newPost}>
          Добавить пост
        </button>
        <PostsList posts={this.props.posts}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postsReducer.posts,
    postsFetched: state.postsReducer.fetched,
  };
}

export default connect(mapStateToProps)(Posts);
