import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  // Handle button clicks for regular inputs
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle equal button to evaluate expression
  const handleEqual = () => {
    try {
      setInput(eval(input).toString()); // Use eval to evaluate the expression
    } catch (error) {
      setInput('Error');
    }
  };

  // Handle clear button to reset input
  const handleClear = () => {
    setInput('');
  };

  // Increment the current value by 2
  const handleIncrementBy2 = () => {
    try {
      setInput((parseFloat(input) + 2).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Calculate the square of the current value
  const handleSquare = () => {
    try {
      setInput((Math.pow(parseFloat(input), 2)).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Calculate the square root of the current value
  const handleSquareRoot = () => {
    try {
      setInput((Math.sqrt(parseFloat(input))).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {input || "0"}
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick('+')}>+</button>

        {/* Advanced functions */}
        <button onClick={handleIncrementBy2}>+2</button> {/* Increment by 2 */}
        <button onClick={handleSquare}>x²</button> {/* Square */}
        <button onClick={handleSquareRoot}>√</button> {/* Square Root */}

        <button className="clear" onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default App;
