import { useState } from "react";

import { projects, type Project } from "./utils";
import { Button } from "../../components/Button";
import { ProjectCard } from "../../components/ProjectCard";
import "./styles.css";

const STACK_OPTIONS = ["Front-end", "Back-end", "Full-stack", "Mobile"];
const IgniteCallId = 16;

export function Portfolio() {
  //TODO: colocar animação de entrada para os projectCards
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);

  function handleStackFilter(stack: string) {
    setSelectedStacks((prevSelected) => {
      if (prevSelected.includes(stack)) {
        return prevSelected.filter((stackItem) => stackItem !== stack);
      } else {
        return [...prevSelected, stack];
      }
    });
  }

  const isStackSelected = (stack: string) => selectedStacks.includes(stack);
  const allStacksSelected = selectedStacks.length === STACK_OPTIONS.length;
  const noStacksSelected = selectedStacks.length === 0;

  const filteredProjects: Project[] =
    noStacksSelected || allStacksSelected
      ? projects
      : projects.filter((item) => selectedStacks.includes(item.category));
  return (
    <section id="portfolio" className="portfolioPage-container">
      <h2 className="portfolioPage-title">Portfolio</h2>
      <div className="portfolioPage-stackFilter-container">
        {STACK_OPTIONS.map((stack) => (
          <div
            key={stack}
            className="portfolioPage-stackFilter-ButtonContainer"
          >
            <Button
              label={stack}
              variant={isStackSelected(stack) ? "primary" : "secondary"}
              onClick={() => handleStackFilter(stack)}
            />
          </div>
        ))}
      </div>
      <div className="portfolioPage-projectsContainer">
        {filteredProjects.length === 0 ? (
          <p
            style={{
              color: "#666",
              marginTop: "2rem",
            }}
          >
            Mobile comming soon.
          </p>
        ) : (
          filteredProjects.map((item) => (
            <div className="portfolioPage-cardContainer" key={item.id}>
              <div className="portfolioPage-cardContainer_titleBox">
                <p className="portfolioPage-cardContainer_name">{item.name}</p>
                <p className="portfolioPage-cardContainer_category">
                  {item.category}
                </p>
              </div>
              <ProjectCard
                projectName={item.name}
                imgSrc={item.image}
                githubLink={item.githubLink}
                liveLink={item.liveLink}
                githubLink2={item.githubLinkBackEnd}
                id={item.id}
              />
              <p className="portfolioPage-cardContainer_description">
                {item.id === IgniteCallId ? (
                  <>
                    This project allows users to authenticate via Google, see
                    their calendar availability, and receive new meeting
                    invitations.
                    <span
                      style={{
                        color: "#AB222E",
                      }}
                    >
                      {" "}
                      To login in this app you have to use the test user (click
                      in learn more)
                    </span>
                  </>
                ) : (
                  item.description
                )}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
