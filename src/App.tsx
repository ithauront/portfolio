import { NavBar } from "./components/NavBar";
import "./main-styles/theme.css";
import "./main-styles/styles.css";
import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";

export function App() {
  return (
    <div className="main-container">
      <NavBar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}
