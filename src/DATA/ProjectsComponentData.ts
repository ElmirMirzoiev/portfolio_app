import { BlockTitleType } from "./MainComponenetData";
import Todo from "../common/images/projects/todo.png";

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
  projects: [
    {
      id: 1,
      title: "ToDoList",
      description: "That is just a simple ToDoList created using Vue3",
      stack: "Vue3",
      img: Todo,
      link: "https://elmirmirzoiev.github.io/Vue3_todolist/",
    },
  ],
};
