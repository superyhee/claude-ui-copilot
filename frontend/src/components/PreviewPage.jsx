import React, { useState } from 'react';

export default function App() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay(prev => prev + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            value={display}
            readOnly
            className="w-full bg-gray-700 text-white text-right text-2xl p-2 rounded"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['1', '2', '3', '.', '4', '5', '6', '*', '7', '8', '9', '/', '?', '+', '-', '='].map((btn, index) => (
            <button
              key={index}
              onClick={() => btn === '=' ? handleCalculate() : btn === '?' ? handleClear() : handleClick(btn)}
              className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}