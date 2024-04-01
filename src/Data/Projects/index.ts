import type { ProjectCardType } from "@/Types";

import {
  Css,
  Html,
  Javascript,
  React,
  Redux,
  StyledComponents,
  Typescript,
} from "@/Resources/Icons";

import { CountryListing, IpTracker, QrGenerator } from "@/Resources/Projects";

export const projectList: ProjectCardType[] = [
  {
    title: "QR Generator",
    preview: QrGenerator,
    repository: "https://github.com/EdiedRamos/qr-generator",
    deployed: "https://ediedramos.github.io/qr-generator/",
    techList: [
      {
        name: "html",
        icon: Html,
      },
      {
        name: "css",
        icon: Css,
      },
      {
        name: "javascript",
        icon: Javascript,
      },
    ],
  },
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
