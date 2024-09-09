import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function App() {
  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(display).toString();
        setDisplay(result);
        setHistory([...history, { expression: display, result }]);
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else if (value === 'sin' || value === 'cos' || value === 'tan') {
      setDisplay(display + value + '(');
    } else if (value === 'log' || value === 'sqrt') {
      setDisplay(display + value + '(');
    } else if (value === 'π') {
      setDisplay(display + Math.PI);
    } else if (value === 'e') {
      setDisplay(display + Math.E);
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    'sin', 'cos', 'tan', '(',
    'log', 'sqrt', 'π', ')',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', 'C', '+',
    'e', '^', '=', 'x'
  ];

  const chartData = history.map((item, index) => ({
    name: `Calc ${index + 1}`,
    value: parseFloat(item.result)
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-8">
      <div className="w-96 bg-white rounded-xl p-6 shadow-2xl">
        <input
          type="text"
          className="w-full mb-4 p-3 text-right text-2xl bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={display}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2 mb-4">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Calculation History</h3>
          <ul className="max-h-40 overflow-y-auto">
            {history.map((item, index) => (
              <li key={index} className="text-sm text-gray-600">
                {item.expression} = {item.result}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 bg-white p-4 rounded-xl shadow-xl">
        <h3 className="text-lg font-semibold mb-2">Result Trend</h3>
        <LineChart width={400} height={200} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
}