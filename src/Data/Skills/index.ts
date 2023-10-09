import {
  Bootstrap,
  ChakraUI,
  Cpp,
  Express,
  Git,
  Java,
  NodeJs,
  Python,
  React,
  Redux,
  Sass,
  Typescript,
  Javascript,
  Html,
  Css,
} from "../../Resources/Icons";

export enum skillContext {
  Frontend = "Frontend",
  Backend = "Backend",
  Hobby = "Hobby | Algorithms",
}

type SkillType = {
  name: string;
  image: string;
};

const Frontend: SkillType[] = [
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
    name: "chakra",
    image: ChakraUI,
  },
  {
    name: "bootstrap",
    image: Bootstrap,
  },
  {
    name: "git",
    image: Git,
  },
];

const Backend: SkillType[] = [
  {
    name: "nodejs",
    image: NodeJs,
  },
  {
    name: "express",
    image: Express,
  },
];

const Hobby: SkillType[] = [
  {
    name: "java",
    image: Java,
  },
  {
    name: "cpp",
    image: Cpp,
  },
  {
    name: "python",
    image: Python,
  },
];

export const skillList = [
  {
    type: skillContext.Frontend,
    content: Frontend,
  },
  {
    type: skillContext.Backend,
    content: Backend,
  },
  {
    type: skillContext.Hobby,
    content: Hobby,
  },
];
