import "./Subtitle.scss";

type PropsType = {
  children: string;
};

export const Subtitle = ({ children }: PropsType): JSX.Element => {
  return (
    <div className="subtitle-container">
      <h3 className="subtitle">{children}</h3>
    </div>
  );
};
