import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12 text-center"
      >
        Meditation Game
      </motion.h1>
      <AnimatePresence mode="wait">
        <motion.div
          key={inhale ? 'inhale' : 'exhale'}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-semibold mb-6"
        >
          {inhale ? 'Inhale' : 'Exhale'}
        </motion.div>
      </AnimatePresence>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-4xl font-bold"
      >
        {timer}
      </motion.div>
      <div className="mt-12 relative">
        <motion.div
          animate={{
            scale: inhale ? [1, 1.2] : [1.2, 1],
            opacity: inhale ? [0.3, 0.7] : [0.7, 0.3],
          }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          className="w-64 h-64 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></motion.div>
        <motion.img
          src={`https://placehold.co/${Math.round(circleSize * 16)}x${Math.round(circleSize * 16)}/png?text=Breathe`}
          alt="A circle that expands and contracts to guide breathing"
          animate={{
            width: `${circleSize}rem`,
            height: `${circleSize}rem`,
          }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="rounded-full shadow-lg"
        />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 text-2xl text-center max-w-md"
      >
        Follow the circle and let your mind relax...
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8 text-lg"
      >
        Tip: Find a comfortable position and focus on your breath
      </motion.div>
    </div>
  );
}