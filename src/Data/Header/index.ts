import { ROUTE_URLS } from "../../Domain/Constants/urls";
import { HeaderItem } from "../../Interfaces";

export const headerData: HeaderItem[] = [
  {
    id: 1,
    name: "Inicio",
    redirect: ROUTE_URLS.HOME,
  },
  {
    id: 2,
    name: "Proyectos",
    redirect: ROUTE_URLS.PROJECTS,
  },
  {
    id: 3,
    name: "Contacto",
    redirect: ROUTE_URLS.CONTACT,
  },
];
