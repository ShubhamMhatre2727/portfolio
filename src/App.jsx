import Contact from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="snap-y">
      <NavBar/>
      <Home className="snap-start snap-always" />
      <Skills className="snap-start snap-always"/>
      <Projects className="snap-start snap-always"/>
      <Contact className="snap-start snap-always"/>
    </div>
  );
}

export default App;
