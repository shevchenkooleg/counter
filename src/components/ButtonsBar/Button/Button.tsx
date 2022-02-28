import React from 'react'

type ButtonPropsType = {
    title: string
    counterChangeCallback: (title:string) => void
    buttonsBlockCallback: (title:string) => boolean
}

const Button: React.FC<ButtonPropsType> = (
    {title, counterChangeCallback, buttonsBlockCallback}
) => {

    const onClickHandler = () => {
        counterChangeCallback(title)
    }


    return (
        <button onClick={onClickHandler} disabled={buttonsBlockCallback(title)}>{title}</button>
    )
}

export default Button