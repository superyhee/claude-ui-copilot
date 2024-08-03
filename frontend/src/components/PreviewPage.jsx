import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="job" className="block text-gray-700 font-bold mb-2">
            Job
          </label>
          <input
            id="job"
            type="text"
            {...register('job')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="desc" className="block text-gray-700 font-bold mb-2">
            Desc
          </label>
          <textarea
            id="desc"
            {...register('desc')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
          >
            cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;