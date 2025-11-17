import React from "react";

export default function MonthlyTargetCard() {
  return (
    <div className="w-full h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col">

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Monthly Target</h2>
          <p className="text-sm text-gray-500">Target you've set for each month</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">•••</button>
      </div>

      {/* Gauge + center */}
      <div className="flex flex-col items-center flex-grow justify-center">

        <svg width="220" height="120" viewBox="0 0 220 120" className="mb-2">
          <path
            d="M20 110 A90 90 0 0 1 200 110"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M20 110 A90 90 0 0 1 165 35"
            fill="none"
            stroke="#6366F1"
            strokeWidth="14"
            strokeLinecap="round"
          />
        </svg>

        <h1 className="text-3xl font-bold text-gray-900">75.55%</h1>
        <span className="mt-1 text-xs font-medium bg-green-100 text-green-600 px-2.5 py-0.5 rounded-full">
          +10%
        </span>

        <p className="text-center text-sm text-gray-600 mt-4">
          You earn $3287 today, it's higher than last month.
          <br /> Keep up your good work!
        </p>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-3 text-center mt-6 pt-4 border-t border-gray-200">
        <div>
          <p className="text-sm text-gray-500">Target</p>
          <p className="text-gray-900 font-semibold">$20K <span className="text-red-500">↓</span></p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Revenue</p>
          <p className="text-gray-900 font-semibold">$20K <span className="text-green-500">↑</span></p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Today</p>
          <p className="text-gray-900 font-semibold">$20K <span className="text-green-500">↑</span></p>
        </div>
      </div>

    </div>
  );
}
