import React, { useState } from 'react';
import { FaCheck, FaStar, FaQuestionCircle } from 'react-icons/fa';

const Header = () => (
  <header className="bg-white shadow-md py-4">
    <div className="container mx-auto flex justify-between items-center">
      <img src="https://placehold.co/200x50" alt="Startup Logo" className="h-8" />
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Features</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Testimonials</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-bold mb-4">Revolutionize Your Workflow</h1>
      <p className="text-xl mb-8">Streamline your business processes with our cutting-edge SaaS solution</p>
      <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
        Get Started
      </button>
    </div>
  </section>
);

const Features = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: FaCheck, title: "Easy Integration", description: "Seamlessly integrate with your existing tools" },
          { icon: FaStar, title: "Advanced Analytics", description: "Gain insights with powerful data visualization" },
          { icon: FaQuestionCircle, title: "24/7 Support", description: "Our team is always here to help you succeed" }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <feature.icon className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-blue-50">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "John Doe", company: "Tech Co", quote: "This solution has transformed our business operations." },
          { name: "Jane Smith", company: "Design Inc", quote: "The analytics features are unparalleled in the industry." },
          { name: "Mike Johnson", company: "StartUp LLC", quote: "Customer support is responsive and always helpful." }
        ].map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.company}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "How does the free trial work?", answer: "Our 14-day free trial gives you full access to all features. No credit card required." },
    { question: "What kind of support do you offer?", answer: "We offer 24/7 email support and live chat during business hours." },
    { question: "Can I cancel my subscription at any time?", answer: "Yes, you can cancel your subscription at any time with no questions asked." }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 transition duration-300 rounded-lg"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white">
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
  <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
      <p className="text-xl mb-6">Sign up now and get 3 months free on any annual plan!</p>
      <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
        Claim Offer
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p>Email: info@startup.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul>
          <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
          <li><a href="#" className="hover:text-blue-300">Careers</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-300">Facebook</a>
          <a href="#" className="hover:text-blue-300">Twitter</a>
          <a href="#" className="hover:text-blue-300">LinkedIn</a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-gray-400">
      © 2023 Startup Name. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="text-black">
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