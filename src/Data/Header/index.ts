import { HeaderItem } from "@/Interfaces";
import { ROUTE_URLS } from "@/Domain/Constants/urls";
import {
  AboutIcon,
  ContactIcon,
  ProjectsIcon,
  SkillsIcon,
} from "@/Components/Icons";

export const headerData: HeaderItem[] = [
  {
    id: 1,
    name: "Sobre mi",
    redirect: ROUTE_URLS.HOME,
    Icon: AboutIcon,
  },
  {
    id: 2,
    name: "Habilidades",
    redirect: ROUTE_URLS.SKILLS,
    Icon: SkillsIcon,
  },
  {
    id: 3,
    name: "Proyectos",
    redirect: ROUTE_URLS.PROJECTS,
    Icon: ProjectsIcon,
  },
  {
    id: 4,
    name: "Contacto",
    redirect: ROUTE_URLS.CONTACT,
    Icon: ContactIcon,
  },
];
