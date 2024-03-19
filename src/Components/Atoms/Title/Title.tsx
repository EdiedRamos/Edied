import "./Title.scss";

type PropsType = {
  children: string;
};

export const Title = ({ children }: PropsType): JSX.Element => {
  return <h2 className="title">{children}</h2>;
};
