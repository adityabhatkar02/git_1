import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  
  // Handle button clicks
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle equal button to evaluate expression
  const handleEqual = () => {
    try {
      // Replace percentage operator "%" with "/100" for calculation
      const updatedInput = input.replace(/%/g, '/100');
      setInput(eval(updatedInput).toString()); // Use eval to evaluate the expression
    } catch (error) {
      setInput('Error');
    }
  };
  
  // Handle clear button to reset input
  const handleClear = () => {
    setInput('');
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
        
        <button onClick={() => handleClick('%')}>%</button> {/* Add the percentage button */}
        
        <button className="clear" onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default App;
