import React, { useState, useEffect } from 'react';

const Piano = () => {
  const [activeKey, setActiveKey] = useState(null);

  const keys = [
    { note: 'C', color: 'white', frequency: 261.63 },
    { note: 'C#', color: 'black', frequency: 277.18 },
    { note: 'D', color: 'white', frequency: 293.66 },
    { note: 'D#', color: 'black', frequency: 311.13 },
    { note: 'E', color: 'white', frequency: 329.63 },
    { note: 'F', color: 'white', frequency: 349.23 },
    { note: 'F#', color: 'black', frequency: 369.99 },
    { note: 'G', color: 'white', frequency: 392.00 },
    { note: 'G#', color: 'black', frequency: 415.30 },
    { note: 'A', color: 'white', frequency: 440.00 },
    { note: 'A#', color: 'black', frequency: 466.16 },
    { note: 'B', color: 'white', frequency: 493.88 },
  ];

  const playNote = (note, frequency) => {
    setActiveKey(note);
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
    setTimeout(() => setActiveKey(null), 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const keyMap = {
        a: 'C', w: 'C#', s: 'D', e: 'D#', d: 'E', f: 'F',
        t: 'F#', g: 'G', y: 'G#', h: 'A', u: 'A#', j: 'B'
      };
      if (keyMap[e.key]) {
        const key = keys.find(k => k.note === keyMap[e.key]);
        if (key) {
          playNote(key.note, key.frequency);
        }
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
            onClick={() => playNote(key.note, key.frequency)}
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