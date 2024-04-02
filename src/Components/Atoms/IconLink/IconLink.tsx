import type { IconType } from "react-icons";

import "./IconLink.scss";

type PropsType = {
  repository: string;
  name: string;
  Icon: IconType;
};

export const IconLink = ({ repository, name, Icon }: PropsType) => {
  return (
    <a href={repository} target="_blank" rel="noreferrer" className="spin">
      {Icon && <Icon className="icon-link__icon" aria-label={`${name} icon`} />}
    </a>
  );
};
