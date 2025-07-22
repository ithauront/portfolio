import { Link } from "react-router-dom";

import { Button } from "../Button";
import "./styles.css";

type ProjectCardProps = {
  projectName: string;
  imgSrc: string;
  githubLink: string;
  githubLink2?: string;
  liveLink?: string;
  id: number;
};
export function ProjectCard({
  projectName,
  imgSrc,
  githubLink,
  liveLink,
  githubLink2,
  id,
}: ProjectCardProps) {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="projectCard-container">
      <div className="projectCard-main">
        <img src={imgSrc} alt={`Thumbnail for ${projectName}`} />
      </div>

      <Link className="projectCard-buttonContainer" to={`/project/${id}`}>
        <Button variant="secondary" label="Learn more" />
      </Link>

      <div className="projectCard-footer">
        {liveLink || githubLink2 ? (
          <div className="projectCard-footer-button-container">
            <div className="projectCard-footer-button">
              <Button
                variant="primary"
                label={githubLink2 ? "Github Backend" : "Live Demo"}
                onClick={() => openLink(githubLink2 || liveLink!)}
              />
            </div>
            <div className="projectCard-footer-button">
              <Button
                variant="secondary"
                label="Github"
                onClick={() => openLink(githubLink)}
              />
            </div>
          </div>
        ) : (
          <div className="projectCard-footer-oneButton-container">
            <div className="projectCard-footer-button">
              <Button
                variant="primary"
                label="Github"
                onClick={() => openLink(githubLink)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
