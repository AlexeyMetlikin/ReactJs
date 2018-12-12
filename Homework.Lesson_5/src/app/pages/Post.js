import React from 'react'
import OnePost from '../components/Post'
import axios from 'axios'

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        post: null
    };

    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
    .then((response) => {
      this.setState({post: response.data});
    });
  }

  render() {
    return (
      <div>
        {this.state.post && <OnePost {...this.state.post} model="full"/>}
      </div>
    );
  }
}
