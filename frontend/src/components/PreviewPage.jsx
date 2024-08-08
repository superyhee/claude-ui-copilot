import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const slides = [
  {
    title: "The Birth of Large Language Models",
    content: "Large Language Models (LLMs) emerged from decades of research in natural language processing and artificial intelligence.",
    year: "1950s-2010s"
  },
  {
    title: "GPT-1: The Pioneer",
    content: "OpenAI introduced GPT-1 in 2018, marking a significant milestone in the development of transformer-based language models.",
    year: "2018"
  },
  {
    title: "GPT-2: Scaling Up",
    content: "GPT-2, released in 2019, demonstrated the potential of larger models with 1.5 billion parameters.",
    year: "2019"
  },
  {
    title: "GPT-3: A Quantum Leap",
    content: "GPT-3, unveiled in 2020, with its 175 billion parameters, showcased unprecedented language understanding and generation capabilities.",
    year: "2020"
  },
  {
    title: "The Era of Specialized Models",
    content: "Post GPT-3, various specialized models like DALL-E, Codex, and InstructGPT emerged, focusing on specific tasks.",
    year: "2021-2022"
  },
  {
    title: "GPT-4 and Beyond",
    content: "GPT-4's release in 2023 pushed the boundaries further, with multimodal capabilities and improved performance across various tasks.",
    year: "2023-Present"
  }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
            Large Language Models: A Historical Journey
          </h1>
          <div className="relative">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">{slides[currentSlide].title}</h2>
              <p className="text-gray-600 mb-4">{slides[currentSlide].content}</p>
              <p className="text-lg font-medium text-blue-500">{slides[currentSlide].year}</p>
            </div>
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevSlide}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <div className="text-gray-500">
                {currentSlide + 1} / {slides.length}
              </div>
              <button
                onClick={nextSlide}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-6">
          <img
            src="https://placehold.co/600x400/png?text=LLM+Timeline"
            alt="Timeline illustration of Large Language Models development"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}