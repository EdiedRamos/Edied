import type { TechListType } from "../../../Types/projects";

type Props = {
  techList: TechListType[];
};

export const ProjectTools = ({ techList }: Props) => {
  return (
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
  );
};
