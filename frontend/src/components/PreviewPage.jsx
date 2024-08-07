import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2018, budget: 300000 },
  { year: 2019, budget: 100000 },
  { year: 2020, budget: 350000 },
  { year: 2021, budget: 380000 },
  { year: 2022, budget: 400000 },
];

export default function App() {
  return (
    <div className="text-black p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Company Budget Over Years</h1>
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="budget" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-gray-600 text-center max-w-2xl">
        This chart displays the company's total yearly budget from 2018 to 2022. 
        We can observe the budget trends and fluctuations over this five-year period.
      </p>
    </div>
  );
}