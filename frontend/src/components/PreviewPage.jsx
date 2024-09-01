import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const App = () => {
  const [fibonacciData, setFibonacciData] = useState([]);

  useEffect(() => {
    const generateFibonacciSequence = (n) => {
      const sequence = [0, 1];
      for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
      }
      return sequence;
    };

    const data = generateFibonacciSequence(20).map((value, index) => ({
      index: index + 1,
      value: value,
    }));

    setFibonacciData(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-indigo-600">斐波那契数列图像</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <LineChart width={600} height={400} data={fibonacciData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="index" label={{ value: '序号', position: 'insideBottomRight', offset: -10 }} />
          <YAxis label={{ value: '值', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
      <p className="mt-4 text-gray-600 text-center max-w-md">
        这个图表展示了斐波那契数列的前20个数。每个点代表序列中的一个数，横轴是数字在序列中的位置，纵轴是该数字的值。
      </p>
    </div>
  );
};

export default App;