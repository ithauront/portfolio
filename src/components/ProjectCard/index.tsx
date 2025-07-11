import { useState } from "react";

import { Button } from "../Button";
import "./styles.css";

type ProjectCardProps = {
  projectName: string;
  projectCategory: string;
  projectDescription: string;
  imgSrc: string;
};
export function ProjectCard({
  projectName,
  projectCategory,
  projectDescription,
  imgSrc,
}: ProjectCardProps) {
  // TODO: se houver apenas github e não houver deploy a gente centraliza o botão
  // TODO: se houver deploy clicar no card inteiro leva para o deploy se não clicar no card inteiro leva para o github
  // TODO: tirar o nome de dentro do card deixar so o container e ai deixar sempre com o link pro github e para o live view. colocar o nome e categoria do projeto fora do card logo abaixo ou acima na pagina
  // TODO criar botão nessa propria pagina para ter a fonte mais bold
  const [isInPhoto, setIsInPhoto] = useState(true);
  function handleClickCard() {
    console.log("cardClicked");
  }
  const buttonLabel = isInPhoto
    ? "Show project description"
    : "Show project thumbnail";
  return (
    <div className="projectCard-container" onClick={handleClickCard}>
      <div className="projectCard-main">
        <div
          className={`projectCard-slide ${isInPhoto ? "visible" : "hidden"}`}
        >
          <img src={imgSrc} alt={`Thumbnail for ${projectName}`} />
        </div>
        <div
          className={`projectCard-slide ${!isInPhoto ? "visible" : "hidden"}`}
        >
          <p>
            {projectDescription}
            <br />
            For more information, visit the project's GitHub page.
          </p>
        </div>
      </div>

      <div className="projectCard-buttonContainer">
        <Button
          variant="primary"
          label={buttonLabel}
          onClick={() => setIsInPhoto(!isInPhoto)}
        />
      </div>
      <div className="projectCard-footer">
        {isInPhoto ? (
          <>
            <h3
              style={{
                color: "var(--gray-700)",
              }}
            >
              {projectName}
            </h3>
            <h3
              style={{
                color: "var(--gray-700)",
              }}
            >
              {projectCategory}
            </h3>
          </>
        ) : (
          <div className="projectCard-footer-button-container">
            <div className="projectCard-footer-button-deploy">
              <Button variant="secondary" label="Live Demo" />
            </div>
            <div className="projectCard-footer-button-github">
              <Button variant="secondary" label="Github" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
