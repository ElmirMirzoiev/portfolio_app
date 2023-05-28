import s from "./Project.module.scss";
import { Button } from "../../../common/button/Button";

type ProjectPropsType = {
  title: string;
  description: string;
  image: string;
  stack: string;
  link: string;
};

export const Project = ({
  title,
  description,
  image,
  stack,
  link,
}: ProjectPropsType) => {
  return (
    <div className={s.projectBlock}>
      <div className={s.frontImage}>
        <img src={image} alt={title} />
        <h3 className={s.title}>{title}</h3>
      </div>
      <div className={s.backBlock}>
        <span className={s.description}>{description}</span>
        <span className={s.stack}>{stack}</span>
        <a href={link} target={"_blank"} rel={"noreferrer"}>
          <Button name={"Open"} callback={() => {}} />
        </a>
      </div>
    </div>
  );
};
