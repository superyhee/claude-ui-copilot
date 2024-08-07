import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 15 },
  { name: 'C', value: 20 },
  { name: 'D', value: 35 },
  { name: 'E', value: 60 },
];

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="w-4/5 h-4/5 bg-white border-4 border-green-500 rounded-lg flex p-4">
        <div className="w-1/4 bg-blue-200 rounded-lg mr-4 flex items-center justify-center">
          <span className="text-gray-700">navigator</span>
        </div>
        <div className="w-3/4 bg-red-200 rounded-lg flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#000000" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}