import React, { useState, useEffect } from 'react';

const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];

export default function App() {
  const [inhale, setInhale] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);
  const [timer, setTimer] = useState(4);
  const [circleSize, setCircleSize] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          setInhale((prev) => !prev);
          setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
          return 4;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const breathingInterval = setInterval(() => {
      setCircleSize((prevSize) => {
        if (inhale) {
          return prevSize < 16 ? prevSize + 0.1 : 16;
        } else {
          return prevSize > 12 ? prevSize - 0.1 : 12;
        }
      });
    }, 50);

    return () => clearInterval(breathingInterval);
  }, [inhale]);

  return (
    <div className={`min-h-screen ${colors[colorIndex]} transition-colors duration-1000 flex flex-col items-center justify-center text-white`}>
      <h1 className="text-4xl font-bold mb-8">Meditation Game</h1>
      <div className="text-6xl font-semibold mb-4">
        {inhale ? 'Inhale' : 'Exhale'}
      </div>
      <div className="text-3xl">{timer}</div>
      <div className="mt-8 relative">
        <div
          className={`w-${Math.round(circleSize * 4)} h-${Math.round(circleSize * 4)} rounded-full bg-white bg-opacity-30 transition-all duration-300 ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        ></div>
        <img
          src={`https://placehold.co/${Math.round(circleSize * 16)}x${Math.round(circleSize * 16)}/png?text=Breathing+Circle`}
          alt="A circle that expands and contracts to guide breathing"
          className={`rounded-full transition-all duration-300 ease-in-out`}
          style={{ width: `${circleSize}rem`, height: `${circleSize}rem` }}
        />
      </div>
      <p className="mt-8 text-xl">
        Follow the circle and let your mind relax...
      </p>
    </div>
  );
}