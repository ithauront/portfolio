import { Button } from "../Button";
import "./styles.css";

type ProjectCardProps = {
  projectName: string;
  imgSrc: string;
  githubLink: string;
  liveLink?: string;
};
export function ProjectCard({
  projectName,
  imgSrc,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  // TODO criar botão nessa propria pagina para ter a fonte mais bold
  function handleClickCard() {
    //TODO: ir para pagina de detalhes do item
    console.log("cardClicked");
  }
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="projectCard-container" onClick={handleClickCard}>
      <div className="projectCard-main">
        <img src={imgSrc} alt={`Thumbnail for ${projectName}`} />
      </div>

      <div className="projectCard-buttonContainer">
        <Button
          variant="secondary"
          label="Learn more"
          onClick={handleClickCard}
        />
      </div>
      <div className="projectCard-footer">
        {liveLink ? (
          <div className="projectCard-footer-button-container">
            <div className="projectCard-footer-button">
              <Button
                variant="primary"
                label="Live Demo"
                onClick={() => openLink(liveLink)}
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
