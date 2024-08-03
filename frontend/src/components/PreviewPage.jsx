import React from 'react';

export default function App() {
  return (
    <div className="bg-black text-white py-8 px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 uppercase">TOP NEWS</h1>
        <p className="text-lg">Hello! Happy hump Day, is it just me, or is this weeks going super fast In todays digest, Im covering a new wearable that wants to be your friend But first</p>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/24x24" alt="Apple icon" className="w-6 h-6" />
          <p className="text-base">According to a leak, this is what the next iPhone will look like.</p>
        </div>
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/24x24" alt="Meta icon" className="w-6 h-6" />
          <p className="text-base">Meta: AI is displaying some pretty significant hallucinations.</p>
        </div>
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/24x24" alt="Nothing icon" className="w-6 h-6" />
          <p className="text-base">Nothing has revealed its latest flagship phone, the Nothing 2A.</p>
        </div>
        <div className="flex items-center space-x-4">
          <img src="https://placehold.co/24x24" alt="Meta icon" className="w-6 h-6" />
          <p className="text-base">Meta has scrapped its celebrity AI feature less than a year after its launch.</p>
        </div>
      </div>
    </div>
  );
}