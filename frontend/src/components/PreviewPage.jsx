import React from 'react';
import { useState } from 'react';

const Header = () => (
  <header className="bg-white shadow-md py-4">
    <div className="container mx-auto flex justify-between items-center">
      <img src="https://placehold.co/150x50" alt="Startup Logo" className="h-8" />
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-blue-500">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-500">Features</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-500">Testimonials</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-500">FAQ</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Revolutionize Your Business with Our Startup</h1>
      <p className="text-xl mb-8">We provide innovative solutions to help your business grow and succeed.</p>
      <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
        Get Started
      </button>
    </div>
  </section>
);

const Features = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Innovative Technology", icon: "💡" },
          { title: "24/7 Support", icon: "🛠" },
          { title: "Data-Driven Insights", icon: "📊" }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "John Doe", company: "Tech Co", quote: "Amazing service! Highly recommended." },
          { name: "Jane Smith", company: "Design Inc", quote: "Transformed our business processes." },
          { name: "Mike Johnson", company: "Marketing LLC", quote: "Exceptional support and results." }
        ].map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img src={`https://placehold.co/50x50?text=${testimonial.name[0]}`} alt={testimonial.name} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "What services do you offer?", answer: "We offer a wide range of innovative solutions tailored to your business needs." },
    { question: "How can I get started?", answer: "Simply contact our sales team, and we'll guide you through the process." },
    { question: "What makes your startup unique?", answer: "Our cutting-edge technology and dedicated support set us apart from the competition." }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-md"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{activeIndex === index ? '−' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white rounded-b-lg shadow-md mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Banner = () => (
  <section className="bg-blue-600 text-white py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Special Offer: 30-Day Free Trial</h2>
      <p className="text-xl mb-8">Experience the power of our platform with no commitment. Limited time offer!</p>
      <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
        Claim Your Free Trial
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <p>Email: info@startup.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Startup St, Tech City</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul>
          <li><a href="#" className="hover:text-blue-400">About Us</a></li>
          <li><a href="#" className="hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-400">Blog</a></li>
          <li><a href="#" className="hover:text-blue-400">Careers</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-2xl hover:text-blue-400">📘</a>
          <a href="#" className="text-2xl hover:text-blue-400">🐦</a>
          <a href="#" className="text-2xl hover:text-blue-400">📸</a>
          <a href="#" className="text-2xl hover:text-blue-400">🔗</a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-sm">
      <p>&copy; 2023 Startup Name. All rights reserved.</p>
      <p className="mt-2">
        <a href="#" className="hover:text-blue-400">Privacy Policy</a> | 
        <a href="#" className="hover:text-blue-400 ml-2">Terms of Service</a>
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Features />
      <SocialProof />
      <FAQ />
      <Banner />
      <Footer />
    </div>
  );
}