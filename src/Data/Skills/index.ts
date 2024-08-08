import type { IconType } from "react-icons";
import { Icons } from "@/General/Icons";

type SkillType = "frontend" | "backend" | "tools";

interface Skill {
  name: string;
  Icon: IconType;
}

interface SkillsType {
  id: string;
  type: SkillType;
  content: Skill[];
}

const Frontend: Skill[] = [
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
];

const Backend: Skill[] = [
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
];

const Tools: Skill[] = [
  {
    name: "git",
    Icon: Icons.git,
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

export const skillList: SkillsType[] = [
  {
    id: "a7244d7c-2eaa-4584-93a1-8ba497723cd7",
    type: "frontend",
    content: Frontend,
  },
  {
    id: "ceff831c-9eea-4c23-967e-57aa12d76e05",
    type: "backend",
    content: Backend,
  },
  {
    id: "e1fa1a3d-2db0-4e66-b307-95a8927d683e",
    type: "tools",
    content: Tools,
  },
];
