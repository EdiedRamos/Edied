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
  Java,
  Cpp,
  Python,
  NodeJs,
  Express,
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
  {
    name: "java",
    image: Java,
  },
  {
    name: "c++",
    image: Cpp,
  },
  {
    name: "python",
    image: Python,
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
  {
    name: "nodejs",
    image: NodeJs,
  },
  {
    name: "express",
    image: Express,
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
