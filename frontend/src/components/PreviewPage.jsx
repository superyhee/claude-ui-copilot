import React from 'react';

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8">
        <div className="bg-white p-4 rounded-md shadow-md mb-4 md:mb-0">
          <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center mb-4">
            <span className="text-gray-500">Upload or drag your file</span>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">confirm</button>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-gray-500 mb-2">File list</h2>
          <div className="bg-gray-200 h-64 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}