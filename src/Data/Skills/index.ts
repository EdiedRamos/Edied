import {
  Bootstrap,
  ChakraUI,
  Git,
  React,
  Redux,
  Sass,
  Typescript,
  Javascript,
  Html,
  Css,
  StyledComponents,
} from "@/Resources/Icons";

export enum skillContext {
  Languages = "Lenguajes",
  Tools = "Herramientas",
}

type SkillType = {
  name: string;
  image: string;
};

const Languages: SkillType[] = [
  {
    name: "html",
    image: Html,
  },
  {
    name: "css",
    image: Css,
  },
  {
    name: "javascript",
    image: Javascript,
  },
  {
    name: "typescript",
    image: Typescript,
  },
];

const Tools: SkillType[] = [
  {
    name: "react",
    image: React,
  },
  {
    name: "redux",
    image: Redux,
  },
  {
    name: "sass",
    image: Sass,
  },
  {
    name: "styled-components",
    image: StyledComponents,
  },
  {
    name: "bootstrap",
    image: Bootstrap,
  },
  {
    name: "chakra-UI",
    image: ChakraUI,
  },
  {
    name: "git",
    image: Git,
  },
];

export const skillList = [
  {
    type: skillContext.Languages,
    content: Languages,
  },
  {
    type: skillContext.Tools,
    content: Tools,
  },
];
