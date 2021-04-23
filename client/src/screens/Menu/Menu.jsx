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
      console.log(`scroll pos ${scrollPosition} and title pos ${menuPosition}`)
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
    <div className='menu-container' ref={refMenu}>
      <div className='menu-photo'><h1>PHOTO</h1></div>
      <div className='menu-content'>
        <div className={visible.menu ? 'menu-info' : 'menu-info-transition menu-info'}>
          <h1>Menu</h1>
        </div>
      </div>
      <div className='menu-photo'><h1>PHOTO</h1></div>
    </div>
  );
}

export default Menu;