import React, { useState } from 'react';

const App = () => {
  const [meditationTime, setMeditationTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartMeditation = () => {
    setIsRunning(true);
    const interval = setInterval(() => {
      setMeditationTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  };

  const handleStopMeditation = () => {
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-purple-800">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Meditation Timer</h1>
        <div className="flex justify-center mb-8">
          <img
            src="https://placehold.co/200x200/EEE/333?text=Meditation+Icon"
            alt="Meditation icon placeholder"
            className="w-32 h-32"
          />
        </div>
        <div className="flex justify-center mb-8">
          <h2 className="text-6xl font-bold">{formatTime(meditationTime)}</h2>
        </div>
        <div className="flex justify-center">
          {!isRunning ? (
            <button
              onClick={handleStartMeditation}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Start Meditation
            </button>
          ) : (
            <button
              onClick={handleStopMeditation}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Stop Meditation
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;