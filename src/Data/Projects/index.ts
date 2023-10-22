import { ProjectCardType } from "../../Types";

import { React, Redux, Css } from "../../Resources/Icons";

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
];
