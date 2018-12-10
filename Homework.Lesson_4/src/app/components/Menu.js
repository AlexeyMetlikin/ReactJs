import React from 'react'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: props.menuItems
    };
  }
	render() {
    let menuItems = this.getMenuItems();
		return (
      <div className="collapse navbar-collapse">
			  <ul className="navbar-nav ml-auto">
          {menuItems}
        </ul>
      </div>
    );
	}

  getMenuItems() {
    let menuItems = this.state.menuItems.map((menuItem, index) => {
      return (
        <li key={index} className="nav-item">
          <a className="nav-link" href={menuItem.href}>{menuItem.title}</a>
        </li>
      );
    });
    return menuItems;
  }
}
