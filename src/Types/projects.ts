import type { IconType } from "react-icons";

export type TechListType = {
  name: string;
  Icon: IconType;
};

export type ProjectCardType = {
  title: string;
  preview: string;
  repository: string;
  deployed: string;
  techList: TechListType[];
};
