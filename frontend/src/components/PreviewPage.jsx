import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function App() {
  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});

  useEffect(() => {
    const generateData = () => {
      const y0 = Array.from({ length: 50 }, () => Math.random());
      const y1 = Array.from({ length: 50 }, () => Math.random() * 2 + 1);
      const y2 = Array.from({ length: 50 }, () => Math.random() * 3 + 2);
      const y3 = Array.from({ length: 50 }, () => Math.random() * 4 + 3);

      return [
        { y: y0, type: 'box', name: 'Sample A' },
        { y: y1, type: 'box', name: 'Sample B' },
        { y: y2, type: 'box', name: 'Sample C' },
        { y: y3, type: 'box', name: 'Sample D' }
      ];
    };

    setData(generateData());
    setLayout({
      title: 'Box Plot Comparison',
      autosize: false,
      width: 800,
      height: 600,
      yaxis: { title: 'Values' },
      boxmode: 'group',
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
        Interactive Box Plot Comparison
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
        This box plot compares the distribution of values across four different samples. 
        Each box represents a sample, showing the median, quartiles, and potential outliers.
      </p>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h3 style={{ color: '#333', fontFamily: 'Arial, sans-serif' }}>How to interpret a Box Plot</h3>
        <img 
          src="https://placehold.co/600x300?text=Box+Plot+Explanation" 
          alt="Diagram explaining the components of a box plot including median, quartiles, and whiskers"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginTop: '10px' }}
        />
      </div>
    </div>
  );
}

export default App;