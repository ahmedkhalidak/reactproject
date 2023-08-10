import "./App.css";
import About from './components/About';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Fo from './components/Fo';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Skills />
      <Portfolio />
      <Fo/>
    </div>
  );
}

export default App;
