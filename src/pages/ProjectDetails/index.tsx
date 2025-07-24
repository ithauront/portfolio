import { useParams, useLocation } from "react-router-dom";

import { Button } from "../../components/Button";
import { igniteCallId } from "../../utils/consts";
import { projects, type Project } from "../Portfolio/utils";

import "./styles.css";

export function ProjectDetails() {
  const { id } = useParams();
  const location = useLocation();
  const projectFromState = location.state as Project | undefined;

  const project =
    projectFromState || projects.find((item) => item.id === Number(id));

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!project) {
    return (
      <div className="projectDetails-container">
        <p>Projeto não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="projectDetails-container">
      <div className="projectDetails-titleBox">
        <h1 className="projectDetails-title">{project.name}</h1>
        <h2 className="projectDetails-category">{project.category}</h2>
      </div>
      <div className="projectDetails-imgAndTechContainer">
        <img
          src={project.image}
          alt={project.name}
          className="projectDetails-image"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            padding: "1rem",
            flex: 1,
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <div>
            <h3 className="projectDetails-asideSessionTitle">About</h3>
            {project.id !== igniteCallId ? (
              <p className="projectDetails-about">
                {project.detailedDescription}
              </p>
            ) : (
              <p className="projectDetails-about">
                A fullstack scheduling application built with Next.js, designed
                to simplify appointment scheduling by integrating seamlessly
                with Google Calendar.
                <span className="projectDetails-igniteCallWarn">
                  {" "}
                  The app is published on Google Cloud in test mode. Only users
                  added to the OAuth test list can authenticate unless using the
                  test account: Email: testignitecalltest@gmail.com Password:
                  testignite12call3
                </span>
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "0.5rem",
            }}
          >
            <h3 className="projectDetails-asideSessionTitle">Tech Stack</h3>
            <div
              style={{
                maxHeight: "20rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              {project.techs.map((item: string) => {
                return <p className="projectDetails-techItem">{item}</p>;
              })}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "0.5rem",
            }}
          >
            <h3 className="projectDetails-asideSessionTitle">What I Learned</h3>
            <div
              style={{
                maxHeight: "20rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.4rem",
                flexWrap: "wrap",
              }}
            >
              {project.learned.map((item: string) => {
                return <p className="projectDetails-learnedItem">{item}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="projectDetails-navbuttons_container">
        <div className="projectDetails-backButton">
          <Button onClick={() => window.history.back()} label="Back" />
        </div>
        <div className="projectDetails-externalButtons_container">
          <div className="projectDetails-externalButtons-button">
            <Button
              label="Github"
              variant="secondary"
              onClick={() => openLink(project.githubLink)}
            />
          </div>
          <div className="projectDetails-externalButtons-button">
            <Button
              label={project.githubLinkBackEnd ? "Github Backend" : "Live Demo"}
              onClick={() =>
                openLink(project.githubLinkBackEnd || project.liveLink!)
              }
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
