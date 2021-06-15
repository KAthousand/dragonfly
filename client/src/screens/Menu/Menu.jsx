
import Slider from '../../components/Slider/Slider'
import "./Menu.css"

function Menu(props) {
  return (
    <div className='menu-container' id='menu'>
      <Slider/>
      <div className='menu-content'>
        <div className='menu-info'>
            <a className='menu-text-link' href='www.google.com' alt='menu-pdf'>
              MENU PDF
            </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;