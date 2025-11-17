import React from "react";

export default function StatsCard({ icon, title, value, percentage, isPositive }) {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 flex flex-col gap-4">
      
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
        {icon}
      </div>

      {/* Title */}
      <p className="text-sm text-gray-600">{title}</p>

      {/* Value + Percentage */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">{value}</h2>

        <span
          className={`px-3 py-1 text-sm rounded-full font-medium flex items-center gap-1 
          ${isPositive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
        >
          <span>{isPositive ? "↑" : "↓"}</span>
          {percentage}
        </span>
      </div>
    </div>
  );
}
