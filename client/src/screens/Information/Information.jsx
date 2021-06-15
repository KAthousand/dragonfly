import React from 'react';
import "./Information.css"

function Information(props) {
  return (
    <div className='info-container' id='info'>
      <div className='info'>
          <div className='info-title'></div>
          <div className='info-text'>
            <div className='info-location'>
              <h4>Location</h4>
              <p>1234 Address St,</p>
              <p>Detroit, MI 48221</p>
              <p>(555) 555-5555</p>
            <div className='map'><a href='www.google.com'>View Map</a></div>
            </div>
            <div className='info-hours'>
              <h4>Hours</h4>
              <p>Monday to Thursday</p>
              <h3>5pm - 12am</h3>
              <p>Friday to Sunday</p>
              <h3>4pm - 2am</h3>
            </div>
            <div className='info-contact'>
              <h4>Contact</h4>
              <p>(248) 291-5295</p>
              <a href="mailto:info@theoaklandferndale.com">info@dragonflydetroit.com</a>
            </div>
          </div>
          <div className= 'info-icon-container'>
            <a className='fab fa-facebook-square' href='www.google.com' alt='facebook-link'> </a>
            <a className='fab fa-instagram-square' href='www.google.com' alt='instagram-link'> </a>
            <a className='fab fa-tripadvisor' href='www.google.com' alt='tripadvisor-link'> </a>
          </div>
        </div>
      </div>
  );
}

export default Information;