import { BorderContainer, MyFace } from "../../Atoms";
import { Paragraph } from "../../Atoms/Paragraph/Paragraph";
import { Span } from "../../Atoms/Span/Span";

import "./IntroduceMyself.scss";

export const IntroduceMyself = () => {
  return (
    <BorderContainer>
      <MyFace />
      <Paragraph>
        Hi, I'm <Span color="#FFD494">Edied </Span>{" "}
        <Span color="#FFD494">Isaías </Span> <Span color="#1CAEFD">Ramos </Span>{" "}
        <Span color="#F9847B">Hernández</Span>, Web Developer based in Colombia
      </Paragraph>
    </BorderContainer>
  );
};
