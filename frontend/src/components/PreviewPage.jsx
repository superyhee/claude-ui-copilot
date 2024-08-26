import React from 'react';
import { FaCheck, FaQuestionCircle, FaStar } from 'react-icons/fa';

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://placehold.co/50x50" alt="Company Logo" className="h-8 w-8 mr-2" />
        <span className="font-bold text-xl text-gray-800">StartupName</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">Revolutionize Your Business</h1>
      <p className="text-xl mb-8">Our innovative platform helps you streamline operations and boost productivity.</p>
      <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
        Get Started
      </button>
    </div>
  </section>
);

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    {icon}
    <h3 className="mt-4 mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
  </div>
);

const Features = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feature
          icon={<FaCheck className="text-4xl text-green-500" />}
          title="Easy Integration"
          description="Seamlessly integrate with your existing systems"
        />
        <Feature
          icon={<FaStar className="text-4xl text-yellow-500" />}
          title="Advanced Analytics"
          description="Gain valuable insights with our powerful analytics tools"
        />
        <Feature
          icon={<FaQuestionCircle className="text-4xl text-blue-500" />}
          title="24/7 Support"
          description="Our expert team is always ready to help you"
        />
      </div>
    </div>
  </section>
);

const Testimonial = ({ quote, author, role }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 italic mb-4">{quote}</p>
    <div className="flex items-center">
      <img src="https://placehold.co/40x40" alt={author} className="w-10 h-10 rounded-full mr-4" />
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const SocialProof = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Testimonial
          quote="This platform has transformed our business operations. Highly recommended!"
          author="John Doe"
          role="CEO, Tech Corp"
        />
        <Testimonial
          quote="The analytics tools are incredibly powerful. We've seen a 30% increase in productivity."
          author="Jane Smith"
          role="CTO, Innovation Inc"
        />
        <Testimonial
          quote="The customer support is outstanding. They're always there when we need them."
          author="Mike Johnson"
          role="Operations Manager, Global Solutions"
        />
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <details className="bg-white shadow-md rounded-lg">
          <summary className="cursor-pointer p-6 text-lg font-semibold">How does the platform work?</summary>
          <p className="px-6 pb-6 text-gray-600">Our platform integrates seamlessly with your existing systems, providing powerful analytics and automation tools to streamline your operations.</p>
        </details>
        <details className="bg-white shadow-md rounded-lg">
          <summary className="cursor-pointer p-6 text-lg font-semibold">Is there a free trial available?</summary>
          <p className="px-6 pb-6 text-gray-600">Yes, we offer a 14-day free trial so you can experience the full capabilities of our platform before making a commitment.</p>
        </details>
        <details className="bg-white shadow-md rounded-lg">
          <summary className="cursor-pointer p-6 text-lg font-semibold">What kind of support do you provide?</summary>
          <p className="px-6 pb-6 text-gray-600">We offer 24/7 customer support through chat, email, and phone. Our expert team is always ready to assist you with any questions or issues.</p>
        </details>
      </div>
    </div>
  </section>
);

const Banner = () => (
  <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-12">
    <div className="container mx-auto px-6 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
      <p className="text-xl mb-8">Sign up now and get 20% off your first year!</p>
      <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
        Get Started
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">We're on a mission to revolutionize business operations with our innovative platform.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">Email: info@startup.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2023 StartupName. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <SocialProof />
        <FAQ />
        <Banner />
      </main>
      <Footer />
    </div>
  );
};

export default App;