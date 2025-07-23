import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";

import Photo from "../../assets/facePhoto.png";
import Github from "../../assets/icons8-github-96.png";
import Linkedin from "../../assets/icons8-linkedin-50.png";
import { Button } from "../../components/Button";

import "./styles.css";

export function Home() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (inView) {
      setAnimationClass("animate-in");
    } else {
      setAnimationClass("");
    }
  }, [inView]);

  return (
    <section id="home" ref={ref} className={`home-container ${animationClass}`}>
      <div className="home-presentation">
        <div className="home-name-box">
          <p className="home-greeting">Hi, I am</p>
          <p className="home-name">Iuri Thauront Reis</p>
        </div>
        <h2 className="home-fullstack">Full Stack Developer</h2>
        <div className="home-socials">
          <a
            className="home-glass-button"
            href="https://github.com/ithauront"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Github}
              alt="GitHub logo – Iuri Thauront's profile"
              width={50}
              height={50}
            />
          </a>
          <a
            className="home-glass-button"
            href="https://www.linkedin.com/in/iuri-bastos-do-reis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Linkedin}
              alt="LinkedIn logo – Iuri Thauront's profile"
              width={60}
              height={60}
            />
          </a>
        </div>
        <div className="home-buttons-container">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            <Button
              label="Contact me"
              style={{
                minWidth: "7rem",
              }}
            />
          </Link>
          <a
            href="/portfolio/cv/Iuri_Thauront- Développeur Web.pdf"
            download
            style={{
              all: "unset",
              minWidth: "7rem",
            }}
          >
            <Button variant="secondary" label="Download CV" />
          </a>
        </div>
        <div className="home-accomplishment-container">
          <div>
            <p className="home-accomplishment-title">Self-taught</p>
            <p className="home-accomplishment-description">
              Fullstack developer
            </p>
          </div>
          <div className="home-accomplishment-separator" />
          <div>
            <p className="home-accomplishment-title">3</p>
            <p className="home-accomplishment-description">
              Years of hands-on development
            </p>
          </div>
          <div className="home-accomplishment-separator" />
          <div>
            <p className="home-accomplishment-title">30+</p>
            <p className="home-accomplishment-description">Personal projects</p>
          </div>
          <div className="home-accomplishment-separator" />
          <div>
            <p className="home-accomplishment-title">Freelance</p>
            <p className="home-accomplishment-description">
              Experience included
            </p>
          </div>
        </div>
      </div>
      <div className="home-photo-container">
        <img
          style={{
            borderRadius: "9999px",
          }}
          height={352}
          width={352}
          src={Photo}
          alt="Iuri Thauront Reis, Full Stack Developer"
        />
      </div>
    </section>
  );
}
