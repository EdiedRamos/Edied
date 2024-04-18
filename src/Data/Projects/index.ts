import type { ProjectCardType } from "@/Types";

import { Icons } from "@/General/Icons";
import {
  CountryListing,
  IpTracker,
  QrGenerator,
  TicTacToe,
} from "@/Resources/Projects";

export const projectList: ProjectCardType[] = [
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
    title: "Tic Tac Toe",
    preview: TicTacToe,
    repository: "https://github.com/EdiedRamos/tic-tac-toe",
    deployed: "https://tic-tac-toe-kpse.vercel.app/",
    techList: [
      {
        name: "react",
        Icon: Icons.react,
      },
      {
        name: "sass",
        Icon: Icons.sass,
      },
      {
        name: "typescript",
        Icon: Icons.typescript,
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
];
