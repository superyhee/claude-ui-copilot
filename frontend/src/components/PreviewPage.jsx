import React from 'react';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-4 py-2 bg-white">
        <img src="https://placehold.co/40x40" alt="Company logo" className="h-10" />
        <nav>
          <ul className="flex space-x-4">
            <li>Research</li>
            <li>Products</li>
            <li>Safety</li>
            <li>Company</li>
          </ul>
        </nav>
        <div className="bg-gray-200 rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </header>
      <main className="flex-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ChatGPT on your desktop</h1>
          <p className="text-lg text-white mb-8">Chat about email, screenshots, files, and anything on your screen.</p>
          <button className="bg-white text-indigo-500 py-2 px-4 rounded-full">Learn more</button>
        </div>
      </main>
      <footer className="flex justify-center items-center space-x-4 py-4 bg-white">
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400"></div>
      </footer>
    </div>
  );
}