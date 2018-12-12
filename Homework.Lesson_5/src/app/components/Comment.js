import React from 'react'
import axios from 'axios'
import {Link} from 'react-router'

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };

    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
    .then(response => {
      this.setState({post: response.data.title})
    });
  }

  getLinkToPost() {
    return (
      <Link to={`/posts/${this.props.postId}`}>
        {this.state.post}
      </Link>
    );
  }

  render() {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          {this.props.name}
        </div>
        <div className="card-body text-secondary">
          <p>{this.props.email}</p>
          <p>{this.props.body}</p>
          <p>Блог: {this.getLinkToPost()}</p>
        </div>
      </div>
    );
  }
}
