import React, { useState } from 'react';

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Blog Post 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '2023-05-01',
      imageSrc: 'https://placehold.co/600x400?text=Blog+Image+1'
    },
    {
      id: 2,
      title: 'Blog Post 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '2023-04-15',
      imageSrc: 'https://placehold.co/600x400?text=Blog+Image+2'
    },
    {
      id: 3,
      title: 'Blog Post 3',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      date: '2023-03-25',
      imageSrc: 'https://placehold.co/600x400?text=Blog+Image+3'
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold text-gray-800">
          <img src="https://placehold.co/30x30?text=Logo" alt="Company logo" className="inline-block mr-2" />
          My Personal Blog
        </div>
        <nav>
          <ul className="flex space-x-6 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-4 text-white">Welcome to My Personal Blog</h1>
            <p className="text-xl mb-8 text-gray-300">Explore my thoughts and experiences</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img src="https://placehold.co/800x600?text=Profile+Image" alt="Profile Image" className="mx-auto rounded-lg shadow-md" />
        </section>

        <section className="container mx-auto px-4 py-10">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Recent Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={blog.imageSrc} alt={`Blog Image ${blog.id}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <div className="text-sm text-gray-500">{blog.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 p-4 flex justify-center">
        <div className="flex space-x-2">
          {[0, 1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-white' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;