import type { ProjectCardType } from "@/Types";

import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

import { IconLink, ProjectTools } from "@/Components/Atoms";

import "./ProjectCard.scss";

export const ProjectCard = ({
  title,
  preview,
  repository,
  deployed,
  techList,
}: ProjectCardType) => {
  return (
    <div className="project-card-container">
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
      <div className="project-card-container__link">
        <IconLink repository={repository} name="github" Icon={FaGithub} />
        <IconLink repository={deployed} name="server" Icon={GrDeploy} />
      </div>
      <ProjectTools techList={techList} />
    </div>
  );
};
