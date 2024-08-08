import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NeuralNetworkAnimation = () => {
  const [step, setStep] = useState(0);
  const [neurons, setNeurons] = useState([]);

  useEffect(() => {
    const neuronPositions = [
      { x: 100, y: 200 },
      { x: 300, y: 100 },
      { x: 300, y: 300 },
      { x: 500, y: 200 },
    ];
    setNeurons(neuronPositions);
  }, []);

  const nextStep = () => {
    setStep((prevStep) => (prevStep + 1) % 4);
  };

  const renderConnections = () => {
    return (
      <>
        <motion.line
          x1={neurons[0]?.x}
          y1={neurons[0]?.y}
          x2={neurons[1]?.x}
          y2={neurons[1]?.y}
          stroke="#4299e1"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: step > 0 ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
        <motion.line
          x1={neurons[0]?.x}
          y1={neurons[0]?.y}
          x2={neurons[2]?.x}
          y2={neurons[2]?.y}
          stroke="#4299e1"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: step > 0 ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1={neurons[1]?.x}
          y1={neurons[1]?.y}
          x2={neurons[3]?.x}
          y2={neurons[3]?.y}
          stroke="#4299e1"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: step > 1 ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
        <motion.line
          x1={neurons[2]?.x}
          y1={neurons[2]?.y}
          x2={neurons[3]?.x}
          y2={neurons[3]?.y}
          stroke="#4299e1"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: step > 1 ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </>
    );
  };

  const renderNeurons = () => {
    return neurons.map((neuron, index) => (
      <motion.circle
        key={index}
        cx={neuron.x}
        cy={neuron.y}
        r="20"
        fill="#4299e1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      />
    ));
  };

  const renderExplanation = () => {
    const explanations = [
      '1. Input Layer: Data enters the network',
      '2. Hidden Layer: Complex patterns are learned',
      '3. Output Layer: Final predictions are made',
      '4. Backpropagation: The network learns and improves',
    ];

    return (
      <motion.div
        className="mt-8 text-center text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {explanations[step]}
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Neural Network Explained</h1>
      <div className="relative w-[600px] h-[400px] bg-white rounded-lg shadow-lg">
        <svg width="100%" height="100%">
          {renderConnections()}
          {renderNeurons()}
        </svg>
      </div>
      {renderExplanation()}
      <button
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        onClick={nextStep}
      >
        Next Step
      </button>
    </div>
  );
};

export default NeuralNetworkAnimation;