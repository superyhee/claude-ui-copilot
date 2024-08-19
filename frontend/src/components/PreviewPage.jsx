import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit } = useForm();
  const [breathingState, setBreathingState] = useState('inhale');
  const [breathingAnimation, setBreathingAnimation] = useState('');

  const onSubmit = (data) => {
    setBreathingState('inhale');
  };

  useEffect(() => {
    let animationInterval;

    if (breathingState === 'inhale') {
      setBreathingAnimation('animate-inhale');
      animationInterval = setInterval(() => {
        setBreathingState('exhale');
      }, 4000);
    } else {
      setBreathingAnimation('animate-exhale');
      animationInterval = setInterval(() => {
        setBreathingState('inhale');
      }, 4000);
    }

    return () => clearInterval(animationInterval);
  }, [breathingState]);

  return (
    <div className="text-black p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Meditation App</h1>
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://placehold.co/200x200?text=Breathing+Animation"
          alt="Breathing Animation"
          className={`w-64 h-64 mb-4 ${breathingAnimation}`}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="submit"
            value="Start Meditation"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        </form>
      </div>
    </div>
  );
}

.animate-inhale {
  animation: inhale 4s infinite;
}

.animate-exhale {
  animation: exhale 4s infinite;
}

@keyframes inhale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes exhale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}