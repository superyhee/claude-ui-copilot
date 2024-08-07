import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <div className="bg-gray-200 rounded p-2 mb-4 text-right text-2xl font-bold">{display}</div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === '/' ? performOperation(btn) : inputDigit(parseInt(btn)))}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              {btn}
            </button>
          ))}
          {['4', '5', '6', '*'].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === '*' ? performOperation(btn) : inputDigit(parseInt(btn)))}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              {btn}
            </button>
          ))}
          {['1', '2', '3', '-'].map((btn) => (
            <button
              key={btn}
              onClick={() => (btn === '-' ? performOperation(btn) : inputDigit(parseInt(btn)))}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              {btn}
            </button>
          ))}
          <button onClick={() => inputDigit(0)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">0</button>
          <button onClick={inputDecimal} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">.</button>
          <button onClick={() => performOperation('=')} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">=</button>
          <button onClick={() => performOperation('+')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">+</button>
        </div>
        <button onClick={clear} className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Clear</button>
      </div>
    </div>
  );
};

export default Calculator;