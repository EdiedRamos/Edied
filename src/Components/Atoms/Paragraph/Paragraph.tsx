import React from "react";

type ParagraphType = {
  children: React.ReactNode;
};

import "./Paragraph.scss";

export const Paragraph = ({ children }: ParagraphType) => {
  return <p className="paragraph">{children}</p>;
};
