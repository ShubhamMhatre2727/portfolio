import Contact from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavBar/>
      <Home />
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
