import React, { useState } from 'react';

export default function App() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    '1', '2', '3', '.',
    '4', '5', '6', '*',
    '7', '8', '9', '/',
    'C', '+', '-', '='
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <div className="w-64 bg-pink-200 rounded-lg p-4 shadow-lg border-4 border-red-400">
        <input
          type="text"
          className="w-full mb-4 p-2 text-right text-xl bg-pink-100 border border-gray-300 rounded"
          value={display}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="bg-pink-300 hover:bg-pink-400 text-black font-bold py-2 px-4 rounded"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}