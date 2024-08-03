import React from 'react';

function App() {
  return (
    <div className="bg-white">
      <header className="flex items-center justify-between px-4 py-2">
        <img src="https://placehold.co/50x50" alt="Company Logo" className="h-8" />
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Research</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Products</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Safety</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Company</a></li>
          </ul>
        </nav>
        <div className="bg-gray-200 rounded-full p-2">
          <img src="https://placehold.co/24x24" alt="Search Icon" className="h-4 w-4" />
        </div>
      </header>
      <main className="flex flex-col items-center justify-center py-16">
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-4">ChatGPT on your desktop</h1>
          <p className="text-white text-lg mb-6">Chat about email, screenshots, files, and anything on your screen.</p>
          <button className="bg-white text-purple-600 py-2 px-4 rounded-full hover:bg-purple-100">Learn more</button>
        </div>
        <div className="flex space-x-2 mt-4">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </main>
    </div>
  );
}

export default App;