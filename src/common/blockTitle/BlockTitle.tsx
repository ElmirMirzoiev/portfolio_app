import React, {FC} from 'react';
import s from "./BlockTitle.module.scss";

type BlockTitlePropsType = {
    introText?: string
    title: string
}

export const BlockTitle: FC<BlockTitlePropsType> = ({introText, title}) => {
    return (
        <>
            <p className={s.titleIntro}>{introText}</p>
            <h1 className={s.mainTitle}>{title}</h1>
            <div className={s.animatedBar}/>
        </>
    );
};
