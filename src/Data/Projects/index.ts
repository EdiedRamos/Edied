import {
  Boardify,
  CountryQuiz,
  GithubProfile,
  GuessTheWord,
  ImageUpload,
  IpTracker,
  MusicPlayer,
  NoteCode,
  QrGenerator,
  TicTacToe,
  UrlShortener,
  WorldRanks,
} from "@/Resources/Projects";

import { Icons } from "@/General/Icons";
import type { ProjectCardType } from "@/Types";

export const projectList: ProjectCardType[] = [
  {
    title: "Image Upload",
    preview: ImageUpload,
    repository: "https://github.com/EdiedRamos/image-upload",
    deployed: "https://image-upload-azure.vercel.app/uploader",
    techList: [
      {
        name: "nextjs",
        Icon: Icons.nextjs,
      },
      {
        name: "typescript",
        Icon: Icons.typescript,
      },
      {
        name: "tailwind",
        Icon: Icons.tailwind,
      },
    ],
  },
  {
    title: "Code Sharing App",
    preview: NoteCode,
    repository: "https://github.com/EdiedRamos/notecode-frontend",
    deployed: "https://notecode-frontend.vercel.app/",
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
        name: "tailwind",
        Icon: Icons.tailwind,
      },
      {
        name: "nodejs",
        Icon: Icons.nodejs,
      },
      {
        name: "expresjs",
        Icon: Icons.express,
      },
      {
        name: "firebase",
        Icon: Icons.firebase,
      },
    ],
  },
  {
    title: "World Ranks",
    preview: WorldRanks,
    repository: "https://github.com/EdiedRamos/country-page",
    deployed: "https://country-page-phi.vercel.app/countries",
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
        name: "redux",
        Icon: Icons.redux,
      },
      {
        name: "axios",
        Icon: Icons.axios,
      },
      {
        name: "tailwind",
        Icon: Icons.tailwind,
      },
    ],
  },
  {
    title: "Github Profile",
    preview: GithubProfile,
    repository: "https://github.com/EdiedRamos/github-profile",
    deployed: "https://github-profile-five-tau.vercel.app/",
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
        name: "tailwind",
        Icon: Icons.tailwind,
      },
    ],
  },
  {
    title: "Boardify",
    preview: Boardify,
    repository: "https://github.com/EdiedRamos/boardify",
    deployed: "https://boardify-psi.vercel.app/",
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
        name: "chakraui",
        Icon: Icons.chakraui,
      },
    ],
  },
  {
    title: "Guess The Word",
    preview: GuessTheWord,
    repository: "https://github.com/EdiedRamos/guess-the-word",
    deployed: "https://ediedramos.github.io/guess-the-word/",
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
    title: "Url Shortener",
    preview: UrlShortener,
    repository: "https://github.com/EdiedRamos/url-shortening-api-landing-page",
    deployed: "https://url-shortening-api-landing-page-tawny.vercel.app/",
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
    title: "Music Player",
    preview: MusicPlayer,
    repository: "https://github.com/EdiedRamos/music-player",
    deployed: "https://ediedramos.github.io/music-player/",
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
        name: "typescript",
        Icon: Icons.typescript,
      },
      {
        name: "styled",
        Icon: Icons.styled,
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
