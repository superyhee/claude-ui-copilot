import React from 'react';
import { FaRocket, FaLightbulb, FaChartLine } from 'react-icons/fa';

const Header = () => (
  <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
    <div className="flex items-center">
      <img src="https://placehold.co/50x50" alt="Startup Logo" className="h-10 w-10 mr-2" />
      <span className="text-xl font-bold text-indigo-600">StartupName</span>
    </div>
    <nav>
      <ul className="flex space-x-6">
        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Home</a></li>
        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Features</a></li>
        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Pricing</a></li>
        <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Revolutionize Your Business</h1>
      <p className="text-xl mb-8">Empower your team with our cutting-edge SaaS solution</p>
      <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300">Get Started</button>
    </div>
  </section>
);

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6">
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => (
  <section className="py-20 px-8 bg-gray-100">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feature
          icon={<FaRocket className="text-5xl text-indigo-600" />}
          title="Lightning Fast"
          description="Boost your productivity with our high-performance platform"
        />
        <Feature
          icon={<FaLightbulb className="text-5xl text-indigo-600" />}
          title="Intuitive Design"
          description="User-friendly interface that anyone can master quickly"
        />
        <Feature
          icon={<FaChartLine className="text-5xl text-indigo-600" />}
          title="Powerful Analytics"
          description="Gain valuable insights with our advanced reporting tools"
        />
      </div>
    </div>
  </section>
);

const Testimonial = ({ quote, author, role }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 italic mb-4">{quote}</p>
    <div className="font-semibold">{author}</div>
    <div className="text-gray-500 text-sm">{role}</div>
  </div>
);

const SocialProof = () => (
  <section className="py-20 px-8">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Testimonial
          quote="This platform has completely transformed how we operate. It's a game-changer!"
          author="John Doe"
          role="CEO, TechCorp"
        />
        <Testimonial
          quote="The intuitive design and powerful features have significantly boosted our productivity."
          author="Jane Smith"
          role="CTO, InnovateCo"
        />
        <Testimonial
          quote="Outstanding customer support and constant improvements make this a top-notch solution."
          author="Mike Johnson"
          role="Director, FutureTech"
        />
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-20 px-8 bg-gray-100">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <details className="bg-white p-6 rounded-lg shadow-md">
          <summary className="font-semibold cursor-pointer">How does the pricing work?</summary>
          <p className="mt-2 text-gray-600">We offer flexible pricing plans tailored to your business needs. Contact our sales team for a custom quote.</p>
        </details>
        <details className="bg-white p-6 rounded-lg shadow-md">
          <summary className="font-semibold cursor-pointer">Is there a free trial available?</summary>
          <p className="mt-2 text-gray-600">Yes, we offer a 14-day free trial with full access to all features. No credit card required.</p>
        </details>
        <details className="bg-white p-6 rounded-lg shadow-md">
          <summary className="font-semibold cursor-pointer">How secure is your platform?</summary>
          <p className="mt-2 text-gray-600">We use industry-standard encryption and security protocols to ensure your data is always protected.</p>
        </details>
      </div>
    </div>
  </section>
);

const Banner = () => (
  <section className="bg-indigo-600 text-white py-16 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="text-xl mb-8">Sign up now and get 20% off your first 3 months!</p>
      <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300">Claim Offer</button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12 px-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">About Us</h3>
        <p className="text-gray-400">Empowering businesses with innovative SaaS solutions since 2020.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact</h3>
        <p className="text-gray-400">Email: info@startupname.com</p>
        <p className="text-gray-400">Phone: (123) 456-7890</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Legal</h3>
        <ul className="text-gray-400">
          <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-gray-400">
      <p>&copy; 2023 StartupName. All rights reserved.</p>
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