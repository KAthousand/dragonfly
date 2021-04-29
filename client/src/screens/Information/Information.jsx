import React from 'react';
import "./Information.css"

function Information(props) {
  return (
    <div className='info-container'>
      <div className='info-content'>
        <div className='info'>
          <div className='info-title'></div>
          <div className='info-text'>
            <div className='info-location'>
              <h4>Location</h4>
              <p>1234 Address St,</p>
              <p>Detroit, MI 48221</p>
              <p>(555) 555-5555</p>
            </div>
            <br />
            <div className='info-hours'>
              <h4>Hours</h4>
              <p>Monday to Thursday</p>
              <h4>5pm - 12am</h4>
              <p>Friday to Sunday</p>
              <h4>4pm - 2am</h4>
            </div>
          </div>
          <div className= 'info-icon-container'>
            <i className='fab fa-facebook-square'></i>
            <i className='fab fa-instagram-square'></i>
            <i className='fab fa-tripadvisor'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;