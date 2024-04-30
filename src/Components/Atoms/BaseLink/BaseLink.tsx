import React from "react";

type BaseLinkProps = {
  children: React.ReactNode;
  href: string;
};

export const BaseLink = ({ children, href }: BaseLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
