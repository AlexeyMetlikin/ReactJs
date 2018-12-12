import React from 'react'
import axios from 'axios'
import Comments from './Comments'

export default class CommentsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };

    let getPostUrl;
    if(this.props.postId)
      getPostUrl = `https://jsonplaceholder.typicode.com/comments?postId=${this.props.postId}`;
    else if(this.props.userId)
      getPostUrl = `https://jsonplaceholder.typicode.com/comments?userId=${this.props.userId}`;
    else
      getPostUrl = "https://jsonplaceholder.typicode.com/comments";

    axios.get(getPostUrl).then((response) => {
      this.setState({comments: response.data});
    });
  }

  render() {
    if(!this.state.comments.length) {
      return null;
    }
    return (
      <div>
        <Comments comments={this.state.comments}/>
      </div>
    );
  }
}
