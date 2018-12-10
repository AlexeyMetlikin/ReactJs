import React from 'react'

export default class TextInput extends React.Component {
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
      <input className={this.state.className} type="text" value={this.state.inputValue} onChange={event => this.updateInputValue(event)} placeholder={this.state.placeholder}/>
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
