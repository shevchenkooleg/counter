import Button from '@mui/material/Button/Button';
import React, {useState} from 'react';
import './App.css';
import ButtonsBar from './components/ButtonsBar/ButtonsBar';
import Screen from "./components/Screen/Screen";
import {ToolsBar} from "./components/ToolsBar/ToolsBar";

function App() {

  let [startValue, setStartValue] = useState(0)
  let [stopValue, setStopValue] = useState(5)
  let [stepValue, setStepValue] = useState(1)
  let [counter, setCounter] = useState(startValue)
  let [toolsRender, setToolsRender] = useState(false)
  let [display, setDisplay] = useState(false)

  const values = {startValue, stopValue, stepValue}

  const counterChangeCallback = (title:string) => {
    title === 'inc' && counter < stopValue && setCounter(counter + stepValue)
    title === 'reset' && counter !== startValue && setCounter(startValue)
  }
  const buttonsBlockCallback = (title:string) => {
    if (title === 'inc' && counter < stopValue || title === 'reset' && counter !== startValue) {
      return false
    }
    return true
  }
  const changeValueCallback = (title:string, newValue:number) => {
    if (title === 'start') {
      setStartValue(newValue)
      setCounter(newValue)
    } else if (title === 'stop') {
      setStopValue(newValue)
    } else if (title === 'step') {
      setStepValue(newValue)
    }
  }
  const toolsBarRenderHandler = () => {
    setToolsRender(!toolsRender)
    setTimeout(()=>setDisplay(!display),450)
  }


  return (
    <div className={!toolsRender ? "App" : 'App AppToolsEnabled'}>

      <Screen counter={counter}/>
      <ButtonsBar counterChangeCallback={counterChangeCallback}
                  buttonsBlockCallback={buttonsBlockCallback}
                  toolsBarRenderHandler={toolsBarRenderHandler}/>
      {toolsRender && display && <ToolsBar values={values} changeValueCallback={changeValueCallback}/>}
    </div>
  );
}



export default App;
