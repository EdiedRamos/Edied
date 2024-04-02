import "./Icon.scss";

import { HtmlHTMLAttributes } from "react";

type IconType = {
  src: string;
  alt: string;
  spin?: boolean;
  value?: string;
} & HtmlHTMLAttributes<HTMLImageElement>;

export const Icon = ({
  src,
  alt,
  spin = false,
  value,
  ...rest
}: IconType): JSX.Element => {
  return (
    <div className="card">
      <img
        className={`${spin && "spin"}`}
        src={src}
        alt={`${alt} icon`}
        {...rest}
      />
      {value !== undefined && <p>{value}</p>}
    </div>
  );
};
