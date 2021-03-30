import Layout from "./screens/shared/Layout/Layout"
import Title from "./screens/Title/Title"
import About from "./screens/About/About"
import Menu from "./screens/Menu/Menu"
import './App.css';

function App() {
  return (
      <Layout>
        <Title />
        <About />
        <Menu />
      </Layout>
  );
}

export default App;
