import React from 'react';

export default function App() {
  const features = [
    {
      icon: <img src="https://placehold.co/50x50" alt="Feature Icon 1" />,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    },
    {
      icon: <img src="https://placehold.co/50x50" alt="Feature Icon 2" />,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    },
    {
      icon: <img src="https://placehold.co/50x50" alt="Feature Icon 3" />,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    },
    {
      icon: <img src="https://placehold.co/50x50" alt="Feature Icon 4" />,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    }
  ];

  const whyChooseUs = [
    "Aliqua ex ea commodo",
    "Tempor incididunt",
    "Lorem ipsum dolor",
    "Incididunt ut labore",
    "Lorem ipsum dolor",
    "Exercitation ullamco",
    "Lorem ipsum dolor"
  ];

  return (
    <div className="bg-white">
      <nav className="flex justify-between items-center px-4 py-2 bg-gray-100">
        <h1 className="text-2xl font-bold">MY LANDING PAGE</h1>
        <ul className="flex space-x-4">
          <li className="hover:text-blue-500">FEATURES</li>
          <li className="hover:text-blue-500">ABOUT</li>
          <li className="hover:text-blue-500">SERVICES</li>
          <li className="hover:text-blue-500">GALLERY</li>
          <li className="hover:text-blue-500">TESTIMONIALS</li>
        </ul>
      </nav>

      <div className="px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">FEATURES</h2>
        <div className="flex justify-between mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-blue-500 rounded-full p-2 mb-2">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-8">
          <div>
            <img src="https://placehold.co/500x300" alt="About Us Image" className="rounded-lg" />
          </div>
          <div className="ml-8">
            <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3 className="text-2xl font-bold mb-2">Why Choose Us?</h3>
            <ul className="list-disc pl-4">
              {whyChooseUs.map((item, index) => (
                <li key={index} className="text-gray-600 mb-1">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}