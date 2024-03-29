import "./IconLink.scss";

type Props = {
  repository: string;
  imgName: string;
  imgSrc: string;
};

export const IconLink = ({ repository, imgName, imgSrc }: Props) => {
  return (
    <a href={repository} target="_blank" rel="noreferrer" className="spin">
      <img
        className="project-icon-redirect"
        src={imgSrc}
        alt={`${imgName} icon`}
      />
    </a>
  );
};
