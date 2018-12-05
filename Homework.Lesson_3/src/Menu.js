import React from 'react'
import MenuItem from './MenuItem'

export default class Menu extends React.Component {
  render() {
    var menuItems = this.props.items.map((item, index) => {
      return <MenuItem key={index} href={item.href} title={item.title} />
    });
    return (
      <div>
        <h2>Главное меню</h2>
          <ul>
            {menuItems}
          </ul>
      </div>
    );
  }
}
