import React from 'react';
import Plot from 'react-plotly.js';

function App() {
  // Generate mock data for 3D surface plot
  const size = 50;
  const x = [];
  const y = [];
  const z = [];

  for (let i = 0; i < size; i++) {
    x.push(i);
    y.push(i);
    z.push([]);
    for (let j = 0; j < size; j++) {
      z[i].push(Math.sin(i / 10) * Math.cos(j / 10) * 10);
    }
  }

  const data = [{
    type: 'surface',
    x: x,
    y: y,
    z: z,
    colorscale: 'Viridis',
  }];

  const layout = {
    title: '3D Surface Plot',
    autosize: false,
    width: 800,
    height: 600,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Interactive 3D Surface Plot</h1>
      <div style={{
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        <Plot
          data={data}
          layout={layout}
          config={{ responsive: true }}
        />
      </div>
      <p style={{ color: '#666', marginTop: '20px', textAlign: 'center', maxWidth: '600px' }}>
        This 3D surface plot visualizes a mathematical function. You can interact with it by rotating, zooming, and hovering over data points.
      </p>
    </div>
  );
}

export default App;