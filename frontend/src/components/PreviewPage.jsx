import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <header className="flex justify-between items-center p-4">
        <img src="https://placehold.co/40x40" alt="Company logo" className="w-10 h-10" />
        <div>
          <button className="text-gray-600 mr-4">Login</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">Register</button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 text-center mt-20">
        <div className="flex justify-center mb-6">
          {[...Array(6)].map((_, i) => (
            <img key={i} src={`https://placehold.co/40x40`} alt={`User avatar ${i+1}`} className="w-10 h-10 rounded-full -ml-2 border-2 border-white" />
          ))}
        </div>
        
        <h1 className="text-5xl font-bold mb-4">The website builder you're looking for</h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Simple is a modern website builder powered by AI that changes how companies create user interfaces together.
        </p>
        
        <div className="flex justify-center gap-4 mb-16">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg">Start Free Trial &gt;</button>
          <button className="bg-white text-gray-800 px-6 py-3 rounded-md text-lg border border-gray-300">Learn More</button>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-4 max-w-3xl mx-auto text-left">
          <div className="flex items-center mb-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm ml-2">crup.com</span>
          </div>
          <pre className="text-gray-300 font-mono text-sm">
            npm login --registry=https://npm.pkg.github.com<br/>
            --scope=@phanatic Successfully logged-in.<br/>
            <br/>
            npm publish<br/>
            Package published.
          </pre>
        </div>
      </main>
    </div>
  );
};

export default App;