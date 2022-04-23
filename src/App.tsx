import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import ButtonsBar from './components/ButtonsBar/ButtonsBar';
import Screen from "./components/Screen/Screen";
import {ToolsBar} from "./components/ToolsBar/ToolsBar";
import {AppStateType} from "./bll/store";
import {
    incCounter,
    resetCounter,
    setDisplay,
    setStartValue,
    setStepValue,
    setStopValue,
    setToolsRender
} from "./bll/counter-reducer";

function App() {

    const counter = useSelector<AppStateType, number>(state => state.counter.counter)
    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const stopValue = useSelector<AppStateType, number>(state => state.counter.stopValue)
    const stepValue = useSelector<AppStateType, number>(state => state.counter.stepValue)
    const toolsRender = useSelector<AppStateType, boolean>(state => state.counter.toolsRender)
    const display = useSelector<AppStateType, boolean>(state => state.counter.display)
    const error = useSelector<AppStateType, boolean>(state => state.counter.error)

    const dispatch = useDispatch()

    const values = {startValue, stopValue, stepValue}       //упаковка параметров для упрощенной передачи в props

    const counterChangeCallback = (title: string) => {
        title === 'inc' && counter < stopValue && dispatch(incCounter(counter, stepValue))
        title === 'reset' && counter !== startValue && dispatch(resetCounter(startValue))
    }
    const buttonsBlockCallback = (title: string) => {
        if (title === 'inc' && counter < stopValue || title === 'reset' && counter !== startValue) {
            return false
        }
        return true
    }
    const changeValueCallback = (title: string, newValue: number) => {
        if (title === 'start' && newValue >= 0 && newValue < stopValue) {
            dispatch(setStartValue(newValue))
            dispatch(resetCounter(newValue))
        } else if (title === 'stop' && newValue > startValue) {
            dispatch(setStopValue(newValue))
        } else if (title === 'step' && newValue > 0) {
            dispatch(setStepValue(newValue))
        }
    }
    const toolsBarRenderHandler = () => {
        dispatch(setToolsRender(!toolsRender))
        setTimeout(() => dispatch(setDisplay(!display)), 450)
    }

    return (
        <div className={!toolsRender ? "App" : 'App AppToolsEnabled'}>

            {/*<Screen counter={counter} stopValue={stopValue} error={error} setError={setError}/>*/}
            <Screen counter={counter} stopValue={stopValue} error={error}/>
            {/*{error && <ErrorMessage/>}*/}
            <ButtonsBar counterChangeCallback={counterChangeCallback}
                        buttonsBlockCallback={buttonsBlockCallback}
                        toolsBarRenderHandler={toolsBarRenderHandler}/>

            {toolsRender && display && <ToolsBar values={values} changeValueCallback={changeValueCallback}/>}
        </div>
    );
}


export default App;
