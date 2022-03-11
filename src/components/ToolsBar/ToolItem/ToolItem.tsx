import React from 'react';
import Button from "../../ButtonsBar/Button/Button";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import IconButton from '@mui/material/IconButton';
import s from './ToolItem.module.css'


type ToolItemPropsType = {
    type: string
    value: number
    changeValueHandler: (type: string, title: string) => void
    changeValueCallback:(title: string, newValue: number) => void
}

const ToolItem: React.FC<ToolItemPropsType> = ({type, value,changeValueHandler,changeValueCallback}) => {

    const buttonCallbackHandler = (type:string, title:string) => {
        changeValueHandler(type, title)
    }

    return (
        <div>
            {type}
            <input className={s.toolInput} value={value} onChange={
                (e)=> changeValueCallback(type, Number(e.currentTarget.value))}/>
            {/*<Button title={'up'} callBack={(title) => buttonCallbackHandler(type, title)}/>*/}
            {/*<Button title={'down'} callBack={(title) => buttonCallbackHandler(type, title)}/>*/}
            <IconButton
                aria-label="up"
                sx={{padding: '1px 0px 1px 5px'}}
                onClick={(title) => buttonCallbackHandler(type, 'up')}>
                <ArrowCircleUpIcon/>
            </IconButton>
            <IconButton
                aria-label="down"
                sx={{padding: '0 0 0 0'}}
                onClick={(title) => buttonCallbackHandler(type, 'down')}>
                <ArrowCircleDownIcon/>
            </IconButton>
        </div>
    );
};

export default ToolItem;