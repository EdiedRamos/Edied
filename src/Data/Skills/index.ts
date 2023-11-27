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
  MySql,
  MongoDb,
  StyledComponents,
} from "../../Resources/Icons";

export enum skillContext {
  Languages = "Languages",
  Tools = "Tools/Frameworks",
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
    name: "cpp",
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
    name: "chakra-ui",
    image: ChakraUI,
  },
  {
    name: "nodejs",
    image: NodeJs,
  },
  {
    name: "express",
    image: Express,
  },
  {
    name: "mysql",
    image: MySql,
  },
  {
    name: "mongodb",
    image: MongoDb,
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
