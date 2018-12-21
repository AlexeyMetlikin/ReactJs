import React from 'react'

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <input type={this.props.type} value={this.state.value} placeholder={this.props.placeholder} className={this.props.className}
        onChange={event => this.onChange(event)}/>
    );
  }

  getValue() {
    return this.state.value;
  }

  clearValue() {
    this.setState({
      value: ''
    });
  }
}
