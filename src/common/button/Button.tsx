// import React from 'react';
import s from './Button.module.scss'


type ButtonPropsType = {
    name: string
    callback: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button = ({name, callback, className, type}:ButtonPropsType) => {

    let finalClassName = className ? `${className} ${s.button}` : s.button
    let typeOfBtn = type ? type : 'button'

    return (
        <button type={typeOfBtn} onClick={callback} className={finalClassName}>{name}</button>
    );
};
