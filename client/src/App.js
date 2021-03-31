import Layout from "./screens/shared/Layout/Layout"
import Title from "./screens/Title/Title"
import About from "./screens/About/About"
import Menu from "./screens/Menu/Menu"
import './App.css';
import Information from "./screens/Information/Information";

function App() {
  return (
      <Layout>
        <Title />
        <About />
        <Menu />
        <Information />
      </Layout>
  );
}

export default App;
