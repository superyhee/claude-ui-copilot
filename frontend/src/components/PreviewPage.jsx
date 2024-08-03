import React, { useState } from 'react';

const App = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <div
          className="bg-pink-200 border-red-500 border-2 p-8 mr-4 w-96 h-64 flex flex-col justify-center items-center"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p className="text-center mb-4">Upload or drag your file</p>
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
          <div className="flex justify-center space-x-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              confirm
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              cancel
            </button>
          </div>
        </div>
        <div className="bg-pink-200 border-red-500 border-2 p-8 w-64 h-64">
          <h2 className="mb-4 underline">File list</h2>
          {files.map((file, index) => (
            <div key={index}>
              <img
                src={`https://placehold.co/64x64?text=${file.name}`}
                alt={`File ${index + 1} preview`}
                className="inline-block mr-2"
              />
              {file.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;