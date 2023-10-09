type PropT = {
  children: React.ReactNode;
};

export const BorderContainer = ({ children }: PropT) => {
  return <div className="container border-decoration">{children}</div>;
};
