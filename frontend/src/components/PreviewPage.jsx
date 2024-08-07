import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', value: 0 },
  { name: 'B', value: 10 },
  { name: 'C', value: 15 },
  { name: 'D', value: 30 },
  { name: 'E', value: 50 },
];

export default function App() {
  return (
    <div className="bg-black text-white p-4 flex h-screen">
      <div className="w-1/4 mr-4">
        <div className="border border-white p-2 mb-2">
          <h2 className="text-lg">navigator</h2>
        </div>
        {['menu1', 'menu1', 'menu1'].map((item, index) => (
          <div key={index} className="border border-white p-2 mb-2">
            <h3>{item}</h3>
          </div>
        ))}
      </div>
      <div className="w-3/4 border border-white p-4">
        <h2 className="text-lg mb-4">Chart</h2>
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#fff" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}