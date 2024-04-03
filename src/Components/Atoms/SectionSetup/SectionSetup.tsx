import type { HTMLAttributes, ReactNode } from "react";

import "./SectionSetup.scss";

type PropTypes = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const SectionSetup = ({
  children,
  className,
  ...rest
}: PropTypes): JSX.Element => {
  return (
    <section className={`section-setup ${className}`} {...rest}>
      {children}
    </section>
  );
};
