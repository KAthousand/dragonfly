import Layout from "./screens/shared/Layout/Layout"
import Title from "./screens/Title/Title"
import About from "./screens/About/About"
import Menu from "./screens/Menu/Menu"
import {useLayoutEffect, useState, useRef} from 'react'
import './App.css';
import Information from "./screens/Information/Information";
import LandingScreen from "./screens/LandingScreen/LandingScreen"

function App() {
  const [visible, setVisible] = useState({
    title: true,
    about: false,
    menu: false,
    info: false,
  });
  const refTitle = useRef(null);
  const refAbout = useRef(null);
  const refMenu = useRef(null);
  const refInfo = useRef(null);

  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top
    const bottomPosition = (element) => element.getBoundingClientRect().bottom;

    const aboutTopPos = topPosition(refAbout.current);
    const aboutBottomPos = bottomPosition(refAbout.current);

    const menuTopPos = topPosition(refMenu.current);
    const menuBottomPos = bottomPosition(refMenu.current);

    const infoTopPos = topPosition(refInfo.current);
    const infoBottomPos = bottomPosition(refInfo.current);

    const onScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > aboutTopPos && scrollPos < aboutBottomPos) {
        setVisible((prevState) => ({ ...prevState, about: true, menu: false, title: false }));
      } else if (scrollPos > menuTopPos && scrollPos < menuBottomPos) {
        setVisible((prevState) => ({ ...prevState, about: false, menu: true, info: false }));
      } else if (scrollPos > infoTopPos && scrollPos < infoBottomPos) {
        setVisible((prevState) => ({ ...prevState, menu: false, info: true }))
      } else {
        setVisible((prevState)=>({...prevState, title: true, about: false}))
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  }, []);
  return (
    <Layout visible={visible}>
      <LandingScreen/>
      <div ref={refTitle}>
        <Title />
      </div>
      <div ref={refAbout}>
        <About visible={visible}/>
      </div>
      <div ref={refMenu}>
        <Menu/>
      </div>
      <div ref={refInfo}>
        <Information />
      </div>
    </Layout>
  );
}

export default App;
