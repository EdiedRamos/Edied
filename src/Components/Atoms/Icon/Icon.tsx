import "./Icon.scss";

type IconType = {
  src: string;
  alt: string;
  spin?: boolean;
  value?: string;
};

export const Icon = ({
  src,
  alt,
  spin = false,
  value,
}: IconType): JSX.Element => {
  return (
    <div className="card">
      <img className={`${spin && "spin"}`} src={src} alt={`${alt} icon`} />
      {value !== undefined && <p>{value}</p>}
    </div>
  );
};
