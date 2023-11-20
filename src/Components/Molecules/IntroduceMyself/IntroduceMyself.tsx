import { BorderContainer, MyFace } from "../../Atoms";
import { Paragraph } from "../../Atoms/Paragraph/Paragraph";
import { Span } from "../../Atoms/Span/Span";

import "./IntroduceMyself.scss";

export const IntroduceMyself = () => {
  return (
    <BorderContainer>
      <MyFace />
      <Paragraph>
        Hello! I'm <Span color="#FFD494">Edied </Span>{" "}
        <Span color="#FFD494">Isaías </Span> <Span color="#1CAEFD">Ramos </Span>{" "}
        <Span color="#F9847B">Hernández</Span>, a web developer with two years
        of experience passionate about building high-quality applications and
        efficiently solving problems. My focus is on creating robust and
        optimized web solutions, combining my love for algorithms with a
        constant pursuit of excellence in every project.
      </Paragraph>
    </BorderContainer>
  );
};
