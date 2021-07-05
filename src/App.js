import './App.css';
import CalculatorButton from './components/CalculatorButton/CalculatorButton';
import CalculatorScreen from './components/CalculatorScreen/CalculatorScreen';
import { useState } from 'react';


function App() {
  
  const [screenVal, setScreenVal] = useState('')

  function onCalcPressHandler(char) {
    console.log(char)

    if (char === 'C') {
      setScreenVal('')
    }
    else if (char === '=') {
      setScreenVal(eval(screenVal))
    }
    else {
      setScreenVal(screenVal + char)
    }
  }

  return (
    <div className="App">
      <CalculatorScreen displayVal={screenVal}/>
      <br/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='1'/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='2'/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='3'/>
      <br/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='4'/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='5'/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='6'/>
      <br/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='7'/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='8'/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='9'/>
      <br/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='-'/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='+'/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='*'/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='/'/>
      <br/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='='/>
      <CalculatorButton onCalcPress={onCalcPressHandler} value='C'/>

    </div>
  );
}

export default App;
