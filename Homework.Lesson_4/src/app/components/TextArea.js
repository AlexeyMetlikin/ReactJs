import React from 'react'

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: props.placeholder,
      inputValue: "",
      className: props.className
    };
  }

	render() {
		return (
      <textarea className={this.state.className} value={this.state.inputValue}
        placeholder={this.state.placeholder} onChange={event => this.updateInputValue(event)}></textarea>
    );
	}

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  getValue() {
    return this.state.inputValue;
  }
}
