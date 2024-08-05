import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 30 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 50 },
  { name: 'Jun', value: 60 },
  { name: 'Jul', value: 70 },
  { name: 'Aug', value: 80 },
  { name: 'Sep', value: 90 },
  { name: 'Oct', value: 100 },
  { name: 'Nov', value: 110 },
  { name: 'Dec', value: 120 },
];

const App = () => {
  return (
    <div className="bg-black flex h-screen">
      <div className="bg-gray-800 text-white p-4 w-64">
        <h2 className="text-lg font-bold mb-4">navigator</h2>
        {/* Add navigation links here */}
      </div>
      <div className="flex-1 p-4">
        <LineChart width={800} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default App;