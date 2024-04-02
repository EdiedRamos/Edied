import type { IconType } from "react-icons";

import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiChakraui,
  SiExpress,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export enum skillContext {
  Languages = "Lenguajes",
  Tools = "Herramientas",
}

type SkillType = {
  name: string;
  Icon: IconType;
};

const Languages: SkillType[] = [
  {
    name: "html",
    Icon: FaHtml5,
  },
  {
    name: "css",
    Icon: FaCss3,
  },
  {
    name: "javascript",
    Icon: IoLogoJavascript,
  },
  {
    name: "typescript",
    Icon: SiTypescript,
  },
  {
    name: "java",
    Icon: FaJava,
  },
  {
    name: "c++",
    Icon: TbBrandCpp,
  },
  {
    name: "python",
    Icon: FaPython,
  },
];

const Tools: SkillType[] = [
  {
    name: "react",
    Icon: FaReact,
  },
  {
    name: "redux",
    Icon: SiRedux,
  },
  {
    name: "sass",
    Icon: FaSass,
  },
  {
    name: "styled-components",
    Icon: SiStyledcomponents,
  },
  {
    name: "bootstrap",
    Icon: FaBootstrap,
  },
  {
    name: "chakra-UI",
    Icon: SiChakraui,
  },
  {
    name: "git",
    Icon: FaGitAlt,
  },
  {
    name: "nodejs",
    Icon: FaNodeJs,
  },
  {
    name: "express",
    Icon: SiExpress,
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
