import { BorderContainer, MyFace } from "../../Atoms";
import { Paragraph } from "../../Atoms/Paragraph/Paragraph";
import { Span } from "../../Atoms/Span/Span";

import "./IntroduceMyself.scss";

export const IntroduceMyself = () => {
  return (
    <BorderContainer>
      <MyFace />
      <Paragraph>Hi there! I'm</Paragraph>
      <Paragraph>
        <Span color="#ffb74d">Edied </Span>
        <Span color="#ffb74d">Isaías </Span>
        <Span color="#0288d1">Ramos </Span>
        <Span color="#d32f2f">Hernández</Span>
      </Paragraph>
      <Paragraph>Frontend Developer looking for big challenges.</Paragraph>
      <Paragraph>Sometimes I do Backend 🤓.</Paragraph>
    </BorderContainer>
  );
};
