import React from 'react'
import axios from 'axios'
import Post from './Post'

export default class PostsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };

    let getPostsUrl;
    if(this.props.userId)
      getPostsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${this.props.userId}`;
    else
      getPostsUrl = 'https://jsonplaceholder.typicode.com/posts/';

    axios.get(getPostsUrl).then((response) => {
      this.setState({posts: response.data});
    });
  }

  render() {
    if(!this.state.posts.length) {
      return null;
    }

    let posts = this.state.posts.map((post, index) => {
      return <Post key={index} {...post} />;
    });

    return (
      <div>
        <h1>Блог</h1>
        {posts}
      </div>
    );
  }
}
