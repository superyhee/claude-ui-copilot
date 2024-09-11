import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-8">
      <div className="flex w-full max-w-5xl">
        <div className="bg-white shadow-md rounded-lg p-6 mr-4 flex-1">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Frontend</h2>
          <div className="grid grid-cols-3 gap-4">
            {['Text', 'tldraw', 'Screenshot', 'History', 'Model', 'Prompt'].map((item, index) => (
              <div key={index} className="bg-orange-100 border border-orange-300 rounded p-2 text-center text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 flex-[2]">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Backend</h2>
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange-100 border border-orange-300 rounded p-2 text-center text-sm">
              Prompt template
            </div>
            <div className="absolute top-1/4 right-0 bg-orange-100 border border-orange-300 rounded p-2 text-center text-sm">
              Image Process
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-orange-100 border border-orange-300 rounded p-2 text-center text-sm">
              Git Server
            </div>
            <div className="absolute bottom-1/4 right-0 bg-orange-100 border border-orange-300 rounded p-2 text-center text-sm">
              Sonnet 3.5
            </div>
            <div className="bg-orange-100 border border-orange-300 rounded p-2 text-center text-sm w-1/3 mx-auto my-16">
              Server
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;