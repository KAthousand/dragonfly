import Layout from "./screens/shared/Layout/Layout"
import Title from "./screens/Title/Title"
import About from "./screens/About/About"
import Menu from "./screens/Menu/Menu"
import {useLayoutEffect, useState, useRef} from 'react'
import './App.css';
import Information from "./screens/Information/Information";

function App() {
  const [visible, setVisible] = useState({title:false, menu:false})
  const refTitle = useRef(null)

  useLayoutEffect(() => {
    const bottomPosition = (element) => element.getBoundingClientRect().bottom;
    const titlePosition = bottomPosition(refTitle.current);
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > titlePosition) {
        setVisible((prevState) => ({ ...prevState, title: true }));
      } else if (titlePosition > scrollPosition) {
        setVisible((prevState) => ({ ...prevState, title: false }));
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  }, []);
  return (
    <Layout visibleTitle={visible.title}>
      <div ref={refTitle}>
        <Title />
      </div>
      <About visibleTitle={visible.title} />
      <Menu/>
      <Information />
    </Layout>
  );
}

export default App;
