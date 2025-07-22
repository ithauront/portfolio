import cv from "../../../public/cv/Iuri_Thauront- Développeur Web.pdf";
import Github from "../../assets/icons8-github-96.png";
import Linkedin from "../../assets/icons8-linkedin-50.png";
import { Button } from "../../components/Button";
import "./styles.css";

export function Contact() {
  //TODO: colocar animação para os glassbutons dar slide
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("iurithauront@gmail.com")
      .then(() => {
        alert("E-mail copied to clipboard!");
      })
      .catch((err) => {
        console.error("Something went wrong", err);
      });
  };

  function handleMailSend() {
    const mailtoLink = document.createElement("a");
    mailtoLink.href = "mailto:iurithauront@gmail.com";
    mailtoLink.target = "_blank";
    mailtoLink.click();
  }

  const getFullYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  return (
    <section id="contact" className="contactPage-container">
      <h2 className="contactPage-title">Contact</h2>
      <div className="contactPage-contactBox">
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
        <div className="contactPage-email-container">
          <p className="contactPage-emailAddress">iurithauront@gmail.com</p>
          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
            }}
          >
            <Button
              title="copy"
              label="📋"
              onClick={copyToClipboard}
              variant="secondary"
            />
          </div>
          <div
            style={{
              width: "5rem",
              height: "2.5rem",
            }}
          >
            <Button label="Send" onClick={handleMailSend} />
          </div>
        </div>
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
      <a
        href={cv}
        download
        style={{
          all: "unset",
          minWidth: "7rem",
          height: "3rem",
        }}
      >
        <Button variant="secondary" label="Download CV" />
      </a>
      <footer className="footer">
        <p className="footer-text">
          © {getFullYear()} Iuri Thauront. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
