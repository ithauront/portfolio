import { AnimatedTerminal } from "../../components/AnimatedTerminal";
import { TechIconsBar } from "../../components/TechIconsBar";
import "./styles.css";

export function AboutMe() {
  //TODO: ver o styles para que o aboutme apareça todo em uma tela e a techicons bar não fique escondida apenas para ver na rolagem.
  return (
    <section id="aboutMe" className="aboutme-container">
      <h2 className="aboutme-title">About me</h2>
      <h3 className="aboutme-name">Iuri Thauront Reis</h3>
      <div className="aboutme-main">
        <AnimatedTerminal />
        <div className="aboutme-text-container">
          <p className="aboutme-text">
            I'm a self-taught{" "}
            <strong className="aboutme-text-strong">
              Full Stack Developer
            </strong>{" "}
            with a strong passion for building meaningful and scalable web
            applications. <br /> My journey into tech started from curiosity and
            quickly turned into a full-time dedication, where I learned by
            doing.{" "}
            <strong className="aboutme-text-strong">
              Creating projects, solving real problems, and constantly pushing
              my limits.
            </strong>
            <br /> One of my strongest traits is my discipline and long-term
            commitment to growth. From the very beginning, I set clear goals for
            myself and stayed consistent,{" "}
            <strong className="aboutme-text-strong">
              coding every day, building habits that helped me move forward even
              through challenges.
            </strong>{" "}
            This daily practice became a foundation for deeper learning and real
            skill development over time.
            <br /> I specialize in{" "}
            <strong className="aboutme-text-strong">
              JavaScript, TypeScript, React, Node.js, and modern frameworks
            </strong>
            , and I'm always eager to explore new technologies that help me
            build better, cleaner, and more efficient solutions. While
            TypeScript remains my core strength, I'm currently taking the time
            to slowly learn{" "}
            <strong className="aboutme-text-strong">Python</strong> as a way to
            expand my toolkit without compromising the depth of my main stack.{" "}
            <br /> What sets me apart is my ability to learn fast, adapt
            quickly, and stay committed to writing solid, maintainable code. I
            believe that great software is built by combining technical skill
            with empathy for users and a clear understanding of the problem
            being solved. Whether working on a personal project, freelancing, or
            collaborating in a team, I always bring the same mindset:{" "}
            <strong className="aboutme-text-strong">
              deliver quality, keep learning, and never stop improving.
            </strong>
          </p>
        </div>
      </div>
      <TechIconsBar />
    </section>
  );
}
