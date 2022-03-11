import React from 'react'
import s from './Screen.module.css'

type ScreenPropsType = {
    counter: number
}

const Screen: React.FC<ScreenPropsType> = (
    {counter}
) => {
    return (
        <div className={s.screen}>{counter}</div>
    )
}

export default Screen