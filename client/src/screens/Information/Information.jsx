import React from 'react';
import "./Information.css"

function Information(props) {
  return (
    <div className='info-container'>
      <div className='info-content'>
        <div className='info'>
          <div className='info-title'></div>
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
            <h5>5pm - 12am</h5>
            <p>Friday to Sunday</p>
            <h5>4pm - 2am</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;