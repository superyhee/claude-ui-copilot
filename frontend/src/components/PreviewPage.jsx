import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white text-black">
      <header className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">TESLA</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-600">Vehicles</a>
          <a href="#" className="hover:text-gray-600">Energy</a>
          <a href="#" className="hover:text-gray-600">Charging</a>
          <a href="#" className="hover:text-gray-600">Discover</a>
          <a href="#" className="hover:text-gray-600">Shop</a>
        </nav>
        <div className="flex space-x-4">
          <button className="hover:text-gray-600">?</button>
          <button className="hover:text-gray-600">🌐</button>
          <button className="hover:text-gray-600">👤</button>
        </div>
      </header>
      
      <main className="flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-6xl font-bold mb-2">Model Y</h1>
        <h2 className="text-2xl mb-1">1.99% APR Financing</h2>
        <p className="text-lg mb-8">From $31,490*</p>
        
        <div className="relative w-full max-w-5xl mb-8">
          <img src="https://placehold.co/1200x600/sky/white?text=Tesla+Model+Y" alt="Tesla Model Y driving on a road with a forested background" className="w-full rounded-lg shadow-lg"/>
        </div>
        
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700">Order Now</button>
          <button className="bg-white text-black px-8 py-2 rounded border border-gray-300 hover:bg-gray-100">Demo Drive</button>
        </div>
      </main>
    </div>
  );
};

export default App;