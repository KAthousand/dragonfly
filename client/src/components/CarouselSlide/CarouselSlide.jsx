import React, {useState} from 'react';
import "./CarouselSlide.css"


function CarouselSlide(props) {
  const { content, idx, slideIndex, myArr} = props;
  // const [active, setActive] = useState(false);
  let active;
  if (slideIndex === idx) {
    active = 'slide'
  } else if (slideIndex + 1 === idx || (slideIndex === myArr.length-1 && idx === 0)) {
    active = 'slide-transition-left'
  } else if (slideIndex - 1 === idx || (slideIndex === 0 && idx === myArr.length-1)) {
    active = 'slide-transition-right'
  }


  return (
    <div className={active} style={{ backgroundColor: content }}></div>
  );
}

export default CarouselSlide;