import React from 'react';
import "./Header.css"

function Header(props) {
  const { visibleTitle } = props
  return (
    <div className='header-container'>
      <div className={visibleTitle ? 'address-container-transition address-container':'address-container'}>
        <p className={visibleTitle? 'hidden' : ''}>1234 Address St, Detroit, MI</p>
      </div>
      <div className={visibleTitle ? 'nav-link-container2':'nav-link-container'}>
        <div className='nav-menu'>
          <a href='_blank' className='nav-link'>OUR STORY</a>
          <a href='_blank' className='nav-link'>MENU</a>
          <a href='_blank' className='nav-link'>HOURS  &amp;  LOCATION</a>
        </div>
      </div>
    </div>
  );
}

export default Header;