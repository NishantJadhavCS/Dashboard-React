import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";

const data = [
  { month: "Jan", sales: 180, revenue: 40 },
  { month: "Feb", sales: 190, revenue: 30 },
  { month: "Mar", sales: 170, revenue: 50 },
  { month: "Apr", sales: 160, revenue: 40 },
  { month: "May", sales: 175, revenue: 55 },
  { month: "Jun", sales: 165, revenue: 40 },
  { month: "Jul", sales: 170, revenue: 70 },
  { month: "Aug", sales: 200, revenue: 100 },
  { month: "Sep", sales: 230, revenue: 110 },
  { month: "Oct", sales: 210, revenue: 120 },
  { month: "Nov", sales: 240, revenue: 150 },
  { month: "Dec", sales: 235, revenue: 140 },
];

export default function StatisticsChart() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Statistics</h2>
          <p className="text-sm text-gray-500">Target you've set for each month</p>
        </div>

        <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl text-sm font-medium">
          <button className="px-3 py-1 bg-white rounded-lg shadow-sm text-gray-800">Monthly</button>
          <button className="px-3 py-1 text-gray-500 hover:text-gray-800">Quarterly</button>
          <button className="px-3 py-1 text-gray-500 hover:text-gray-800">Annually</button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#6366F1" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
            <XAxis dataKey="month" className="text-xs" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} className="text-xs" />
            
            <Tooltip
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white border border-gray-200 shadow-md rounded-xl px-4 py-2 text-sm">
                      <p className="font-semibold mb-1">{label}</p>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Sales: {payload[0].value}
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-blue-300 rounded-full"></span> Revenue: {payload[1].value}
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="none"
              fill="url(#salesGradient)"
            />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366F1"
              strokeWidth={3}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#93C5FD"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
