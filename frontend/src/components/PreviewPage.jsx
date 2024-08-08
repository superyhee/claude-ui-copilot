import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TransformerGPTExplanation = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { title: 'Input Embedding', description: 'Convert input tokens to vectors' },
    { title: 'Self-Attention', description: 'Analyze relationships between tokens' },
    { title: 'Feed Forward', description: 'Process information through neural network' },
    { title: 'Layer Normalization', description: 'Normalize outputs for stability' },
    { title: 'Output Projection', description: 'Generate final output probabilities' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Transformer GPT Explanation</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <div className="flex justify-between mb-4">
          {steps.map((s, index) => (
            <motion.div
              key={index}
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                index === step ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              animate={{ scale: index === step ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {index + 1}
            </motion.div>
          ))}
        </div>
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-2">{steps[step].title}</h2>
          <p className="text-gray-600 mb-4">{steps[step].description}</p>
          <img
            src={`https://placehold.co/600x400?text=${steps[step].title}`}
            alt={`Illustration of ${steps[step].title} in Transformer GPT`}
            className="w-full h-64 object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TransformerGPTExplanation;