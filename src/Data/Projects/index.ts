import type { ProjectCardType } from "../../Types";

import {
  React,
  Redux,
  Css,
  Typescript,
  StyledComponents,
} from "../../Resources/Icons";
import { CountryListing, IpTracker } from "../../Resources/Projects";

export const projectList: ProjectCardType[] = [
  {
    title: "Countries",
    preview: CountryListing,
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
    title: "IP Tracker",
    preview: IpTracker,
    repository: "https://github.com/EdiedRamos/ip-address-tracker",
    deployed: "https://ip-address-tracker-zeta-flame.vercel.app/",
    techList: [
      {
        name: "react",
        icon: React,
      },
      {
        name: "styled",
        icon: StyledComponents,
      },
      {
        name: "typescript",
        icon: Typescript,
      },
    ],
  },
];
