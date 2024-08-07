import React from 'react';
import Plot from 'react-plotly.js';

function App() {
  const data = [{
    type: 'treemap',
    labels: [
      'LLM', 'Architecture', 'Training', 'Applications', 'Ethics',
      'Transformer', 'LSTM', 'Attention', 'Self-Attention',
      'Supervised', 'Unsupervised', 'Reinforcement',
      'Text Generation', 'Translation', 'Summarization', 'Question Answering',
      'Bias', 'Privacy', 'Transparency', 'Accountability'
    ],
    parents: [
      '', 'LLM', 'LLM', 'LLM', 'LLM',
      'Architecture', 'Architecture', 'Architecture', 'Architecture',
      'Training', 'Training', 'Training',
      'Applications', 'Applications', 'Applications', 'Applications',
      'Ethics', 'Ethics', 'Ethics', 'Ethics'
    ],
    values: [100, 25, 25, 25, 25, 6, 6, 6, 7, 8, 8, 9, 6, 6, 6, 7, 6, 6, 6, 7],
    textinfo: 'label+value',
    hoverinfo: 'label+value+percent parent+percent entry',
    marker: {
      colors: [
        '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c',
        '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5',
        '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f',
        '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'
      ],
      line: {
        width: 2
      }
    }
  }];

  const layout = {
    title: 'Large Language Models (LLM) Mind Map',
    width: 1000,
    height: 800,
    margin: {t: 50, l: 25, r: 25, b: 25},
    font: {
      family: 'Arial, sans-serif',
      size: 12
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
        Large Language Models (LLM) Mind Map
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
            displayModeBar: false
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
        This mind map visualizes the key aspects of Large Language Models (LLMs), including their architecture, training methods, applications, and ethical considerations. Each branch represents a major category, with sub-branches detailing specific elements within that category.
      </p>
    </div>
  );
}

export default App;