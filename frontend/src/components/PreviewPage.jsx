import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">John Doe</h1>
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#blogs" className="hover:text-gray-300">Blogs</a></li>
        <li><a href="#budget" className="hover:text-gray-300">Budget</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className="bg-blue-600 text-white py-20">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to My Blog</h2>
      <p className="text-xl mb-8">Exploring ideas, sharing knowledge, and inspiring others</p>
      <a href="#blogs" className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition duration-300">Read My Blogs</a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-gray-100">
    <div className="container mx-auto flex items-center">
      <div className="w-1/2 pr-8">
        <img src="https://placehold.co/400x400" alt="John Doe profile picture" className="rounded-full w-64 h-64 mx-auto" />
      </div>
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          Hi, I'm John Doe, a passionate writer and tech enthusiast. I love exploring new ideas and sharing my knowledge through my blog. With over 10 years of experience in the industry, I bring a unique perspective to various topics.
        </p>
        <p className="text-gray-700 mb-4">
          When I'm not writing, you can find me hiking in the mountains or experimenting with new recipes in the kitchen.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-600 hover:text-blue-700"><FaLinkedin size={24} /></a>
          <a href="#" className="text-gray-600 hover:text-gray-900"><FaGithub size={24} /></a>
        </div>
      </div>
    </div>
  </section>
);

const BlogPost = ({ title, excerpt, date, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{date}</span>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Read More</a>
      </div>
    </div>
  </div>
);

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Everyday Life",
      excerpt: "Exploring how artificial intelligence is shaping our daily routines and what to expect in the coming years.",
      date: "May 15, 2023",
      imageUrl: "https://placehold.co/600x400?text=AI+Future"
    },
    {
      id: 2,
      title: "10 Must-Visit Hidden Gems in Europe",
      excerpt: "Discover lesser-known but equally stunning destinations across Europe for your next adventure.",
      date: "April 28, 2023",
      imageUrl: "https://placehold.co/600x400?text=Europe+Travel"
    },
    {
      id: 3,
      title: "Mastering the Art of Productivity",
      excerpt: "Learn effective techniques and tools to boost your productivity and achieve your goals faster.",
      date: "April 10, 2023",
      imageUrl: "https://placehold.co/600x400?text=Productivity"
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BudgetChart = () => {
  const data = [
    { year: 2018, budget: 300000 },
    { year: 2019, budget: 100000 },
    { year: 2020, budget: 350000 },
    { year: 2021, budget: 380000 },
    { year: 2022, budget: 400000 },
  ];

  return (
    <section id="budget" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Company's Total Yearly Budget</h2>
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="budget" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2023 John Doe. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
        <a href="#" className="hover:text-gray-300">Terms of Service</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
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
      <BudgetChart />
      <Footer />
    </div>
  );
}