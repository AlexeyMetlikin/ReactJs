import React from 'react'
import axios from 'axios'
import Comment from './Comment'

export default class Comments extends React.Component {
  render() {
    let comments = this.props.comments.map((comment, index) => {
      return <Comment key={index} {...comment} />;
    });

    return (
      <div>
        <h1>Комментарии</h1>
        {comments}
      </div>
    );
  }
}
