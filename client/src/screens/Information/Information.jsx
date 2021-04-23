import React from 'react';
import "./Information.css"

function Information(props) {
  return (
    <div className='info-container'>
      <div className='info-content'>
        <div className='info'>
        <div className='info-title'></div>
          <p>1234 Address St,</p>
          <p>Detroit, MI 48221</p>
          <p>(555) 555-5555</p>
          <br />
          <div className='info-hours'>
            <p>Monday to Thursday</p>
            <h3>5pm - 12am</h3>
            <p>Friday to Sunday</p>
            <h3>4pm - 2am</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;