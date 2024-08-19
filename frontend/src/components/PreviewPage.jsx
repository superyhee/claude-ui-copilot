import { useState, useEffect } from 'react';

export default function App() {
  const [breathingState, setBreathingState] = useState('inhale');
  const [circleSize, setCircleSize] = useState(100);
  const [circleColor, setCircleColor] = useState('#4b94ff');

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (breathingState === 'inhale') {
        setCircleSize((prevSize) => prevSize + 10);
        setCircleColor('#10b981');
        if (circleSize >= 300) {
          setBreathingState('exhale');
        }
      } else {
        setCircleSize((prevSize) => prevSize - 10);
        setCircleColor('#ef4444');
        if (circleSize <= 100) {
          setBreathingState('inhale');
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [breathingState, circleSize]);

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white mb-8">Meditation App</h1>
      <div className="relative">
        <img
          src="https://placehold.co/500x500?text=Peaceful+Nature+Background"
          alt="Peaceful Nature Background"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <div
          className={`absolute inset-0 m-auto rounded-full transition-all duration-500 shadow-lg`}
          style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            backgroundColor: circleColor,
          }}
        />
      </div>
      <p className="mt-8 text-2xl font-semibold text-white">
        {breathingState === 'inhale' ? 'Inhale' : 'Exhale'}
      </p>
    </div>
  );
}