import React from 'react';
import Plot from 'react-plotly.js';

function App() {
  const generateData = () => {
    const x = [];
    const y = [];
    const z = [];

    for (let i = 0; i < 50; i++) {
      x.push(i);
      y.push(i);
      const zRow = [];
      for (let j = 0; j < 50; j++) {
        zRow.push(Math.sin(Math.sqrt(i * i + j * j)));
      }
      z.push(zRow);
    }

    return { x, y, z };
  };

  const { x, y, z } = generateData();

  const data = [{
    z: z,
    x: x,
    y: y,
    type: 'surface',
    colorscale: 'Viridis'
  }];

  const layout = {
    title: '3D Surface Plot',
    scene: {
      xaxis: { title: 'X Axis' },
      yaxis: { title: 'Y Axis' },
      zaxis: { title: 'Z Axis' }
    },
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
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '20px'
    }}>
      <h1 style={{
        color: '#333',
        marginBottom: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        3D Surface Plot Visualization
      </h1>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '20px'
      }}>
        <Plot
          data={data}
          layout={layout}
          config={{
            responsive: true,
            displayModeBar: true,
            displaylogo: false,
            modeBarButtonsToRemove: ['toImage', 'sendDataToCloud']
          }}
        />
      </div>
      <p style={{
        marginTop: '20px',
        color: '#666',
        textAlign: 'center',
        maxWidth: '600px',
        fontFamily: 'Arial, sans-serif'
      }}>
        This 3D surface plot demonstrates a mathematical function where the z-value is calculated as the sine of the square root of x^2 + y^2. The colorscale represents the z-values, providing a visually appealing representation of the data.
      </p>
    </div>
  );
}

export default App;