import type { IconType } from "react-icons";

import "./IconLink.scss";

type PropsType = {
  repository: string;
  name: string;
  Icon: IconType;
};

export const IconLink = ({ repository, name, Icon }: PropsType) => {
  return (
    <a
      className="icon-link__link"
      href={repository}
      target="_blank"
      rel="noreferrer"
    >
      {Icon && <Icon className="icon-link__icon" aria-label={`${name} icon`} />}
    </a>
  );
};
