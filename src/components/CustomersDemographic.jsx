import React from "react";

export default function CustomersDemographic() {
  return (
    <div className="w-full rounded-3xl border border-gray-200 bg-white p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Customers Demographic
          </h2>
          <p className="text-sm text-gray-500">
            Number of customer based on country
          </p>
        </div>

        <button className="p-2 rounded-full hover:bg-gray-100">
          <span className="text-xl">⋮</span>
        </button>
      </div>

      {/* Placeholder Map Box */}
      <div className="rounded-2xl bg-gray-100 h-60 w-full mb-8 flex items-center justify-center">
        <span className="text-gray-400 text-sm">Map Placeholder</span>
      </div>

      {/* Country List */}
      <div className="space-y-6">
        {/* 1 — USA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Red circular flag placeholder */}
            <div className="w-10 h-10 rounded-full bg-red-500"></div>

            <div>
              <h4 className="text-base font-semibold text-gray-800">USA</h4>
              <p className="text-sm text-gray-500">2,379 Customers</p>
            </div>
          </div>

          {/* Progress Bar + % */}
          <div className="flex items-center gap-3 w-40">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-blue-500"
                style={{ width: "79%" }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-700">79%</span>
          </div>
        </div>

        {/* 2 — France */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Yellow circular flag placeholder */}
            <div className="w-10 h-10 rounded-full bg-yellow-400"></div>

            <div>
              <h4 className="text-base font-semibold text-gray-800">France</h4>
              <p className="text-sm text-gray-500">589 Customers</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-40">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-blue-300"
                style={{ width: "23%" }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-700">23%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
