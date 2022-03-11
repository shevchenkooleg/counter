import React from 'react'

type ButtonPropsType = {
    title: string
    callBack: (title:string) => void
    disabled?: boolean
}

const Button: React.FC<ButtonPropsType> = (
    {title, callBack, disabled}
) => {

    const onClickHandler = () => {
        callBack(title)
    }


    return (
        <button onClick={onClickHandler} disabled={disabled}>{title}</button>
    )
}

export default Button