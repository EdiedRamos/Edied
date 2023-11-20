import React from "react";
import type { HtmlHTMLAttributes } from "react";

type CustomParagraphType = {
  children: React.ReactNode;
};

type ParagraphType = HtmlHTMLAttributes<HTMLParagraphElement>;

type PropTypes = CustomParagraphType & ParagraphType;

import "./Paragraph.scss";

export const Paragraph = ({
  children,
  ...restProps
}: PropTypes): JSX.Element => {
  return (
    <p {...restProps} className="paragraph">
      {children}
    </p>
  );
};
