import React, { useState, useEffect } from 'react';

const Piano = () => {
  const [activeKey, setActiveKey] = useState(null);

  const keys = [
    { note: 'C', color: 'white' },
    { note: 'C#', color: 'black' },
    { note: 'D', color: 'white' },
    { note: 'D#', color: 'black' },
    { note: 'E', color: 'white' },
    { note: 'F', color: 'white' },
    { note: 'F#', color: 'black' },
    { note: 'G', color: 'white' },
    { note: 'G#', color: 'black' },
    { note: 'A', color: 'white' },
    { note: 'A#', color: 'black' },
    { note: 'B', color: 'white' },
  ];

  const playNote = (note) => {
    setActiveKey(note);
    // Here we would typically play the actual sound
    // For this example, we'll just simulate it with a timeout
    setTimeout(() => setActiveKey(null), 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keyMap = {
        a: 'C', w: 'C#', s: 'D', e: 'D#', d: 'E', f: 'F',
        t: 'F#', g: 'G', y: 'G#', h: 'A', u: 'A#', j: 'B'
      };
      if (keyMap[e.key]) {
        playNote(keyMap[e.key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white mb-8">Virtual Piano</h1>
      <div className="relative">
        {keys.map((key, index) => (
          <button
            key={index}
            className={`${
              key.color === 'white'
                ? 'bg-white hover:bg-gray-100 w-16 h-60'
                : 'bg-black hover:bg-gray-800 w-10 h-40 absolute'
            } ${
              activeKey === key.note ? 'opacity-70' : ''
            } border border-gray-300 focus:outline-none transition-all duration-150 ease-in-out`}
            style={{
              left: key.color === 'black' ? `${index * 4}rem - 1.25rem` : `${index * 4}rem`,
              zIndex: key.color === 'black' ? 1 : 0,
            }}
            onClick={() => playNote(key.note)}
          >
            <span className={`absolute bottom-2 left-2 ${key.color === 'white' ? 'text-black' : 'text-white'}`}>
              {key.note}
            </span>
          </button>
        ))}
      </div>
      <p className="mt-8 text-white text-lg">
        Use your keyboard (A-J and W-U) or click the keys to play!
      </p>
    </div>
  );
};

export default Piano;