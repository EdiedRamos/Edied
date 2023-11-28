import type { ProjectCardType } from "../../../Types/";

import { Git, Server } from "../../../Resources/Icons";
import { IconLink, ProjectTools } from "../../Atoms";

import "./ProjectCard.scss";

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
        <a href={deployed} target="_blank">
          <h3>{title}</h3>
        </a>
      </div>
      <div className="project-card-container__preview">
        <a href={deployed} target="_blank">
          <img src={preview} alt={title} />
        </a>
      </div>
      <div className="project-link">
        <IconLink repository={repository} imgName="github" imgSrc={Git} />
        <IconLink repository={deployed} imgName="server" imgSrc={Server} />
      </div>
      <ProjectTools techList={techList} />
    </div>
  );
};
