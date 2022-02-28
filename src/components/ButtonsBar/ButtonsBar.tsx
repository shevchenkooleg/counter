import React from 'react'
import Button from './Button/Button'

type ButtonsBarPropsType = {
    counterChangeCallback: (title:string) => void
    buttonsBlockCallback: (title:string) => boolean
}


const ButtonsBar: React.FC<ButtonsBarPropsType> = (
    {counterChangeCallback, buttonsBlockCallback}
) => {
    return(
        <div>
            <Button title={'inc'} counterChangeCallback={counterChangeCallback} buttonsBlockCallback={buttonsBlockCallback}/>
            <Button title={'reset'} counterChangeCallback={counterChangeCallback} buttonsBlockCallback={buttonsBlockCallback}/>
        </div>

    )
}

export default ButtonsBar