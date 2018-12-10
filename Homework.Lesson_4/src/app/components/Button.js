import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      action: props.action,
      text: props.text
    };
  }

	render() {
		return (
      <button className="button" onClick={this.state.action}>{this.state.text}</button>
    );
	}
}
