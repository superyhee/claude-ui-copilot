import React from 'react';
import Plot from 'react-plotly.js';

function App() {
  const data = [{
    type: 'scatter3d',
    mode: 'markers',
    x: Array.from({length: 100}, () => Math.random() * 10),
    y: Array.from({length: 100}, () => Math.random() * 10),
    z: Array.from({length: 100}, () => Math.random() * 10),
    marker: {
      size: 5,
      color: Array.from({length: 100}, () => Math.random() * 10),
      colorscale: 'Viridis',
      opacity: 0.8
    }
  }];

  const layout = {
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
        3D Scatter Plot Visualization
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
            displayModeBar: true
          }}
        />
      </div>
      <p style={{
        marginTop: '20px',
        color: '#666',
        textAlign: 'center',
        maxWidth: '800px',
        fontFamily: 'Arial, sans-serif'
      }}>
        This 3D scatter plot visualizes random data points in a three-dimensional space. Each point's position is determined by its X, Y, and Z coordinates, while its color represents an additional dimension of data.
      </p>
    </div>
  );
}

export default App;