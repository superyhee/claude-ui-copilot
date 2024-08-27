import React from 'react';
import { FaComments, FaBullhorn, FaUsers, FaMagic } from 'react-icons/fa';

const Header = () => (
  <header className="flex justify-between items-center p-4 border-b">
    <h1 className="text-xl font-bold">MY LANDING PAGE</h1>
    <nav>
      <ul className="flex space-x-4">
        <li className="text-gray-600">FEATURES</li>
        <li className="text-gray-600">ABOUT</li>
        <li className="text-gray-600">SERVICES</li>
        <li className="text-gray-600">GALLERY</li>
        <li className="text-gray-600">TESTIMONIALS</li>
      </ul>
    </nav>
  </header>
);

const Feature = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-blue-500 p-4 rounded-full mb-4">
      <Icon className="text-white text-2xl" />
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Features = () => (
  <section className="py-16">
    <h2 className="text-3xl font-bold text-center mb-2">FEATURES</h2>
    <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
    <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto">
      <Feature
        Icon={FaComments}
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
      />
      <Feature
        Icon={FaBullhorn}
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
      />
      <Feature
        Icon={FaUsers}
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
      />
      <Feature
        Icon={FaMagic}
        title="Lorem ipsum"
        description="Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
      />
    </div>
  </section>
);

const AboutUs = () => (
  <section className="py-16 bg-gray-100">
    <div className="max-w-5xl mx-auto flex">
      <div className="w-1/2 pr-8">
        <img src="https://placehold.co/600x400" alt="Workshop interior" className="w-full h-auto" />
      </div>
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-2">ABOUT US</h2>
        <div className="w-16 h-1 bg-blue-500 mb-4"></div>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
        <div className="grid grid-cols-2 gap-2">
          {['Lorem ipsum dolor', 'Tempor incididunt', 'Lorem ipsum dolor', 'Incididunt ut labore'].map((item, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">{item}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {['Aliquip ex ea commodo', 'Lorem ipsum dolor', 'Exercitation ullamco', 'Lorem ipsum dolor'].map((item, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Features />
      <AboutUs />
    </div>
  );
}