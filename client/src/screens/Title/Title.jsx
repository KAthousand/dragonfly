import React from 'react';
import Slider from '../../components/Slider/Slider';
import "./Title.css"

function Title(props) {
  return (
    <div className='title-container' id='title'>
      <Slider />
      <div className='title-content'>
      </div>
    </div>
  );
}

export default Title;