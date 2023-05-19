import {FC} from "react";
import s from "./Skills.module.scss";
import {Skill} from "./skill/Skill";
import {BlockTitle} from "../../../common/blockTitle/BlockTitle";
import {SkillsBlockType} from "../../../DATA/BlockAboutData";

type SkillsBlockPropsType = {
    skillsData: SkillsBlockType
}
export const SkillsBlock: FC<SkillsBlockPropsType> = ({skillsData}) => {

    const skillElements = skillsData.skills.map(skill => {
        return <Skill key={skill.id}
                      title={skill.title}
                      image={skill.image}
        />
    })

    return (
        <>
            <BlockTitle title={skillsData.blockTitle.title}/>
            <div className={s.skillsItems}>
                {skillElements}
            </div>
        </>
    )
}
