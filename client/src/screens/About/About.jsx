import React from 'react';
import "./About.css"

function About(props) {
  const { visibleTitle } = props;

  return (
    <div className='about-container'>
      <div className='about-content'>
        <div className='about-header'>
          <div className={visibleTitle ? 'about-header-left about-header-accents':'about-header-left'}></div>
          <h1>Our Story</h1>
          <div className={visibleTitle ? 'about-header-right about-header-accents':'about-header-right'}></div>
        </div>
        <div className='about-paragraph'>
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className='about-photo'></div>
      </div>
    </div>
  );
}

export default About;