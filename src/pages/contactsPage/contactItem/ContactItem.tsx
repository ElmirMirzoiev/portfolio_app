import {FC} from "react";
import s from './ContactItem.module.scss';

type MyContactsPropsType = {
    title: string
    text: string
    children: React.ReactNode
}
export const ContactItem: FC<MyContactsPropsType> = ({title, text, children}) => {


    return (
        <div className={s.myContactsBlock}>
            <div className={s.icon}>
                {children}
            </div>
            <div className={s.contactItem}>
                <h3>{title}</h3>
                <span>{text}</span>
            </div>
        </div>
    )
}