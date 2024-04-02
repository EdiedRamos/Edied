import type { TechListType } from "../../../Types/projects";

import "./ProjectTools.scss";

type Props = {
  techList: TechListType[];
};

export const ProjectTools = ({ techList }: Props) => {
  return (
    <div className="project-tech__container">
      {techList.map(({ name, Icon }) => (
        <Icon
          className="project-tech__icon"
          key={name}
          aria-label={`${name} icon`}
        />
      ))}
    </div>
  );
};
