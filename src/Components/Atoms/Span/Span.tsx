import React from "react";

type SpanType = {
  children: React.ReactNode;
  color?: string;
  className?: string;
};

export const Span = ({ children, color = "", className = "" }: SpanType) => {
  return (
    <span className={className} style={{ color }}>
      {children}
    </span>
  );
};
