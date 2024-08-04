import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  { name: "Page A", uv: 0 },
  { name: "Page B", uv: 0 },
  { name: "Page C", uv: 0 },
  { name: "Page D", uv: 0 },
  { name: "Page E", uv: 0 },
  { name: "Page F", uv: 1000 },
  { name: "Page G", uv: 2000 },
  { name: "Page H", uv: 4000 },
  { name: "Page I", uv: 8000 },
  { name: "Page J", uv: 16000 },
];

export default function App() {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex mb-4">
          <div className="bg-gray-200 p-2 rounded-l-md">navigation</div>
          <div className="bg-gray-300 p-2">chart</div>
        </div>
        <div className="bg-gray-200 p-2 mb-2 rounded-md">title</div>
        <div className="bg-gray-200 p-2 rounded-md">menu</div>
        <div className="mt-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}