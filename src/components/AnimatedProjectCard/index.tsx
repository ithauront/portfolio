import { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

import { ProjectCard } from "../../components/ProjectCard";
import type { Project } from "../../pages/Portfolio/utils";

import "./styles.css";

type Props = {
  project: Project;
  highlightWarning?: boolean;
};

export function AnimatedProjectCard({ project, highlightWarning }: Props) {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
    <div ref={ref} className={`portfolioPage-cardContainer ${animationClass}`}>
      <div className="portfolioPage-cardContainer_titleBox">
        <p className="portfolioPage-cardContainer_name">{project.name}</p>
        <p className="portfolioPage-cardContainer_category">
          {project.category}
        </p>
      </div>
      <ProjectCard
        projectName={project.name}
        imgSrc={project.image}
        githubLink={project.githubLink}
        liveLink={project.liveLink}
        githubLink2={project.githubLinkBackEnd}
        id={project.id}
      />
      <p className="portfolioPage-cardContainer_description">
        {highlightWarning ? (
          <>
            This project allows users to authenticate via Google, see their
            calendar availability, and receive new meeting invitations.
            <span
              style={{
                color: "#AB222E",
              }}
            >
              {" "}
              To login in this app you have to use the test user (click in learn
              more)
            </span>
          </>
        ) : (
          project.description
        )}
      </p>
    </div>
  );
}
