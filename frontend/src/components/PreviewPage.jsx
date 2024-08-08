import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TransformerGPTExplanation = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    { title: 'Input Embedding', description: 'Convert input tokens to vectors' },
    { title: 'Self-Attention', description: 'Capture relationships between tokens' },
    { title: 'Feed Forward', description: 'Process information individually' },
    { title: 'Layer Normalization', description: 'Stabilize learning process' },
    { title: 'Output Projection', description: 'Generate final output probabilities' },
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setStep((prevStep) => (prevStep + 1) % steps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Transformer GPT Explained</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{steps[step].title}</h2>
            <p className="text-gray-600 mb-6">{steps[step].description}</p>
            
            <div className="flex justify-center mb-8">
              <motion.img
                src={`https://placehold.co/600x400?text=${steps[step].title}`}
                alt={`Illustration of ${steps[step].title} in Transformer GPT`}
                className="rounded-lg shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="flex justify-between items-center">
              <button
                onClick={() => setStep((prevStep) => (prevStep - 1 + steps.length) % steps.length)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Previous
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`${
                  isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                } text-white font-bold py-2 px-4 rounded`}
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <button
                onClick={() => setStep((prevStep) => (prevStep + 1) % steps.length)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </div>
          </div>
          
          <div className="bg-gray-200 px-6 py-4">
            <div className="flex justify-between">
              {steps.map((s, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full ${
                    index === step ? 'bg-blue-500' : 'bg-gray-400'
                  } transition-colors duration-300`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformerGPTExplanation;