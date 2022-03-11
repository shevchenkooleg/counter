import React from 'react';
import Button from "../../ButtonsBar/Button/Button";

type ToolItemPropsType = {
    type: string
    value: number
    changeValueHandler: (type: string, title: string) => void
}

const ToolItem: React.FC<ToolItemPropsType> = ({type, value,changeValueHandler}) => {

    const buttonCallbackHandler = (type:string, title:string) => {
        changeValueHandler(type, title)

        // console.log(type)
        // console.log(title)
    }

    return (
        <div>
            {type}
            <input value={value} />
            <Button title={'up'} callBack={(title) => buttonCallbackHandler(type, title)}/>
            <Button title={'down'} callBack={(title) => buttonCallbackHandler(type, title)}/>
        </div>
    );
};

export default ToolItem;