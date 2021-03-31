import React, {useState} from 'react';
import "./Slider.css"

function Slider(props) {
  const [x, setX] = useState(0);
  let sliderArray = [1, 2, 3];
  const goLeft = () => {
    x === 0 ? setX(0) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArray.length - 1) ? setX(x) : setX(x - 100);
  };

  return (
    <div className='slider'>
      <section className='section-a slide' style={{ transform: `translateX(${x}%)` }}></section>
      <section className='section-b slide' style={{ transform: `translateX(${x}%)` }}></section>
      <section className='section-c slide' style={{transform: `translateX(${x}%)`}}></section>
      <div className='slide-nav'>
        <button id='goLeft' onClick={goLeft}>
          left
        </button>
        <button id='goLeft' onClick={goRight}>
            right
        </button>
      </div>
    </div>
  );
}

export default Slider;