import {useState, useLayoutEffect, useRef} from 'react';
import "./About.css"

function About(props) {
  const aboutRef = useRef(null)
  const [animation, setAnimation] = useState(false)

  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const aboutRefPos = topPosition(aboutRef.current);
      if (scrollPosition > aboutRefPos) {
        setAnimation(true);
      } else {
        setAnimation(false);
      }

    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  }, []);

  return (
    <div className='about-container' id='about' ref={aboutRef}>
      <div className='about-content' >
        <div className='about-text'>
          <div className='about-header'>
            <div className={animation ? 'about-header-left about-header-accents' : 'about-header-left'}></div>
              <h1>Our Story</h1>
            <div className={animation ? 'about-header-right about-header-accents':'about-header-right'}></div>
          </div>
            <div className='about-paragraph'>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
        </div>
        <div className='about-photo'></div>
      </div>
    </div>
  );
}

export default About;