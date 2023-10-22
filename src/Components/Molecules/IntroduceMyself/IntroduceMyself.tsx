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
        <Span color="#fff599">Edied </Span>
        <Span color="#fff599">Isaías </Span>
        <Span color="#37f">Ramos </Span>
        <Span color="#da2f43">Hernández</Span>
      </Paragraph>
      <Paragraph>Frontend Developer looking for big challenges.</Paragraph>
      <Paragraph>Sometimes I do Backend 🤓.</Paragraph>
    </BorderContainer>
  );
};
