import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <input
          type="number"
          placeholder="Enter number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleAddition}>Addition (+)</button>
        <button onClick={handleSubtraction}>Subtraction (-)</button>
        <button onClick={handleMultiplication}>Multiplication (*)</button>
        <button onClick={handleDivision}>Division (/)</button>
      </div>
      <div>
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
}

export default Calculator;
