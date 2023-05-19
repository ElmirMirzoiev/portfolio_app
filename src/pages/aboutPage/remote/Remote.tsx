import s from './Remote.module.scss'
import {NavLink} from "react-router-dom"
import {Button} from "../../../common/button/Button"

export const RemoteWorkBlock = () => {
    return (
        <div className={s.remoteBlock}>
                <div className={s.remoteContent}>
                    <h3 className={s.title}>Looking into remote work</h3>
                    <NavLink to={'/contact'} className={s.link}>
                        <Button name={'Hire me'} callback={()=>{}}/>
                    </NavLink>
                </div>
        </div>
    );
};