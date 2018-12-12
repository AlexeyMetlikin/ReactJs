import React from 'react'
import axios from 'axios'
import User from './User'
import Comments from './Comments'
import {Link} from 'react-router'

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: null,
      comments: []
    };

    if(this.props.model === "full") {
      axios.get(`https://jsonplaceholder.typicode.com/users?id=${this.props.userId}`)
      .then(userResponse => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}/comments`)
        .then(commentsResponse => {
          this.setState({
            comments: commentsResponse.data,
            owner: userResponse.data[0]
          });
        });
      });
    }
  }

  getComments() {
    return (
      <div>
        <Comments comments={this.state.comments}/>
      </div>
    );
  }

  getPostOwner() {
    return (
      <div>
        <h1>Владелец</h1>
        <User {...this.state.owner}/>
      </div>
    );
  }

  render() {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/posts/${this.props.id}`}>
            {this.props.title}
          </Link>
        </div>
        <div className="card-body text-secondary">
          <p>{this.props.body}</p>
        </div>
        {this.state.owner && this.getPostOwner()}
        {this.state.comments.length > 0 ? this.getComments() : null}
      </div>
    );
  }
}
