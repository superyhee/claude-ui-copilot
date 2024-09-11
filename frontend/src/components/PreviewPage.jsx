import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function App() {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});

  useEffect(() => {
    generateData();
  }, []);

  const generateData = () => {
    const size = 100;
    const x = Array.from({ length: size }, () => Math.random() * 10 - 5);
    const y = Array.from({ length: size }, () => Math.random() * 10 - 5);
    const z = Array.from({ length: size }, () => Math.random() * 10 - 5);

    const trace = {
      x: x,
      y: y,
      z: z,
      mode: 'markers',
      type: 'scatter3d',
      marker: {
        size: 5,
        color: z,
        colorscale: 'Viridis',
        opacity: 0.8
      }
    };

    setData([trace]);

    setLayout({
      title: '3D Scatter Plot',
      autosize: false,
      width: 800,
      height: 600,
      scene: {
        xaxis: { title: 'X Axis' },
        yaxis: { title: 'Y Axis' },
        zaxis: { title: 'Z Axis' }
      },
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 40
      }
    });
  };

  const regenerateData = () => {
    generateData();
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '20px',
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Interactive 3D Scatter Plot</h1>
      <div style={{
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: 'white',
      }}>
        <Plot
          data={data}
          layout={layout}
          config={{ responsive: true }}
        />
      </div>
      <p style={{ color: '#666', marginTop: '20px', textAlign: 'center', maxWidth: '600px' }}>
        This 3D scatter plot visualizes randomly generated data points in a three-dimensional space.
        You can interact with the plot by rotating, zooming, and panning to explore the data from different angles.
      </p>
      <div style={{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
      }}>
        <button style={buttonStyle} onClick={regenerateData}>Regenerate Data</button>
        <button style={buttonStyle}>Download Plot</button>
        <button style={buttonStyle}>Toggle Animation</button>
      </div>
      <img 
        src="https://placehold.co/300x200?text=3D+Scatter+Plot+Legend" 
        alt="3D Scatter Plot color scale legend showing the relationship between colors and Z-axis values" 
        style={{
          marginTop: '20px',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      />
    </div>
  );
}

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '14px',
  transition: 'background-color 0.3s',
};

export default App;