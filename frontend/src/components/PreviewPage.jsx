import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 },
  { name: 'Jul', value: 349 },
  { name: 'Aug', value: 430 },
  { name: 'Sep', value: 601 },
];

export default function App() {
  return (
    <div className="flex h-screen bg-green-100 p-4">
      <div className="flex w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/4 border-r border-gray-200 p-4">
          <h2 className="text-xl font-semibold mb-4">navigator</h2>
        </div>
        <div className="w-3/4 p-4">
          <h2 className="text-xl font-semibold mb-4">Chart</h2>
          <ResponsiveContainer width="100%" height={400}>
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