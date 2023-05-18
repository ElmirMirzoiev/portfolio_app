import {FC} from "react";
import {IconType} from "../../../DATA/MainComponenetData";
import s from "./IconsBlock.module.scss";


type IconsBlockPropsType = {
    data: IconType[]
    className?: string
}

export const IconsBlock: FC<IconsBlockPropsType> = ({data, className}) => {

    let finalIconClassName = className ? `${s.iconLink} ${className}` : s.iconLink;
    let icons = data.map(i => {
        return <a key={i.id} href={i.href} target={'_blank'} rel="noreferrer" className={finalIconClassName}>
            <i.icon />
        </a>
    })
    return (
        <div className={s.contacts}>
            {icons}
        </div>
    )
}