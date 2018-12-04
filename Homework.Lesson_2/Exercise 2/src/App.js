import React from 'react'
import ReactDOM from 'react-dom'
import { Developer } from  './developer'

class App extends React.Component {
	render() {
		var name = prompt('Введите свое имя', '');
		var developer = new Developer(name);
		let result;
		if(developer.name)
			result = `Здравствуйте, ${developer.name}`;
		else
			result = 'Здравствуйте. Вы забыли ввести свое имя';
		return <div><h1>{result}</h1></div>
	}
}

ReactDOM.render(<App/>, document.getElementById("root"));