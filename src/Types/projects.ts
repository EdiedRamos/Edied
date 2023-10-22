type TechListType = {
  name: string;
  icon: string;
};

export type ProjectCardType = {
  title: string;
  description: string;
  repository: string;
  deployed: string;
  techList: TechListType[];
};
