import {useLayoutEffect, useState, useRef} from 'react'
import "./Menu.css"

function Menu(props) {
  const [visible, setVisible] = useState({menu:false})
  const refMenu = useRef(null)

  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;
    const menuPosition = topPosition(refMenu.current);
    const onScroll = () => {
      const scrollPosition = (window.scrollY + window.innerHeight);
      if (scrollPosition > menuPosition) {
        setVisible((prevState) => ({ ...prevState, menu: true }));
      } else if (menuPosition > scrollPosition) {
        setVisible((prevState) => ({ ...prevState, menu: false}));
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  return (
    <div className='menu-container' >
      <div className='menu-photo' id='menu'></div>
      <div className='menu-divider' ></div>
      <div className='menu-content' ref={refMenu}>
        <div className={visible.menu ? 'menu-info' : 'menu-info-transition menu-info'}>
          <div className='menu-content-text'>
            <div className="menu-text-header"><h1>Offerings</h1></div>
            <div className='menu-text-paragraph'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='menu-text-link'>
              Menu PDF
            </div>
          </div>
        </div>
        <div className={visible.menu ? 'menu-content-photo' : 'menu-content-photo-transition menu-content-photo'}></div>
        <div className={visible.menu ? 'menu-content-photo2' : 'menu-content-photo-transition menu-content-photo2'}></div>
        <div className={visible.menu ? 'menu-content-photo3' : 'menu-content-photo-transition menu-content-photo3'}></div>
      </div>
      <div className='menu-divider'></div>
      <div className='menu-photo2'></div>
    </div>
  );
}

export default Menu;