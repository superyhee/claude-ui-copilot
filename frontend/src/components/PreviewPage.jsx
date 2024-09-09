import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold">TESLA</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-600">Vehicles</a>
          <a href="#" className="hover:text-gray-600">Energy</a>
          <a href="#" className="hover:text-gray-600">Charging</a>
          <a href="#" className="hover:text-gray-600">Discover</a>
          <a href="#" className="hover:text-gray-600">Shop</a>
        </nav>
        <div className="flex space-x-4">
          <button className="hover:bg-gray-200 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="hover:bg-gray-200 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="hover:bg-gray-200 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </header>

      <main className="relative">
        <img src="https://placehold.co/1920x1080.png" alt="Blue Tesla Model Y driving on a road with misty forest background" className="w-full h-screen object-cover" />
        <div className="absolute inset-0 flex flex-col justify-between p-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-2">Model Y</h1>
            <p className="text-2xl mb-1">1.99% APR Financing</p>
            <p className="text-xl">From $31,490*</p>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-20 py-2 rounded hover:bg-blue-700">
              Order Now
            </button>
            <button className="bg-gray-100 text-gray-800 px-16 py-2 rounded hover:bg-gray-200">
              Experience Model Y
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;