import React from 'react';

export default function App() {
  return (
    <div className="text-black p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Windows XP Inspired Wallpaper</h1>
      <svg className="w-full max-w-2xl" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#4682B4" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#skyGradient)" />
        
        <circle cx="700" cy="100" r="60" fill="url(#sunGlow)" />
        <circle cx="700" cy="100" r="40" fill="#FFD700" />

        <ellipse cx="200" cy="150" rx="100" ry="40" fill="#FFFFFF" opacity="0.8" />
        <ellipse cx="500" cy="100" rx="120" ry="50" fill="#FFFFFF" opacity="0.9" />
        <ellipse cx="650" cy="180" rx="80" ry="30" fill="#FFFFFF" opacity="0.7" />

        <path d="M0 400 Q 200 350, 400 400 T 800 400 L 800 600 L 0 600 Z" fill="#228B22" />
        <path d="M0 450 Q 200 400, 400 450 T 800 450 L 800 600 L 0 600 Z" fill="#32CD32" />
        <path d="M0 500 Q 200 450, 400 500 T 800 500 L 800 600 L 0 600 Z" fill="#7CFC00" />
      </svg>
    </div>
  );
}