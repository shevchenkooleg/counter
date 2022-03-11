import React from 'react';
import ToolItem from "./ToolItem/ToolItem";

type SettingsPropsType = {
    values: {
        startValue: number
        stopValue: number
        stepValue: number
    }
    changeValueCallback: (title: string, newValue: number) => void
}

export const ToolsBar: React.FC<SettingsPropsType> = ({values, changeValueCallback}) => {

    const changeValueHandler = (type: string, title: string, newValue?:number) => {

        if (type === 'start') {
            title === 'up'
                ? changeValueCallback('start', values.startValue + 1)
                : changeValueCallback('start', values.startValue - 1)
        } else if (type === 'stop') {
            title === 'up'
                ? changeValueCallback('stop', values.stopValue + 1)
                : changeValueCallback('stop', values.stopValue - 1)
        } else if (type === 'step') {
            title === 'up'
                ? changeValueCallback('step', values.stepValue + 1)
                : changeValueCallback('step', values.stepValue - 1)
        }
    }


    return (
        <div>
            <ToolItem type={'start'} value={values.startValue} changeValueHandler={changeValueHandler} changeValueCallback={changeValueCallback}/>
            <ToolItem type={'stop'} value={values.stopValue} changeValueHandler={changeValueHandler} changeValueCallback={changeValueCallback}/>
            <ToolItem type={'step'} value={values.stepValue} changeValueHandler={changeValueHandler} changeValueCallback={changeValueCallback}/>
        </div>
    );
};
