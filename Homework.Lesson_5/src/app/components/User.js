import React from 'react'
import {Link} from 'react-router'
import PostsList from './PostsList'
import CommentsList from './CommentsList'

export default class User extends React.Component {
  constructor(props) {
    super(props);
  }

  getPostsAndComments() {
    return (
      <div>
        <PostsList userId={this.props.id}/>
        <CommentsList userId={this.props.id}/>
      </div>
    );
  }

  render() {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/users/${this.props.id}`}>
            {this.props.username}
          </Link>
        </div>
        <div className="card-body text-secondary">
          <p>{this.props.name}</p>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
          <p>{this.props.website}</p>
        </div>
        {this.props.model === "full" && this.getPostsAndComments()}
      </div>
    );
  }
}
