import React from "react";

type BaseLinkProps = {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
};

export const BaseLink = ({ children, href, ariaLabel }: BaseLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel}>
      {children}
    </a>
  );
};
