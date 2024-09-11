import React from 'react';
import Plot from 'react-plotly.js';

function App() {
  const size = 50;
  const x = Array.from({ length: size }, (_, i) => i);
  const y = Array.from({ length: size }, (_, i) => i);
  const z = Array.from({ length: size }, () => 
    Array.from({ length: size }, () => Math.random() * 100)
  );

  const data = [{
    type: 'heatmap',
    x: x,
    y: y,
    z: z,
    colorscale: 'Viridis',
  }];

  const layout = {
    title: 'Interactive Heatmap',
    autosize: false,
    width: 800,
    height: 600,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    },
    xaxis: { title: 'X Axis' },
    yaxis: { title: 'Y Axis' },
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px',
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px', textAlign: 'center' }}>Interactive Heatmap Visualization</h1>
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
        This heatmap visualizes random data. The color intensity represents the value at each point.
        You can interact with the heatmap by zooming, panning, and hovering over data points.
      </p>
      <div style={{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
      }}>
        <button style={buttonStyle}>Download Data</button>
        <button style={buttonStyle}>Change Color Scale</button>
        <button style={buttonStyle}>Reset View</button>
      </div>
      <img 
        src="https://placehold.co/300x200?text=Heatmap+Legend" 
        alt="Heatmap color scale legend showing the relationship between colors and values" 
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