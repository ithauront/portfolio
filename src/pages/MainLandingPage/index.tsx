import { NavBar } from "../../components/NavBar";
import { AboutMe } from "../AboutMe";
import { Contact } from "../Contact";
import { Home } from "../Home";
import { Portfolio } from "../Portfolio";
import "../../main-styles/theme.css";

export function MainLandingPage() {
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
