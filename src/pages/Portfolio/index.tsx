import { useState } from "react";

import { projects, type Project } from "./utils";
import { AnimatedProjectCard } from "../../components/AnimatedProjectCard";
import { Button } from "../../components/Button";
import { igniteCallId, STACK_OPTIONS } from "../../utils/consts";

import "./styles.css";

export function Portfolio() {
  //TODO: colocar animação de entrada para os projectCards
  //TODO verificar se o ignite call no learn more explica que tem que usar o test user.
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
            <AnimatedProjectCard
              key={item.id}
              project={item}
              highlightWarning={item.id === igniteCallId}
            />
          ))
        )}
      </div>
    </section>
  );
}
