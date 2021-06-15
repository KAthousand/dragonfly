import React from 'react';
import LogoSvg from '../../components/LogoSvg/LogoSvg';
import './LandingScreen.css'

function LandingScreen(props) {
  return (
    <div className='landing-screen-container'>
      <LogoSvg/>
    </div>
  );
}

export default LandingScreen;