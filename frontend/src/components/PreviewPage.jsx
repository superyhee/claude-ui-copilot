import React from 'react';

export default function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="bg-white py-4 px-8 flex justify-between items-center">
        <a href="#" className="text-blue-600 text-2xl font-bold">
          <img src="https://placehold.co/48x48" alt="Logo" className="h-12" />
        </a>
        <nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Register</button>
        </nav>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center">
        <div className="flex mb-8">
          <img src="https://placehold.co/48x48" alt="Avatar" className="rounded-full mr-2" />
          <img src="https://placehold.co/48x48" alt="Avatar" className="rounded-full mr-2" />
          <img src="https://placehold.co/48x48" alt="Avatar" className="rounded-full mr-2" />
          <img src="https://placehold.co/48x48" alt="Avatar" className="rounded-full mr-2" />
          <img src="https://placehold.co/48x48" alt="Avatar" className="rounded-full mr-2" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-center">The website builder you're looking for</h1>
        <p className="text-lg mb-8 text-center">Simple is a modern website builder powered by AI that changes how companies create user interfaces together.</p>
        <div className="flex mb-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md mr-4">Start Free Trial</button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md border border-blue-600">Learn More</button>
        </div>
        <div className="bg-black text-white p-8 rounded-md">
          <pre>
            npm login --registry=https://npm.pkg.github.com <br />
            --scope=@ghanatic Successfully logged-in. <br />
            <br />
            npm publish <br />
            Package published.
          </pre>
        </div>
      </main>
      <footer className="bg-gray-200 py-4 px-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Crud.com</p>
      </footer>
    </div>
  );
}