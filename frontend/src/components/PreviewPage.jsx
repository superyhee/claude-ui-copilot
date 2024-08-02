import React from 'react';

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex">
        <div className="bg-white border-2 border-red-500 p-8 rounded-md mr-4">
          <p className="text-gray-600 mb-4">Upload or drag your file</p>
          <div className="flex justify-center">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">confirm</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">cancel</button>
          </div>
        </div>
        <div className="bg-white border-2 border-red-500 p-8 rounded-md">
          <p className="text-gray-600">File list</p>
        </div>
      </div>
    </div>
  );
}