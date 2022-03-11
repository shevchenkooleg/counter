import React from 'react'
import Button from './Button/Button'

type ButtonsBarPropsType = {
    counterChangeCallback: (title: string) => void
    buttonsBlockCallback: (title: string) => boolean
    toolsBarRenderHandler: () => void
}

const ButtonsBar: React.FC<ButtonsBarPropsType> = (
    {counterChangeCallback, buttonsBlockCallback, toolsBarRenderHandler}
) => {

    const disabledHandler = (title: string) => {
        return buttonsBlockCallback(title)
    }

    return (
        <div>
            <Button title={'inc'} callBack={counterChangeCallback} disabled={disabledHandler('inc')}/>
            <Button title={'reset'} callBack={counterChangeCallback} disabled={disabledHandler('reset')}/>
            <Button title={'tools'} callBack={toolsBarRenderHandler}/>
        </div>

    )
}

export default ButtonsBar