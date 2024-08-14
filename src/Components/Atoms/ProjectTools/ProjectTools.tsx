import "./ProjectTools.scss";

import type { TechListType } from "../../../Types/projects";

type Props = {
  techList: TechListType[];
};

export const ProjectTools = ({ techList }: Props) => {
  return (
    <div className="project-tech__container">
      {techList.map(({ name, Icon }) => (
        <span key={name} title={name}>
          <Icon
            className="project-tech__icon"
            key={name}
            aria-label={`${name} icon`}
          />
        </span>
      ))}
    </div>
  );
};
