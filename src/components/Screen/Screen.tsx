import React from 'react'
import s from './Screen.module.css'
import ErrorMessage from "../ErrorMessage/ErrorMessage";

type ScreenPropsType = {
    counter: number
    stopValue: number
    error: boolean
    setError: (error:boolean)=>void
}

const Screen: React.FC<ScreenPropsType> = (
    {counter, stopValue,error, setError}
) => {

    const finalClass = `${s.screen} ${(counter >= stopValue) ? s.red : ''}`

    return (
        <>
            <div
                className={finalClass}>{counter}
                <span><button onClick={()=>setError(!error)}>set</button></span>
            </div>

        </>


    )
}

export default Screen