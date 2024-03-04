import { HeaderItem } from "@/Interfaces";
import { ROUTE_URLS } from "@/Domain/Constants/urls";
import { About, Skills, Projects, Contact } from "@/Resources/Icons";

export const headerData: HeaderItem[] = [
  {
    id: 1,
    name: "Sobre mi",
    redirect: ROUTE_URLS.HOME,
    icon: About,
  },
  {
    id: 2,
    name: "Habilidades",
    redirect: ROUTE_URLS.SKILLS,
    icon: Skills,
  },
  {
    id: 3,
    name: "Proyectos",
    redirect: ROUTE_URLS.PROJECTS,
    icon: Projects,
  },
  {
    id: 4,
    name: "Contacto",
    redirect: ROUTE_URLS.CONTACT,
    icon: Contact,
  },
];
