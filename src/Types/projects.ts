type TechListType = {
  name: string;
  icon: string;
};

export type ProjectCardType = {
  title: string;
  preview: string;
  repository: string;
  deployed: string;
  techList: TechListType[];
};
