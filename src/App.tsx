import React, {useEffect, useState} from 'react';
import './App.css';
import ButtonsBar from './components/ButtonsBar/ButtonsBar';
import Screen from "./components/Screen/Screen";
import {ToolsBar} from "./components/ToolsBar/ToolsBar";

function App() {

    const getStartValueFromLS = () => {
        const startValueLS = localStorage.getItem('counterStartValue')
        return startValueLS ? Number(startValueLS) : 0
    }

    let [startValue, setStartValue] = useState(getStartValueFromLS)
    let [stopValue, setStopValue] = useState(5)
    let [stepValue, setStepValue] = useState(1)
    let [counter, setCounter] = useState(startValue)
    let [toolsRender, setToolsRender] = useState(false)
    let [display, setDisplay] = useState(false)
    let [error, setError] = useState(false)

    useEffect(() => {
        getFromLocalStorage()
    }, [])
    useEffect(() => {
        setToLocalStorage()
        setCounter(startValue)

    }, [startValue, stopValue, stepValue])

    const setToLocalStorage = () => {
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
        localStorage.setItem('counterStopValue', JSON.stringify(stopValue))
        localStorage.setItem('counterStepValue', JSON.stringify(stepValue))
    }

    const getFromLocalStorage = () => {
        let restoreStartValue = localStorage.getItem('counterStartValue')
        if (restoreStartValue) {
            setStartValue(JSON.parse(restoreStartValue))
        }
        let restoreStopValue = localStorage.getItem('counterStopValue')
        if (restoreStopValue) {
            setStopValue(JSON.parse(restoreStopValue))
        }
        let restoreStepValue = localStorage.getItem('counterStepValue')
        if (restoreStepValue) {
            setStepValue(JSON.parse(restoreStepValue))
        }

    }

    const values = {startValue, stopValue, stepValue}

    const counterChangeCallback = (title: string) => {
        title === 'inc' && counter < stopValue && setCounter(counter + stepValue)
        title === 'reset' && counter !== startValue && setCounter(startValue)
    }
    const buttonsBlockCallback = (title: string) => {
        if (title === 'inc' && counter < stopValue || title === 'reset' && counter !== startValue) {
            return false
        }
        return true
    }
    const changeValueCallback = (title: string, newValue: number) => {
        if (title === 'start' && newValue >= 0 && newValue < stopValue) {
            setStartValue(newValue)
            setCounter(newValue)
        } else if (title === 'stop' && newValue > startValue) {
            setStopValue(newValue)
        } else if (title === 'step' && newValue > 0) {
            setStepValue(newValue)
        }
    }
    const toolsBarRenderHandler = () => {
        setToolsRender(!toolsRender)
        setTimeout(() => setDisplay(!display), 450)
    }


    return (
        <div className={!toolsRender ? "App" : 'App AppToolsEnabled'}>

            <Screen counter={counter} stopValue={stopValue} error={error} setError={setError}/>
            {/*{error && <ErrorMessage/>}*/}
            <ButtonsBar counterChangeCallback={counterChangeCallback}
                        buttonsBlockCallback={buttonsBlockCallback}
                        toolsBarRenderHandler={toolsBarRenderHandler}/>

            {toolsRender && display && <ToolsBar values={values} changeValueCallback={changeValueCallback}/>}
        </div>
    );
}


export default App;
