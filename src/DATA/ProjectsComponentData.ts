import { BlockTitleType } from "./MainComponenetData";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  stack: string;
  img: string;
  link: string;
};
export type ProjectsDataType = {
  blockTitle: BlockTitleType;
  projects: ProjectType[];
};

export const ProjectsData: ProjectsDataType = {
  blockTitle: { title: "My projects" },
  projects: [],
};
