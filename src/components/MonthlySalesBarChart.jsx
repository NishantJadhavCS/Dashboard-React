import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MonthlySales() {
  const data = [
    { name: "Jan", value: 150 },
    { name: "Feb", value: 360 },
    { name: "Mar", value: 180 },
    { name: "Apr", value: 280 },
    { name: "May", value: 170 },
    { name: "Jun", value: 190 },
    { name: "Jul", value: 260 },
    { name: "Aug", value: 100 },
    { name: "Sep", value: 200 },
    { name: "Oct", value: 350 },
    { name: "Nov", value: 260 },
    { name: "Dec", value: 100 },
  ];

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6">
      {/* Top section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Monthly Sales</h2>
        <button className="text-gray-400 hover:text-gray-600">⋮</button>
      </div>

      {/* Chart */}
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip />
            <Bar dataKey="value" fill="#4B7BFF" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
