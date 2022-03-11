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

    // const settingsTools = ['start', 'stop', 'step']

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
        // <div>
        //     {settingsTools.map(el, num => {
        //
        //         return (
        //             <div>
        //                 {el}
        //                 <input value={values.startValue} onChange={(e) =>
        //                     changeValueCallback(el, Number(e.currentTarget.value))}/>
        //                 <Button title={'up'} callBack={(title) => changeValue(el, title)}/>
        //                 <Button title={'down'} callBack={(title) => changeValue(el, title)}/>
        //             </div>
        //         )
        //     })}
        //
        // </div>
        <div>
            <ToolItem type={'start'} value={values.startValue} changeValueHandler={changeValueHandler}/>
            <ToolItem type={'stop'} value={values.stopValue} changeValueHandler={changeValueHandler}/>
            <ToolItem type={'step'} value={values.stepValue} changeValueHandler={changeValueHandler}/>

            {/*<div>*/}
            {/*    {'Start'}*/}
            {/*     <input value={values.startValue} onChange={(e) =>*/}
            {/*                        changeValueCallback('start', Number(e.currentTarget.value))}/>*/}
            {/*    <Button title={'up'} callBack={(title) => changeValue('start', title)}/>*/}
            {/*    <Button title={'down'} callBack={(title) => changeValue('start', title)}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {'Stop'}*/}
            {/*    <input value={values.stopValue} onChange={(e) =>*/}
            {/*        changeValueCallback('stop', Number(e.currentTarget.value))}/>*/}
            {/*    <Button title={'up'} callBack={(title) => changeValue('stop', title)}/>*/}
            {/*    <Button title={'down'} callBack={(title) => changeValue('stop', title)}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {'Step'}*/}
            {/*    <input value={values.stepValue} onChange={(e) =>*/}
            {/*        changeValueCallback('step', Number(e.currentTarget.value))}/>*/}
            {/*    <Button title={'up'} callBack={(title) => changeValue('step', title)}/>*/}
            {/*    <Button title={'down'} callBack={(title) => changeValue('step', title)}/>*/}
            {/*</div>*/}
        </div>
    );
};
