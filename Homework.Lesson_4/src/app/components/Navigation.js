import React from 'react'
import Menu from './Menu'
import '../styles/style.css'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {href: "./index.html", title: "HOME"},
        {href: "./index.html", title: "ABOUT"},
        {href: "./index.html", title: "SAMPLE POST"},
        {href: "./index.html", title: "CONTACTS"},
      ]
    };
  }

	render() {
    console.log('Header.render');
		return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  			<div className="container">
          <a className="nav-header" href="./index.html">BLOG</a>
    			<Menu menuItems={this.state.menuItems}/>
        </div>
      </nav>
		);
	}
}
