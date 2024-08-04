import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="flex justify-between items-center bg-white py-4 px-8">
        <div className="text-purple-600 font-bold">Logo</div>
        <div className="flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-purple-600">Home</a>
          <a href="#" className="hover:text-purple-600">Features</a>
          <a href="#" className="hover:text-purple-600">Pricing</a>
          <a href="#" className="hover:text-purple-600">Contact</a>
        </div>
      </nav>
      <div className="bg-purple-600 py-24 px-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Revolutionizing the way you work</h1>
        <p className="text-white text-lg mb-8">Our startup provides innovative solutions to streamline your business processes.</p>
        <button className="bg-white text-purple-600 py-2 px-4 rounded-md hover:bg-purple-700 hover:text-white">Get Started</button>
      </div>
      <div className="py-16 px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://placehold.co/64x64" alt="Feature 1 Icon" className="mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Feature 1</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://placehold.co/64x64" alt="Feature 2 Icon" className="mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Feature 2</h3>
            <p className="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://placehold.co/64x64" alt="Feature 3 Icon" className="mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Feature 3</h3>
            <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;