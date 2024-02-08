import { HTMLAttributes } from "react";

type SpanType = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

export const Span = ({ children, ...rest }: SpanType) => {
  return <span {...rest}>{children}</span>;
};
