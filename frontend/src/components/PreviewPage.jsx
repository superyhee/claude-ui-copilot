import React from 'react';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Blog</h1>
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#blogs" className="hover:text-gray-300">Blogs</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="bg-blue-600 text-white py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to My Personal Blog</h2>
      <p className="text-xl mb-8">Exploring ideas, sharing experiences, and learning together.</p>
      <a href="#blogs" className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">Read My Posts</a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-gray-100">
    <div className="container mx-auto flex items-center">
      <div className="w-1/2 pr-8">
        <img src="https://placehold.co/400x400" alt="Author's portrait" className="rounded-full shadow-lg" />
      </div>
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          Hello! I'm a passionate writer and developer with a keen interest in technology and creative writing. 
          Through this blog, I aim to share my thoughts, experiences, and learnings with you all.
        </p>
        <p className="text-gray-700">
          Feel free to explore my posts and reach out if you'd like to connect!
        </p>
      </div>
    </div>
  </section>
);

const BlogPost = ({ title, excerpt, date, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{date}</span>
        <a href="#" className="text-blue-600 hover:underline">Read more</a>
      </div>
    </div>
  </div>
);

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Everyday Life",
      excerpt: "Exploring how artificial intelligence is shaping our daily routines and what to expect in the coming years.",
      date: "May 15, 2023",
      imageUrl: "https://placehold.co/600x400?text=AI+Future"
    },
    {
      title: "10 Must-Visit Hidden Gems in Europe",
      excerpt: "Discover these lesser-known but breathtaking destinations for your next European adventure.",
      date: "April 28, 2023",
      imageUrl: "https://placehold.co/600x400?text=Europe+Travel"
    },
    {
      title: "Mastering the Art of Productivity",
      excerpt: "Tips and tricks to boost your efficiency and achieve more in less time.",
      date: "April 10, 2023",
      imageUrl: "https://placehold.co/600x400?text=Productivity"
    }
  ];

  return (
    <section id="blogs" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2023 My Personal Blog. All rights reserved.</p>
      <div className="mt-4">
        <a href="#" className="text-gray-400 hover:text-white mx-2">Twitter</a>
        <a href="#" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
        <a href="#" className="text-gray-400 hover:text-white mx-2">GitHub</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Blogs />
      <Footer />
    </div>
  );
}