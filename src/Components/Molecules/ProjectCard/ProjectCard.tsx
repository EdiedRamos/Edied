import { ProjectCardType } from "../../../Types/";
import "./ProjectCard.scss";

import { Git, Server } from "../../../Resources/Icons";

export const ProjectCard = ({
  title,
  description,
  repository,
  deployed,
  techList,
}: ProjectCardType) => {
  return (
    <div className="project-card-container border-decoration">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-link">
        <a
          href={repository}
          target="_blank"
          rel="noreferrer"
          className="border-decoration spin"
        >
          <img className="project-icon" src={Git} alt="github icon" />
        </a>
        <a
          href={deployed}
          target="_blank"
          rel="noreferrer"
          className="border-decoration spin"
        >
          <img className="project-icon" src={Server} alt="server icon" />
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
