import React, { useState, useEffect } from 'react';

const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];

export default function App() {
  const [inhale, setInhale] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);
  const [timer, setTimer] = useState(4);
  const [circleSize, setCircleSize] = useState(48);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          setInhale((prev) => !prev);
          setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
          setCircleSize((prevSize) => (prevSize === 48 ? 64 : 48));
          return 4;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen ${colors[colorIndex]} transition-colors duration-1000 flex flex-col items-center justify-center text-white`}>
      <h1 className="text-4xl font-bold mb-8">Meditation Game</h1>
      <div className="text-6xl font-semibold mb-4">
        {inhale ? 'Inhale' : 'Exhale'}
      </div>
      <div className="text-3xl">{timer}</div>
      <div className="mt-8">
        <img
          src={`https://placehold.co/${circleSize}x${circleSize}/png?text=Breathing+Circle`}
          alt="A circle that expands and contracts to guide breathing"
          className={`rounded-full ${inhale ? 'animate-pulse' : 'animate-none'}`}
        />
      </div>
      <p className="mt-8 text-xl">
        Follow the circle and let your mind relax...
      </p>
    </div>
  );
}