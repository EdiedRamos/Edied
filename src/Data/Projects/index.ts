import type { ProjectCardType } from "../../Types";

import {
  React,
  Redux,
  Css,
  ChakraUI,
  Html,
  Sass,
  Typescript,
} from "../../Resources/Icons";

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
  {
    title: "Job listings with filtering",
    description: "Frontend mentor challenge",
    repository: "https://github.com/EdiedRamos/joblistings",
    deployed: "https://joblistings-pi.vercel.app/",
    techList: [
      {
        name: "react",
        icon: React,
      },
      {
        name: "html",
        icon: Html,
      },
      {
        name: "css",
        icon: Css,
      },
    ],
  },
  {
    title: "Advice generator app",
    description: "Frontend mentor challenge",
    repository: "https://github.com/EdiedRamos/advice-generator-app",
    deployed: "https://advice-generator-app-zeta-one.vercel.app/",
    techList: [
      {
        name: "typescript",
        icon: Typescript,
      },
      {
        name: "sass",
        icon: Sass,
      },
      {
        name: "html",
        icon: Html,
      },
    ],
  },
  {
    title: "Notifications page",
    description: "Frontend mentor challenge",
    repository: "https://github.com/EdiedRamos/notification-page",
    deployed: "https://notification-page-orpin.vercel.app/",
    techList: [
      {
        name: "react",
        icon: React,
      },
      {
        name: "html",
        icon: Html,
      },
      {
        name: "sass",
        icon: Sass,
      },
    ],
  },
  {
    title: "Expenses Chart Component",
    description: "Frontend mentor challenge",
    repository: "https://github.com/EdiedRamos/expenses-chart-component",
    deployed: "https://expenses-chart-component-ecru.vercel.app/",
    techList: [
      {
        name: "react",
        icon: React,
      },
      {
        name: "html",
        icon: Html,
      },
      {
        name: "sass",
        icon: Sass,
      },
    ],
  },
  {
    title: "Four Card Feature Section",
    description: "Frontend mentor challenge",
    repository: "https://github.com/EdiedRamos/four-card-feature-section",
    deployed: "https://ediedramos.github.io/four-card-feature-section/",
    techList: [
      {
        name: "html",
        icon: Html,
      },
      {
        name: "css",
        icon: Css,
      },
    ],
  },
  {
    title: "Single Price Grid Component",
    description: "Frontend mentor challenge",
    repository: "https://github.com/EdiedRamos/single-price-grid-component",
    deployed: "https://single-price-grid-component-six-eta.vercel.app/",
    techList: [
      {
        name: "react",
        icon: React,
      },
      {
        name: "html",
        icon: Html,
      },
      {
        name: "sass",
        icon: Sass,
      },
    ],
  },
];
