import React from 'react';
import Button from "../../ButtonsBar/Button/Button";

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
            <input value={value} onChange={
                (e)=> changeValueCallback(type, Number(e.currentTarget.value))}/>
            <Button title={'up'} callBack={(title) => buttonCallbackHandler(type, title)}/>
            <Button title={'down'} callBack={(title) => buttonCallbackHandler(type, title)}/>
        </div>
    );
};

export default ToolItem;