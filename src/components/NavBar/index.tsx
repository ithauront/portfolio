import { useState } from "react";

import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";

import Logo from "../../assets/gengarlaxLogo-removebg-preview.png";
import { NAVBAR_HEIGHT } from "../../utils/consts";
import { Button } from "../Button";

import "./styles.css";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMailSend() {
    const mailtoLink = document.createElement("a");
    mailtoLink.href = "mailto:iurithauront@gmail.com";
    mailtoLink.target = "_blank";
    mailtoLink.click();
  }

  const navLinks = (
    <>
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
    </>
  );
  return (
    <div className="navbar-container">
      <img src={Logo} alt="Logo" width={50} height={50} />
      <div className="navbar-links-container">{navLinks}</div>
      <div className="navbar-button-container">
        <Button label="Send e-mail" onClick={handleMailSend} />
      </div>
      <div
        className={`navbar-mobile-toggle ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <FiX size={24} color="var(--green-500)" />
        ) : (
          <FiMenu size={24} color="var(--green-500)" />
        )}
      </div>

      {isMobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-links">{navLinks}</div>
        </div>
      )}
    </div>
  );
}
