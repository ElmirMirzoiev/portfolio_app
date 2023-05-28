import s from "./MyProjects.module.scss";
import c from "../../common/styles/Container.module.scss";
import { Project } from "./project/Project";
import { BlockTitle } from "../../common/blockTitle/BlockTitle";
import { ProjectsData } from "../../DATA/ProjectsComponentData";

export const MyProjects = () => {
  const projectElements = ProjectsData.projects.map((item) => {
    return (
      <Project
        key={item.id}
        title={item.title}
        description={item.description}
        stack={item.stack}
        image={item.img}
        link={item.link}
      />
    );
  });

  return (
    <div className={s.worksBlock}>
      <div className={c.container}>
        <div className={s.worksContent}>
          <BlockTitle title={ProjectsData.blockTitle.title} />

          <div
            style={{
              color: "white",
              fontSize: "20px",
              letterSpacing: "1px",
              padding: "10px",
            }}
          >
            Page in development process.
            <hr />
            To see all my projects follow the link to
            <a
              target={"_blank"}
              rel={"noreferrer"}
              style={{ color: "white" }}
              href="https://github.com/ElmirMirzoiev"
            >
              {" "}
              GiHub{" "}
            </a>
            or you can open and download my CV in block About
          </div>

          <div className={s.projectsBlock}>{projectElements}</div>
        </div>
      </div>
    </div>
  );
};
