import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [fontSize, setFontSize] = useState("initial"); // State for dynamic font size

  useEffect(() => {
    // Adjust the font size based on the result length
    const adjustFontSize = () => {
      const length = result.length;
      if (length > 20) {
        setFontSize("8px");
      } else if (length > 5) {
        setFontSize("15px");
      } else {
        setFontSize("initial"); // Reset to default font size
      }
    };

    adjustFontSize();
  }, [result]); // Run whenever the result changes

  const addToText = (symbol) => {
    // If result is not empty and text is empty, start new calculation from result
    if (result && !text) {
      setText(result + symbol);
      setResult(""); // Optionally clear the result
    } else {
      setText(text + symbol);
    }
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      let evaluationResult = eval(text);

      // Determine if the result needs to be in exponential notation
      if (evaluationResult.toString().length > 15) {
        // Convert large numbers to exponential notation
        setResult(evaluationResult.toExponential(3));
      } else if (evaluationResult.toString().includes('.')) {
        // For floating point numbers, limit to at most 3 decimal places
        let roundedResult = parseFloat(evaluationResult.toFixed(3));
        setResult(roundedResult.toString());
      } else {
        // For other numbers, just convert to string
        setResult(evaluationResult.toString());
      }

      setText(""); // Optionally clear the input text
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setText("");
    setResult("");
  };

  
  return (
    <div className="App">
      <div className="calc-wrapper">
      <Input text={text} result={result} fontSize={fontSize}/>
        <div className="Row" >
        <Button symbol="7" handleClick={() => addToText("7")}/>
        <Button symbol="8" handleClick={() => addToText("8")}/>
        <Button symbol="9" handleClick={() => addToText("9")}/>
        <Button symbol="/" color="green" handleClick={() => addToText("/")}/>
        </div>
        <div className="Row" >
        <Button symbol="4" handleClick={() => addToText("4")}/>
        <Button symbol="5" handleClick={() => addToText("5")}/>
        <Button symbol="6" handleClick={() => addToText("6")}/>
        <Button symbol="*" color="green" handleClick={() => addToText("*")}/>
        </div>
        
        <div className="Row" >
        <Button symbol="1" handleClick={() => addToText("1")}/>
        <Button symbol="2" handleClick={() => addToText("2")}/>
        <Button symbol="3" handleClick={() => addToText("3")}/>
        <Button symbol="+" color="green" handleClick={() => addToText("+")}/>
        </div>
        <div className="Row" >
        <Button symbol="0" handleClick={() => addToText("0")}/>
        <Button symbol="." handleClick={() => addToText(".")}/>
        <Button symbol="=" handleClick={calculateResult}/>
        <Button symbol="-" color="green" handleClick={() => addToText("-")}/>
        </div>
        
          <Button symbol="Clear" color="red" handleClick={clearInput}/>
        
      </div>
    </div>
  );
}

export default App;