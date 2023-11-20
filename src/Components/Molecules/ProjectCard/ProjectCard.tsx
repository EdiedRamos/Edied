import type { ProjectCardType } from "../../../Types/";
import "./ProjectCard.scss";

import { Git, Server } from "../../../Resources/Icons";

export const ProjectCard = ({
  title,
  preview,
  repository,
  deployed,
  techList,
}: ProjectCardType) => {
  return (
    <div className="project-card-container border-decoration">
      <div className="project-card-container__header">
        <h3>{title}</h3>
      </div>
      <div className="project-card-container__preview">
        <img src={preview} alt={title} />
      </div>
      <div className="project-link">
        <a
          href={repository}
          target="_blank"
          rel="noreferrer"
          className="border-decoration spin"
        >
          <img className="project-icon-redirect" src={Git} alt="github icon" />
        </a>
        <a
          href={deployed}
          target="_blank"
          rel="noreferrer"
          className="border-decoration spin"
        >
          <img
            className="project-icon-redirect"
            src={Server}
            alt="server icon"
          />
        </a>
      </div>
      <div className="project-tech-container">
        {techList.map((tech) => (
          <img
            className="project-icon border-decoration"
            key={tech.name}
            src={tech.icon}
            alt={`${tech} icon`}
          />
        ))}
      </div>
    </div>
  );
};
