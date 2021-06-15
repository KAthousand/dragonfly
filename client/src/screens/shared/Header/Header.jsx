import {useEffect, useState} from 'react';
import "./Header.css"

function Header(props) {
  const { visible } = props
  const [navOpen, setNavOpen] = useState(false);
  const [header, setHeader] = useState('ok')

  useEffect(() => {
    const headerChange = () => {
      if (visible.title) {
        setHeader('header header-title')
      } else if (visible.about) {
        setHeader('header header-about')
      } else if (visible.menu) {
        setHeader('header header-menu')
      } else if (visible.info) {
        setHeader('header header-info')
      }
    }
    headerChange();
  },[header, visible])

  return (
    <div className='header-container'>
      <div className={`${header}`}>
        <a className='header-logo' href='#title'> </a>
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
          <a href='#about' className='nav-link-open nav-link' onClick={()=>setNavOpen(!navOpen)}>OUR STORY</a>
          <a href='#menu' className='nav-link-open nav-link' onClick={()=>setNavOpen(!navOpen)}>MENU</a>
          <a href='#info' className='nav-link-open nav-link' onClick={()=>setNavOpen(!navOpen)}>HOURS  &amp;  LOCATION</a>
      </div>
    </div>
  );
}

export default Header;