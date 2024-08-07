import React from 'react';

const Header = () => (
  <header className="bg-gray-800 text-white py-4">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Blog</h1>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Blog</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="bg-blue-600 text-white py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to My Personal Blog</h2>
      <p className="text-xl mb-8">Exploring ideas, sharing experiences, and learning together.</p>
      <a href="#" className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300">Read More</a>
    </div>
  </section>
);

const Introduction = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto flex items-center">
      <div className="w-1/2 pr-8">
        <img src="https://placehold.co/400x400" alt="Profile picture of the blog author" className="rounded-full" />
      </div>
      <div className="w-1/2">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="text-lg mb-4">
          Hi, I'm John Doe. I'm a passionate writer and technology enthusiast. Through this blog, I share my thoughts on various topics ranging from tech trends to personal development.
        </p>
        <a href="#" className="text-blue-600 font-bold hover:underline">Learn more about me</a>
      </div>
    </div>
  </section>
);

const BlogPost = ({ title, excerpt, date, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={`Cover image for ${title}`} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
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
    { title: "The Future of AI", excerpt: "Exploring the potential impacts of artificial intelligence on our society.", date: "May 15, 2023", imageUrl: "https://placehold.co/600x400" },
    { title: "Mastering Productivity", excerpt: "Tips and tricks to boost your daily productivity and achieve your goals.", date: "May 10, 2023", imageUrl: "https://placehold.co/600x400" },
    { title: "The Art of Mindfulness", excerpt: "How practicing mindfulness can improve your mental health and overall well-being.", date: "May 5, 2023", imageUrl: "https://placehold.co/600x400" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h3>
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
      <Introduction />
      <Blogs />
      <Footer />
    </div>
  );
}