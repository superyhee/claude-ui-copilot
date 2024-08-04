import React from 'react';

const App = () => {
  const testimonials = [
    {
      quote: "This startup has truly revolutionized the way I work. Highly recommended!",
      author: "John Doe, CEO at ABC Corp"
    },
    {
      quote: "The services provided by this startup are top-notch. I'm extremely satisfied!",
      author: "Jane Smith, Entrepreneur"
    },
    // Add more testimonials as needed
  ];

  const faqs = [
    {
      question: "How does your service work?",
      answer: "Our service works by leveraging cutting-edge technology to provide seamless solutions tailored to your needs."
    },
    {
      question: "What are the pricing options?",
      answer: "We offer flexible pricing plans to suit businesses of all sizes. Contact us for more information."
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">
            <img src="https://placehold.co/120x40?text=Logo" alt="Startup Logo" className="h-8" />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">Features</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Revolutionizing the way you work</h1>
          <p className="text-lg mb-8">Our startup provides innovative solutions to streamline your business processes.</p>
          <button className="bg-white text-indigo-600 py-2 px-4 rounded-md hover:bg-gray-100">Get Started</button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src="https://placehold.co/80x80?text=Feature+Icon" alt="Feature Icon" className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p className="text-gray-600 text-center">Description of the key feature goes here.</p>
          </div>
          {/* Add more feature cards as needed */}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-md shadow-md">
                <blockquote>
                  <p className="text-gray-800">&quot;{testimonial.quote}&quot;</p>
                  <cite className="text-gray-600 mt-2">- {testimonial.author}</cite>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-indigo-600 py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get started today!</h2>
          <p className="text-lg mb-8">Take advantage of our special offer and start experiencing the benefits.</p>
          <button className="bg-white text-indigo-600 py-2 px-4 rounded-md hover:bg-gray-100">Sign Up Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="flex justify-center mb-4">
            <a href="#" className="text-white hover:text-gray-300 mx-2">
              <img src="https://placehold.co/24x24?text=Facebook" alt="Facebook" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 mx-2">
              <img src="https://placehold.co/24x24?text=Twitter" alt="Twitter" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 mx-2">
              <img src="https://placehold.co/24x24?text=Instagram" alt="Instagram" />
            </a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Startup. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;