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
    name: "about",
    redirect: ROUTE_URLS.HOME,
    Icon: AboutIcon,
  },
  {
    id: 2,
    name: "skills",
    redirect: ROUTE_URLS.SKILLS,
    Icon: SkillsIcon,
  },
  {
    id: 3,
    name: "projects",
    redirect: ROUTE_URLS.PROJECTS,
    Icon: ProjectsIcon,
  },
  {
    id: 4,
    name: "contact",
    redirect: ROUTE_URLS.CONTACT,
    Icon: ContactIcon,
  },
];
