import { HeaderItem } from "@/Interfaces";
import { ROUTE_URLS } from "@/Domain/Constants/urls";

export const headerData: HeaderItem[] = [
  {
    id: 1,
    name: "about",
    redirect: ROUTE_URLS.HOME,
  },
  {
    id: 2,
    name: "skills",
    redirect: ROUTE_URLS.SKILLS,
  },
  {
    id: 3,
    name: "projects",
    redirect: ROUTE_URLS.PROJECTS,
  },
  // {
  //   id: 4,
  //   name: "contact",
  //   redirect: ROUTE_URLS.CONTACT,
  // },
];
