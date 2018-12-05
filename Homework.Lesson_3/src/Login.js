import React from 'react'

export default class Login extends React.Component {
  render() {
    return (
      <div>
  			<h2>{this.props.children}</h2>
        <input placeholder='Введите логин'></input>
        <br/>
        <input type='password' placeholder='Введите пароль'></input>
        <br/>
        <input type='button' value='Войти'/>
      </div>
    );
  }
}
