import React from 'react'

export default class ArticlesBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      text: props.text
    };
  }

	render() {
		return (
      <div className="article">
        <h2 className="article-title">
          {this.state.title}
        </h2>
        <p className="article-text">
          {this.state.text}
        </p>
        <hr/>
      </div>
    );
	}
}
