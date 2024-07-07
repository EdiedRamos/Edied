import type { IconType } from "react-icons";
import { Icons } from "@/General/Icons";

type SkillType = {
  name: string;
  Icon: IconType;
};

type SkillListType = {
  id: "languages" | "tools";
  content: SkillType[];
};

const Languages: SkillType[] = [
  {
    name: "html",
    Icon: Icons.html,
  },
  {
    name: "css",
    Icon: Icons.css,
  },
  {
    name: "javascript",
    Icon: Icons.javascript,
  },
  {
    name: "typescript",
    Icon: Icons.typescript,
  },
  {
    name: "java",
    Icon: Icons.java,
  },
  // {
  //   name: "c++",
  //   Icon: Icons.cpp,
  // },
  // {
  //   name: "python",
  //   Icon: Icons.python,
  // },
];

const Tools: SkillType[] = [
  { name: "nextjs", Icon: Icons.nextjs },
  {
    name: "react",
    Icon: Icons.react,
  },
  {
    name: "redux",
    Icon: Icons.redux,
  },
  {
    name: "sass",
    Icon: Icons.sass,
  },
  {
    name: "tailwind",
    Icon: Icons.tailwind,
  },
  {
    name: "styled-components",
    Icon: Icons.styled,
  },
  {
    name: "bootstrap",
    Icon: Icons.bootstrap,
  },
  {
    name: "chakra-UI",
    Icon: Icons.chakraui,
  },
  {
    name: "git",
    Icon: Icons.git,
  },
  {
    name: "nodejs",
    Icon: Icons.nodejs,
  },
  {
    name: "express",
    Icon: Icons.express,
  },
  {
    name: "firebase",
    Icon: Icons.firebase,
  },
  {
    name: "axios",
    Icon: Icons.axios,
  },
  {
    name: "zod",
    Icon: Icons.zod,
  },
];

export const skillList: SkillListType[] = [
  {
    id: "languages",
    content: Languages,
  },
  {
    id: "tools",
    content: Tools,
  },
];
