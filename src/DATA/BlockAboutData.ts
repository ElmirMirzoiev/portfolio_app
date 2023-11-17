import react from "../common/images/skills/atom.png";
// import reduxThunk from "../common/images/skills/reduxThunk.png";
import redux from "../common/images/skills/redux.png";
import TS from "../common/images/skills/typescript.png";
import JS from "../common/images/skills/js.png";
import html from "../common/images/skills/html.png";
import css from "../common/images/skills/css.png";
import sass from "../common/images/skills/sass.png";
import git from "../common/images/skills/git.png";
import material from "../common/images/skills/material.png";
import axios from "../common/images/skills/axios.png";
// import restAPI from "../common/images/skills/restAPI.png";
import postman from "../common/images/skills/postman.png";
import formik from "../common/images/skills/formik.png";
// import storybook from "../common/images/skills/Storybook.png";
import { BlockTitleType } from "./MainComponenetData";

export type SkillsBlockType = {
  blockTitle: BlockTitleType;
  skills: SkillsType;
};
type SkillItemType = {
  id: number;
  image: string;
  title: string;
};
export type SkillsType = SkillItemType[];
export type PersonalDataType = PersonalInfoArray[];

type PersonalInfoArray = string[];
type AboutBlockDataType = {
  blockTitle: BlockTitleType;
  personalInfo: PersonalDataType;
  skillsBlock: SkillsBlockType;
};

export const cvLink =
  "https://drive.google.com/file/d/1Q_uYCyFl2h1lKABV1QlSOYhNnkpK0mKl/view?usp=drive_link";

export const AboutBlockData: AboutBlockDataType = {
  blockTitle: {
    title: "About me",
  },
  personalInfo: [
    ["firstName:", "Elmir"],
    ["lastName:", "Mirzoiev"],
    ["from:", "Odessa, Ukraine"],
    ["email:", "elmir.mirzoiev@outlook.com"],
    ["phone:", "+49(170)3824624"],
    ["languages:", "English, German"],
  ],
  skillsBlock: {
    blockTitle: { title: "My Skills" },
    skills: [
      { id: 1, image: react, title: "React" },
      { id: 2, image: redux, title: "Redux" },
      { id: 3, image: TS, title: "TypeScript" },
      { id: 4, image: JS, title: "JavaScript" },
      { id: 5, image: html, title: "HTML" },
      { id: 6, image: css, title: "CSS" },
      { id: 7, image: sass, title: "SASS" },
      { id: 8, image: git, title: "Git" },
      { id: 9, image: material, title: "Material UI" },
      { id: 10, image: axios, title: "Axios" },
      { id: 11, image: postman, title: "Postman" },
      { id: 12, image: formik, title: "Formik" },
    ],
  },
};
