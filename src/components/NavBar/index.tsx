import { Link } from "react-scroll";

import Logo from "../../assets/gengarlaxLogo-removebg-preview.png";
import { Button } from "../Button";

import "./styles.css";
const NAVBAR_HEIGHT = -160;
export function NavBar() {
  function handleMailSend() {
    const mailtoLink = document.createElement("a");
    mailtoLink.href = "mailto:iurithauront@gmail.com";
    mailtoLink.target = "_blank";
    mailtoLink.click();
  }
  return (
    <div className="navbar-container">
      <img src={Logo} alt="Logo" width={50} height={50} />
      <div className="navbar-links-container">
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          offset={NAVBAR_HEIGHT}
          activeClass="active"
          className="navbar-link"
        >
          Home
        </Link>
        <Link
          to="aboutMe"
          smooth={true}
          duration={500}
          spy={true}
          offset={NAVBAR_HEIGHT}
          activeClass="active"
          className="navbar-link"
        >
          About me
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          spy={true}
          offset={NAVBAR_HEIGHT}
          activeClass="active"
          className="navbar-link"
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={NAVBAR_HEIGHT}
          activeClass="active"
          className="navbar-link"
        >
          Contact me
        </Link>
      </div>
      <div className="navbar-button-container">
        <Button label="Send e-mail" onClick={handleMailSend} />
      </div>
    </div>
  );
}
