import React, {useState} from 'react';
import './App.css';
import ButtonsBar from './components/ButtonsBar/ButtonsBar';
import Screen from "./components/Screen/Screen";

function App() {

  const startValue = 0
  const stopValue = 5
  const stepValue = 1

  let [counter, setCounter] = useState(startValue)

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


  return (
    <div className="App">
      <Screen counter={counter}/>
      <ButtonsBar counterChangeCallback={counterChangeCallback} buttonsBlockCallback={buttonsBlockCallback}/>
    </div>
  );
}

export default App;
