import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function App() {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});

  useEffect(() => {
    const generateData = () => {
      const z = [];
      for (let i = 0; i < 10; i++) {
        const row = [];
        for (let j = 0; j < 10; j++) {
          row.push(Math.random());
        }
        z.push(row);
      }

      return [{
        z: z,
        type: 'heatmap',
        colorscale: 'Viridis'
      }];
    };

    setData(generateData());
    setLayout({
      title: 'Interactive Heatmap',
      autosize: false,
      width: 800,
      height: 600,
      xaxis: { title: 'X Axis' },
      yaxis: { title: 'Y Axis' },
      margin: { l: 50, r: 50, b: 50, t: 80 },
      paper_bgcolor: '#f8f9fa',
      plot_bgcolor: '#ffffff',
      font: { family: 'Arial, sans-serif' }
    });
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f8ff',
      padding: '20px',
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>
        Interactive Heatmap Visualization
      </h1>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '20px',
      }}>
        <Plot
          data={data}
          layout={layout}
          config={{ responsive: true }}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <p style={{ color: '#666', marginTop: '20px', textAlign: 'center', maxWidth: '600px', fontFamily: 'Arial, sans-serif' }}>
        This heatmap visualizes a 10x10 matrix of random values. The color intensity represents the magnitude of each value.
      </p>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h3 style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}>How to interpret a Heatmap</h3>
        <img 
          src="https://placehold.co/600x300?text=Heatmap+Explanation" 
          alt="Diagram explaining how to read a heatmap, showing color scale and axis interpretations"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginTop: '10px' }}
        />
      </div>
    </div>
  );
}

export default App;