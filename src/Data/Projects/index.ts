import {
  ImageUpload,
  MyTaskBoard,
  NoteCode,
  TranslateApp,
  UnsplashCollection,
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
    title: "Unsplash Collection",
    preview: UnsplashCollection,
    repository: "https://github.com/EdiedRamos/unsplash-collection",
    deployed: "https://unsplash-collection-peach.vercel.app/",
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
      {
        name: "firebase",
        Icon: Icons.firebase,
      },
      {
        name: "axios",
        Icon: Icons.axios,
      },
    ],
  },
  {
    title: "My Task Board",
    preview: MyTaskBoard,
    repository: "https://github.com/EdiedRamos/my-task-board",
    deployed: "https://my-task-board-five.vercel.app/board/my-task-board",
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
      {
        name: "firebase",
        Icon: Icons.firebase,
      },
      {
        name: "zod",
        Icon: Icons.zod,
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
    title: "Translate App",
    preview: TranslateApp,
    repository: "https://github.com/EdiedRamos/translate",
    deployed: "https://ediedramos.github.io/translate/",
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
];
