import MuiButton from '@mui/material/Button'
import React from 'react'
import s from './ButtonsBar.module.css'
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
        <div className={s.Bar}>
            <MuiButton
                variant="contained"
                size={'small'}
                color={'primary'}
                disabled={disabledHandler('inc')}
                onClick={()=>counterChangeCallback('inc')}
            >inc</MuiButton>
            <MuiButton
                variant="contained"
                size={'small'}
                sx={{margin:'5px'}}
                color={'primary'}
                disabled={disabledHandler('reset')}
                onClick={()=>counterChangeCallback('reset')}
            >reset</MuiButton>
            <MuiButton
                variant="contained"
                size={'small'}
                color={'primary'}
                onClick={()=>toolsBarRenderHandler()}
            >tools</MuiButton>
            {/*<Button title={'inc'} callBack={counterChangeCallback} disabled={disabledHandler('inc')}/>*/}
            {/*<Button title={'reset'} callBack={counterChangeCallback} disabled={disabledHandler('reset')}/>*/}
            {/*<Button title={'tools'} callBack={toolsBarRenderHandler}/>*/}
        </div>

    )
}

export default ButtonsBar