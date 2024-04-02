import type { ProjectCardType } from "@/Types";

import { Icons } from "@/General/Icons";
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
        Icon: Icons.html,
      },
      {
        name: "css",
        Icon: Icons.css,
      },
      {
        name: "javascript",
        Icon: Icons.javascript,
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
        Icon: Icons.react,
      },
      {
        name: "redux",
        Icon: Icons.redux,
      },
      {
        name: "css",
        Icon: Icons.css,
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
        Icon: Icons.react,
      },
      {
        name: "styled",
        Icon: Icons.styled,
      },
      {
        name: "typescript",
        Icon: Icons.typescript,
      },
    ],
  },
];
