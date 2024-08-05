import React from 'react';

const App = () => {
  return (
    <div className="bg-green-200 p-4">
      <h1 className="text-lg font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 border border-gray-400 rounded">
          <p className="text-gray-500">blog1...</p>
        </div>
        <div className="bg-white p-4 border border-gray-400 rounded">
          <p className="text-gray-500">blog2...</p>
        </div>
        <div className="bg-white p-4 border border-gray-400 rounded">
          <p className="text-gray-500">blog3...</p>
        </div>
        <div className="bg-white p-4 border border-gray-400 rounded">
          <p className="text-gray-500">blog4...</p>
        </div>
      </div>
    </div>
  );
};

export default App;