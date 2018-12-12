import React from 'react'
import PostsList from '../components/PostsList'
import axios from 'axios'

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  render() {
    return (
      <div>
      {
        (!this.props.children)
        ? <PostsList/>
        : this.props.children
      }
      </div>
    );
  }
}
