import React from 'react';
import "./Menu.css"

function Menu(props) {
  const { visibleMenu } = props;

  return (
    <div className='menu-container'>
      <div className='menu-photo'><h1>PHOTO</h1></div>
      <div className='menu-content'>
        <div className='menu-info'>
          <h1>Menu</h1>
        </div>
      </div>
    </div>
  );
}

export default Menu;