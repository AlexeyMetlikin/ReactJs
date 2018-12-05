import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import Menu from './Menu'

class App extends React.Component
{
	render() {
		let menuItem = [
			{ href: "./index.html", title: "На главную"},
			{ href: "../Files/about.html", title: "О нас"},
			{ href: "../Files/cabinet.html", title: "Личный кабинет"},
			{ href: "../Files/help.html", title: "Помощь"}
		];
		return <div>
			<Login>Авторизация пользователя</Login>
			<Menu items={menuItem}/>
		</div>
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))
