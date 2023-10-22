import React from "react";

type SpanType = {
  children: React.ReactNode;
  color?: string;
};

export const Span = ({ children, color = "" }: SpanType) => {
  return <span style={{ color }}>{children}</span>;
};
