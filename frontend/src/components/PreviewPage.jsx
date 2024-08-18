import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function App() {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});

  useEffect(() => {
    const generateData = () => {
      const x = [];
      const y = [];
      const z = [];
      for (let i = 0; i < 100; i++) {
        x.push(Math.random() * 10);
        y.push(Math.random() * 10);
        z.push(Math.random() * 10);
      }
      return [{ x, y, z, mode: 'markers', type: 'scatter3d', marker: { size: 5, color: z, colorscale: 'Viridis' } }];
    };

    setData(generateData());
    setLayout({
      title: '3D Scatter Plot',
      autosize: false,
      width: 800,
      height: 600,
      scene: {
        xaxis: { title: 'X Axis' },
        yaxis: { title: 'Y Axis' },
        zaxis: { title: 'Z Axis' },
      },
      margin: { l: 0, r: 0, b: 0, t: 40 },
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
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Interactive 3D Scatter Plot</h1>
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
      <p style={{ color: '#666', marginTop: '20px', textAlign: 'center', maxWidth: '600px' }}>
        This 3D scatter plot visualizes random data points in a three-dimensional space. 
        You can rotate, zoom, and pan the plot to explore the data from different angles.
      </p>
    </div>
  );
}

export default App;