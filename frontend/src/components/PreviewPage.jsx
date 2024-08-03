import React from 'react';

export default function App() {
  return (
    <div className="flex flex-col bg-white w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center p-4">
        <img src="https://placehold.co/40x40" alt="Profile picture" className="w-10 h-10 rounded-full" />
        <div className="ml-4">
          <p className="text-gray-800 font-bold">Hi, yang</p>
          <p className="text-gray-600 text-sm">buymeacoffee.com/superhew</p>
        </div>
        <button className="ml-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded-full text-sm">Share page</button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-800 font-bold text-lg">Earnings</p>
          <div className="bg-gray-200 rounded-full py-1 px-3 text-gray-800 text-sm">Last 30 days</div>
        </div>
        <p className="text-4xl font-bold text-gray-800">$0</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <div className="bg-yellow-400 w-4 h-4 rounded-full mr-2"></div>
            <p className="text-gray-600 text-sm">$0 Supporters</p>
          </div>
          <div className="flex items-center">
            <div className="bg-red-400 w-4 h-4 rounded-full mr-2"></div>
            <p className="text-gray-600 text-sm">$0 Membership</p>
          </div>
          <div className="flex items-center">
            <div className="bg-teal-400 w-4 h-4 rounded-full mr-2"></div>
            <p className="text-gray-600 text-sm">$0 Extras</p>
          </div>
        </div>
      </div>
    </div>
  );
}