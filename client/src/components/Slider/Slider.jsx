import React, { useState, useEffect } from 'react';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import slide1 from '../../assets/deluxx_photos/slide1.jpg'
import slide2 from '../../assets/deluxx_photos/slide2.jpg'
import slide3 from '../../assets/deluxx_photos/slide3.jpg'
import slide4 from '../../assets/deluxx_photos/slide4.jpg'
import "./Slider.css"

function Slider(props) {

  const [backgroundColor, setBackgroundColor] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [timer, setTimer] = useState(3000)
  const [play, setPlay] = useState(true);
  const myArr = [slide1, slide2, slide3, slide4];

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
      setTimeout(() =>setSlideIndex(slideIndex - 1), 250);
      setBackgroundColor(myArr[slideIndex])
    } else {
      setTimeout(() =>setSlideIndex(myArr.length - 1), 250);
      setBackgroundColor(myArr[slideIndex])
    };
  }

  useEffect(() => {
    if (play) {
      setTimeout(goRight, timer)
    } else {
      clearTimeout(goRight)
      setTimer(0);
    }
  }, [play, goRight, timer])

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
      {/* <div className='slider-content'> */}
      <div className='slider-content' style={{backgroundImage: `url(${backgroundColor})`}}>
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