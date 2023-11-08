import { ProjectCardType } from "../../Types";

import { React, Redux, Css, ChakraUI } from "../../Resources/Icons";

export const projectList: ProjectCardType[] = [
  {
    title: "Countries",
    description: "It's a project made for FrontendMentor challenges.",
    repository: "https://github.com/EdiedRamos/countries",
    deployed: "https://countries-two-rho.vercel.app/",
    techList: [
      {
        name: "react",
        icon: React,
      },
      {
        name: "redux",
        icon: Redux,
      },
      {
        name: "css",
        icon: Css,
      },
    ],
  },
  {
    title: "Créditos",
    description: "It's a project for managing doubts",
    repository: "https://github.com/EdiedRamos/creditos",
    deployed: "https://creditos.vercel.app/",
    techList: [
      {
        name: "react",
        icon: React,
      },
      {
        name: "redux",
        icon: Redux,
      },
      {
        name: "chackra-ui",
        icon: ChakraUI,
      },
      {
        name: "css",
        icon: Css,
      },
    ],
  },
];
