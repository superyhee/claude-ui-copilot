import React from 'react';
import { useState } from 'react';

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://placehold.co/50x50" alt="Company Logo" className="mr-2" />
        <span className="text-xl font-bold text-gray-800">StartupName</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#features" className="text-gray-600 hover:text-gray-800">Features</a></li>
          <li><a href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</a></li>
          <li><a href="#faq" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Revolutionize Your Business</h1>
      <p className="text-xl mb-8">We provide cutting-edge solutions to boost your productivity and growth.</p>
      <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
        Get Started
      </button>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Innovative Technology", description: "Cutting-edge solutions for modern businesses" },
          { title: "24/7 Support", description: "Round-the-clock assistance for your peace of mind" },
          { title: "Data Security", description: "Top-notch security measures to protect your information" }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img src={`https://placehold.co/60x60?text=${index + 1}`} alt={`Feature ${index + 1} icon`} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "John Doe", role: "CEO, TechCorp", quote: "This startup has transformed our operations!" },
          { name: "Jane Smith", role: "CTO, InnovateCo", quote: "Incredible service and support. Highly recommended!" },
          { name: "Alex Johnson", role: "Founder, NextGen", quote: "The best decision we've made for our business growth." }
        ].map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center">
              <img src={`https://placehold.co/40x40?text=${testimonial.name[0]}`} alt={`${testimonial.name}'s avatar`} className="rounded-full mr-3" />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
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
    { question: "What services do you offer?", answer: "We offer a wide range of innovative solutions including..." },
    { question: "How can I get started?", answer: "Getting started is easy! Simply contact our team and we'll guide you through the process." },
    { question: "What makes your startup unique?", answer: "Our unique approach combines cutting-edge technology with personalized service to deliver unparalleled results." }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-md"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-50 rounded-b-lg">
                  <p>{faq.answer}</p>
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
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Special Offer!</h2>
      <p className="text-xl mb-6">Sign up now and get 3 months free on any plan!</p>
      <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
        Claim Offer
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p>We are a innovative startup dedicated to revolutionizing your business operations.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>Email: info@startup.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Innovation St, Tech City</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2023 StartupName. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Banner />
      <Footer />
    </div>
  );
}