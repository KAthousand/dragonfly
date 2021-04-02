import React, { useState} from 'react';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import "./Slider.css"

function Slider(props) {

  const [backgroundColor, setBackgroundColor] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0);
  const myArr = ['blue', 'purple', 'green', 'orange']
  // const myArr = [<CarouselSlide content={'blue'}/>,<CarouselSlide content={'purple'} />,<CarouselSlide content={'green'}/>,<CarouselSlide content={'orange'}/>]
  const goRight = () => {
    if (slideIndex < myArr.length-1) {
      setSlideIndex(slideIndex + 1)
      setTimeout(setBackgroundColor(myArr[slideIndex], 250))
    } else {
      setSlideIndex(0);
    }
  };
  const goLeft = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
      setTimeout(setBackgroundColor(myArr[slideIndex], 250))
    } else {
      setSlideIndex(myArr.length - 1);
    };
  }

  return (
    <div className='slider'>
      <div className='slide-nav'>
        <button id='goLeft' onClick={goLeft}>
          left
        </button>
        <button id='goLeft' onClick={goRight}>
            right
        </button>
      </div>
      <div className='slider-content' style={{backgroundColor: backgroundColor}}>
        {myArr.map((elem, idx) => {
          if (idx === 0) {
            return <CarouselSlide content={elem} slideIndex={slideIndex} idx={idx} myArr={myArr}/>
          } else {
            return <CarouselSlide content={elem} slideIndex={slideIndex} idx={idx} myArr={myArr}/>
          }
        })}
        </div>
    </div>
  );
}

export default Slider;