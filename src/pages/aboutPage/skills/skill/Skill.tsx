import s from './Skill.module.scss'



type SkillComponentPropsType = {
    title: string
    image: string
}

export const Skill = ({title, image}:SkillComponentPropsType) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.imageBlock}>
                <img src={image} alt="react"/>
            </div>
            <span className={s.title}>{title}</span>
        </div>
    );
};