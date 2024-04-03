import "./Title.scss";

type PropsType = {
  children: string;
};

export const Title = ({ children }: PropsType): JSX.Element => {
  return (
    <div className="title-container">
      <h2 className="title">{children}</h2>
    </div>
  );
};
