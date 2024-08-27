import React from 'react';
import Plot from 'react-plotly.js';

function App() {
  const data = [{
    z: [
      [1, 20, 30, 50, 1],
      [20, 1, 60, 80, 30],
      [30, 60, 1, -10, 20],
      [50, 80, -10, 1, 60],
      [1, 30, 20, 60, 1]
    ],
    x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    y: ['Morning', 'Noon', 'Afternoon', 'Evening', 'Night'],
    type: 'heatmap',
    colorscale: 'Viridis'
  }];

  const layout = {
    title: 'Weekly Activity Heatmap',
    annotations: [],
    xaxis: {title: 'Day of Week'},
    yaxis: {title: 'Time of Day'},
    height: 600,
    width: 800
  };

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const currentValue = data[0].z[i][j];
      if (currentValue !== 1) {
        layout.annotations.push({
          x: data[0].x[j],
          y: data[0].y[i],
          text: currentValue.toString(),
          showarrow: false,
          font: {
            color: currentValue > 40 ? 'white' : 'black'
          }
        });
      }
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{color: '#333', marginBottom: '20px'}}>Activity Tracker</h1>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '20px'
      }}>
        <Plot
          data={data}
          layout={layout}
          config={{responsive: true}}
        />
      </div>
      <div style={{
        marginTop: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: '600px'
      }}>
        <h2 style={{color: '#333', marginBottom: '10px'}}>Heatmap Description</h2>
        <p style={{color: '#666', lineHeight: '1.6'}}>
          This heatmap visualizes activity levels throughout the week. Each cell represents a specific time and day combination, with colors indicating the intensity of activity. Darker colors represent higher activity levels, while lighter colors indicate lower activity. Use this chart to identify patterns and peak activity times.
        </p>
      </div>
    </div>
  );
}

export default App;