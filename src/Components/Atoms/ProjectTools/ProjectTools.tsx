import type { TechListType } from "../../../Types/projects";

import "./ProjectTools.scss";

type Props = {
  techList: TechListType[];
};

export const ProjectTools = ({ techList }: Props) => {
  return (
    <div className="project-tech-container">
      {techList.map((tech) => (
        <img
          className="project-icon"
          key={tech.name}
          src={tech.icon}
          alt={`${tech} icon`}
        />
      ))}
    </div>
  );
};
