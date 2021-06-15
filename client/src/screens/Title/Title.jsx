import React from 'react';
import "./Title.css"

function Title(props) {
  return (
    <div className='title-container' id='title'>
      <div className='title-content'>
      </div>
      <div className='title-icon-container'>
            <a className='fab fa-facebook-square' href='www.google.com' alt='facebook-link'> </a>
            <a className='fab fa-instagram-square' href='www.google.com'alt='instagram-link'> </a>
            <a className='fab fa-tripadvisor' href='www.google.com' alt='tripadvisor-link'> </a>
          </div>
      <div className='address-container'>
        <p className='address'>1234 ADDRESS ST, DETROIT, MI</p>
      </div>
    </div>
  );
}

export default Title;