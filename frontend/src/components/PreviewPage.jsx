import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 15 },
  { name: 'Mar', value: 20 },
  { name: 'Apr', value: 35 },
  { name: 'May', value: 60 },
];

const navItems = ['Dashboard', 'Analytics', 'Reports', 'Settings'];

export default function App() {
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
      <div className="w-11/12 h-5/6 bg-white shadow-2xl rounded-xl flex p-6 space-x-6">
        <div className="w-1/4 bg-gray-50 rounded-lg shadow-inner p-4">
          <div className="mb-8">
            <img src="https://placehold.co/100x100" alt="User avatar" className="w-24 h-24 rounded-full mx-auto" />
            <h2 className="text-center mt-2 text-xl font-semibold text-gray-700">John Doe</h2>
          </div>
          <nav>
            {navItems.map((item) => (
              <button
                key={item}
                className={`w-full text-left py-2 px-4 rounded-md mb-2 transition-colors ${
                  activeNav === item ? 'bg-green-500 text-white' : 'text-gray-600 hover:bg-green-100'
                }`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <div className="w-3/4 rounded-lg flex flex-col">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Sales Dashboard</h1>
          <div className="flex-grow bg-white rounded-lg shadow-md p-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#4ade80" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}