import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img src="https://placehold.co/30x30" alt="Company logo" className="inline-block mr-2" />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>Research</li>
            <li>Products</li>
            <li>Safety</li>
            <li>Company</li>
          </ul>
        </nav>
        <div>
          <img src="https://placehold.co/20x20" alt="Search icon" />
        </div>
      </header>
      
      <main className="flex-grow bg-gradient-to-br from-blue-200 via-purple-200 to-pink-300">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl font-bold mb-4 text-white">ChatGPT on your desktop</h1>
          <p className="text-xl mb-8 text-white">
            Chat about email, screenshots, files, and anything on your screen.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium">
            Learn more
          </button>
        </div>
      </main>
      
      <footer className="bg-pink-50 p-4 flex justify-center">
        <div className="flex space-x-2">
          {[0, 1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-gray-800' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;