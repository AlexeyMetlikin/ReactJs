import React from 'react'
import ReactDOM from 'react-dom'
import Header from './app/components/Header'
import Navigation from './app/components/Navigation'
import ArticlesBlock from './app/components/ArticlesBlock'

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('123');
		return (
			<div>
		   	<Navigation/>
				<Header/>
				<ArticlesBlock articles={this.articles}/>
			</div>
		);
	}

	componentDidMount() {
		setTimeout(() => alert('Привествуем Вас в нашем Блоге'), 200);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))
