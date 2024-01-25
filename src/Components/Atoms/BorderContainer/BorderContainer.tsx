type PropT = {
  children: React.ReactNode;
  isTitle?: boolean;
};

export const BorderContainer = ({ children, isTitle }: PropT): JSX.Element => {
  return (
    <div className={`container border-decoration ${isTitle ? "bold" : null}`}>
      {children}
    </div>
  );
};
