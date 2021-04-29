import {useState} from 'react';
import "./Header.css"

function Header(props) {
  const { visibleTitle } = props
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className='header-container'>
      <div className={visibleTitle ? 'address-container-transition address-container':'address-container'}>
        <p className={visibleTitle ? 'hidden' : 'address'}>1234 ADDRESS ST, DETROIT, MI</p>      
      </div>
      <div className={visibleTitle ? 'nav-link-container2':'nav-link-container'}>
        <div className='nav-menu'>
          <a href='#about' className='nav-link'>OUR STORY</a>
          <a href='#menu' className='nav-link'>MENU</a>
          <a href='#info' className='nav-link'>HOURS  &amp;  LOCATION</a>
        </div>
      </div>
      <div className={navOpen ? 'nav-icon2' : 'nav-icon'}>
        <button onClick={() => setNavOpen(!navOpen)}></button>
      </div>
      <div className={navOpen ? 'mobile-nav' : 'mobile-nav-closed'}>
        <div className='mobile-nav-menu'>
          <a href='#about' className={navOpen ? 'nav-link-open nav-link' : 'nav-link'} onClick={()=>setNavOpen(!navOpen)}>OUR STORY</a>
          <a href='#menu' className={navOpen ? 'nav-link-open nav-link' : 'nav-link'} onClick={()=>setNavOpen(!navOpen)}>MENU</a>
          <a href='#info' className={navOpen ? 'nav-link-open nav-link' : 'nav-link'} onClick={()=>setNavOpen(!navOpen)}>HOURS  &amp;  LOCATION</a>
        </div>
      </div>
    </div>
  );
}

export default Header;