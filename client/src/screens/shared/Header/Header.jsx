import React from 'react';
import "./Header.css"

function Header(props) {
  const { visibleTitle } = props
  return (
    <div className='header-container'>
      <div className='address-container'>
        <p>1234 Address St, Detroit, MI</p>
      </div>
      <div className={visibleTitle ? 'nav-link-container2':'nav-link-container'}>
        <div className='nav-menu'>
          <a href='_blank' className='nav-link'>OUR STORY</a>
          <a href='_blank' className='nav-link'>MENU</a>
          <a href='_blank' className='nav-link'>HOURS AND LOCATION</a>
        </div>
      </div>
    </div>
  );
}

export default Header;