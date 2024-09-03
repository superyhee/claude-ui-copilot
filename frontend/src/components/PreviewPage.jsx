import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <img src="https://placehold.co/100x30?text=TESLA" alt="Tesla logo" className="h-6" />
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Model S</a>
          <a href="#" className="hover:text-gray-300">Model 3</a>
          <a href="#" className="hover:text-gray-300">Model X</a>
          <a href="#" className="hover:text-gray-300">Model Y</a>
          <a href="#" className="hover:text-gray-300">Solar Roof</a>
          <a href="#" className="hover:text-gray-300">Solar Panels</a>
        </nav>
        <div className="flex space-x-4">
          <button className="hover:text-gray-300">Shop</button>
          <button className="hover:text-gray-300">Account</button>
          <button className="hover:text-gray-300">Menu</button>
        </div>
      </header>
      
      <main className="flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-5xl font-bold mb-2">Model Y</h1>
        <h2 className="text-xl mb-1">Lease starting at $399/mo*</h2>
        
        <div className="relative w-full max-w-6xl mb-8 mt-4">
          <img src="https://placehold.co/1200x600?text=Tesla+Model+Y" alt="Tesla Model Y in sleek black color against a minimalist background" className="w-full"/>
        </div>
        
        <div className="flex space-x-4 mb-8">
          <button className="bg-gray-700 text-white px-12 py-2 rounded-full hover:bg-gray-600 transition duration-300">Custom Order</button>
          <button className="bg-white text-black px-12 py-2 rounded-full hover:bg-gray-200 transition duration-300">Demo Drive</button>
        </div>

        <p className="text-sm text-gray-400 max-w-2xl">
          *Excludes taxes and fees with price subject to change. Available in select states. 
          See Details
        </p>
      </main>

      <footer className="text-center text-gray-400 text-sm p-4">
        <p>Tesla © 2023 | Privacy & Legal | Vehicle Recalls | Contact | News</p>
      </footer>
    </div>
  );
};

export default App;