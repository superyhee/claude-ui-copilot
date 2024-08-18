import React, { useState } from 'react';
import { FaCheck, FaQuestion, FaStar } from 'react-icons/fa';

const testimonials = [
  { id: 1, name: 'John Doe', text: 'This startup revolutionized our business!' },
  { id: 2, name: 'Jane Smith', text: 'Incredible service and support. Highly recommended!' },
  { id: 3, name: 'Mike Johnson', text: 'Game-changing technology. A must-have for any company.' },
];

const faqs = [
  { id: 1, question: 'What services do you offer?', answer: 'We offer innovative solutions for businesses of all sizes.' },
  { id: 2, question: 'How can I get started?', answer: 'Simply contact our team, and we will guide you through the process.' },
  { id: 3, question: 'What makes your startup unique?', answer: 'Our cutting-edge technology and dedicated support set us apart.' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://placehold.co/50x50" alt="Startup Logo" className="w-12 h-12 mr-4" />
            <h1 className="text-2xl font-bold">Startup Name</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
            <a href="#faq" className="hover:text-blue-600">FAQ</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white px-4 py-2">
            <a href="#features" className="block py-2 hover:text-blue-600">Features</a>
            <a href="#testimonials" className="block py-2 hover:text-blue-600">Testimonials</a>
            <a href="#faq" className="block py-2 hover:text-blue-600">FAQ</a>
            <a href="#contact" className="block py-2 hover:text-blue-600">Contact</a>
          </nav>
        )}
      </header>

      <section className="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Revolutionize Your Business</h2>
          <p className="text-xl md:text-2xl mb-8">Empower your company with our cutting-edge solutions</p>
          <a href="#contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">Get Started</a>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaCheck className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p>Seamlessly integrate our solutions into your existing systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaStar className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Top Performance</h3>
              <p>Experience unparalleled speed and efficiency in your operations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaQuestion className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p>Our dedicated team is always ready to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg">
                <p className="mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers and take your company to the next level.</p>
          <a href="#contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">Get Started Now</a>
        </div>
      </section>

      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>Email: info@startup.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Innovation St, Tech City, TC 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-blue-400">Features</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Startup Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}