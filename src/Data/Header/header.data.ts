import { ROUTE_URLS } from "../../Domain/Constants/urls";
import { HeaderItem } from "../../Interfaces";

export const headerData: HeaderItem[] = [
  {
    id: 1,
    name: "Home",
    redirect: ROUTE_URLS.HOME,
  },
  {
    id: 2,
    name: "Projects",
    redirect: ROUTE_URLS.PROJECTS,
  },
  {
    id: 3,
    name: "Contact",
    redirect: ROUTE_URLS.CONTACT,
  },
];
