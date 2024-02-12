import "./Icon.scss";

type IconType = {
  src: string;
  alt: string;
  spin?: boolean;
};

export const Icon = ({ src, alt, spin = false }: IconType) => {
  return (
    <img className={`card ${spin && "spin"}`} src={src} alt={`${alt} icon`} />
  );
};
