import { useState, useEffect } from 'react';

export default function App() {
  const [breathingState, setBreathingState] = useState('inhale');
  const [circleSize, setCircleSize] = useState(100);
  const [circleColor, setCircleColor] = useState('blue');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (breathingState === 'inhale') {
        setCircleSize((prevSize) => prevSize + 10);
        setCircleColor('green');
        if (circleSize >= 300) {
          setBreathingState('exhale');
        }
      } else {
        setCircleSize((prevSize) => prevSize - 10);
        setCircleColor('red');
        if (circleSize <= 100) {
          setBreathingState('inhale');
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [breathingState, circleSize]);

  return (
    <div className="text-black p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Meditation App</h1>
      <div className="relative">
        <img
          src="https://placehold.co/500x500?text=Background+Image"
          alt="Background Image"
          className="w-full h-auto"
        />
        <div
          className={`absolute inset-0 m-auto rounded-full transition-all duration-500 ${
            circleColor === 'blue' ? 'bg-blue-500' : circleColor === 'green' ? 'bg-green-500' : 'bg-red-500'
          }`}
          style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
        />
      </div>
      <p className="mt-4 text-lg">{breathingState === 'inhale' ? 'Inhale' : 'Exhale'}</p>
    </div>
  );
}