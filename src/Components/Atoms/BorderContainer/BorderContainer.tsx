import "./BorderContainer.scss";

type PropT = {
  children: React.ReactNode;
  isTitle?: boolean;
};

export const BorderContainer = ({ children, isTitle }: PropT): JSX.Element => {
  return (
    <div className={`container ${isTitle ? "bold" : null}`}>{children}</div>
  );
};
