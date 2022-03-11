import React, {useState} from 'react';
import Button from "../../ButtonsBar/Button/Button";

type ToolItemPropsType = {
    title: string
    value: number
    callBack: () => void
}

const ToolItem:React.FC<ToolItemPropsType> = ({title, value}) => {

    let [state, setState] = useState(value)


    return (
        <div>
            {title}
            <input value={state} onChange={(e) =>
                setState(Number(e.currentTarget.value))}/>
            <Button title={'up'} callBack={()=>{}}/>
            <Button title={'down'} callBack={()=>{}}/>
        </div>
    );
};

export default ToolItem;