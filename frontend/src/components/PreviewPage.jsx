import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const data = [
    { year: 2018, budget: 300000 },
    { year: 2019, budget: 100000 },
    { year: 2020, budget: 350000 },
    { year: 2021, budget: 380000 },
    { year: 2022, budget: 400000 },
  ];

  return (
    <div className="text-black p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Company Budget Analysis</h1>
      <div className="w-full max-w-4xl">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="budget" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-8 w-full max-w-md">
        <img src="https://placehold.co/600x400" alt="Placeholder Image" className="w-full" />
        <p className="mt-2 text-gray-700">This is a placeholder image.</p>
      </div>
    </div>
  );
}