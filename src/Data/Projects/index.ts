import type { ProjectCardType } from "@/Types";

import { Icons } from "@/General/Icons";
import {
  CountryQuiz,
  IpTracker,
  QrGenerator,
  TicTacToe,
} from "@/Resources/Projects";

export const projectList: ProjectCardType[] = [
  {
    title: "Country Quiz",
    preview: CountryQuiz,
    repository: "https://github.com/EdiedRamos/country-quiz",
    deployed: "https://country-quiz-mu.vercel.app/",
    techList: [
      {
        name: "react",
        Icon: Icons.react,
      },
      {
        name: "typescript",
        Icon: Icons.typescript,
      },
      {
        name: "sass",
        Icon: Icons.sass,
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
