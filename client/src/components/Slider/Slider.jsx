import React, { useState, useEffect } from 'react';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import "./Slider.css"

function Slider(props) {

  const [backgroundColor, setBackgroundColor] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0);
  const [timer, setTimer] = useState(0)
  const [play, setPlay] = useState(true)
  const myArr = ['blue', 'purple', 'green', 'orange']
  // const myArr = [<CarouselSlide content={'blue'}/>,<CarouselSlide content={'purple'} />,<CarouselSlide content={'green'}/>,<CarouselSlide content={'orange'}/>]
  const goLeft = () => {
    if (slideIndex < myArr.length-1) {
      setSlideIndex(slideIndex + 1)
      setTimeout(setBackgroundColor(myArr[slideIndex], 250))
    } else {
      setSlideIndex(0);
      setTimeout(setBackgroundColor(myArr[slideIndex], 250))
    }
  };
  const goRight = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
      setTimeout(setBackgroundColor(myArr[slideIndex], 250))
    } else {
      setSlideIndex(myArr.length - 1);
      setTimeout(setBackgroundColor(myArr[slideIndex], 250))
    };
  }

  useEffect(() => {
    if (play) {
      setTimeout(goRight, 3000)
    } else {
      clearTimeout()
    }
  }, [play, goRight])

  return (
    <div className='slider'>
      <div className='slide-nav'>
        <button id='goLeft' onClick={goLeft}>
          left
        </button>
        <button onClick={()=>setPlay(!play)}>
          {play ? "pause": "play"}
        </button>
        <button id='goLeft' onClick={goRight}>
          right
        </button>
      </div>
      <div className='slider-content' style={{backgroundColor: backgroundColor}}>
        {myArr.map((elem, idx) => {
          if (idx === 0) {
            return <CarouselSlide content={elem} slideIndex={slideIndex} idx={idx} myArr={myArr} key={idx+1}/>
          } else {
            return <CarouselSlide content={elem} slideIndex={slideIndex} idx={idx} myArr={myArr} key={idx+1}/>
          }
        })}
        </div>
    </div>
  );
}

export default Slider;