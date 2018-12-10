import React from 'react'
import '../styles/style.css'

export default class Header extends React.Component {

	render() {
    console.log('Header.render');
		return (
			<header className="header">
        <h1>Clean Blog</h1>
        <p className="header-text">A Blog Theme by Start Bootstrap</p>
      </header>
		);
	}

}
