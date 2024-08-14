import "./IconLink.scss";

import type { IconType } from "react-icons";

type PropsType = {
  repository: string;
  name: string;
  Icon: IconType;
  title?: string;
};

export const IconLink = ({ repository, name, Icon, title }: PropsType) => {
  return (
    <a
      className="icon-link__link"
      href={repository}
      target="_blank"
      rel="noreferrer"
      title={title}
    >
      {Icon && <Icon className="icon-link__icon" aria-label={`${name} icon`} />}
    </a>
  );
};
