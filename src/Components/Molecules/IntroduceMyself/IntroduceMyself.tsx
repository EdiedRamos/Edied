import { BorderContainer, MyFace } from "../../Atoms";
import { Paragraph } from "../../Atoms/Paragraph/Paragraph";
import { Span } from "../../Atoms/Span/Span";

import "./IntroduceMyself.scss";

export const IntroduceMyself = () => {
  return (
    <BorderContainer>
      <MyFace />
      <Paragraph id="about-me">
        Hola, soy <Span>Edied </Span>
        <Span>Isaías </Span>
        <Span>Ramos </Span>
        <Span>Hernández</Span>, apasionado por el frontend, mi misión es dar
        vida a experiencias digitales excepcionales. Con especialización en
        React, transformo conceptos en interfaces atractivas, optimizadas y
        listas para cautivar a los usuarios.
      </Paragraph>
    </BorderContainer>
  );
};
