import "./Card.scss";

type CardType = {
  src: string;
  alt: string;
  spin?: boolean;
};

export const Card = ({ src, alt, spin = false }: CardType) => {
  return (
    <img
      className={`card border-decoration ${spin && "spin"}`}
      src={src}
      alt={`${alt} icon`}
    />
  );
};
