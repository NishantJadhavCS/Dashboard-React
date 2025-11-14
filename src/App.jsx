// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RecentOrder from "./components/RecentOrders";
export default function App() {
  const NAVBAR_HEIGHT = 64; // px (match Navbar css height)
  const SIDEBAR_WIDTH = 288; // px (w-72 = 18rem = 288px)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div style={{ paddingTop: NAVBAR_HEIGHT, marginLeft: SIDEBAR_WIDTH }} className="flex">
        <Sidebar />
        <div className="space-y-6">
          <RecentOrder />
          {/* other widgets */}
        </div>
      </div>
    </div>
  );
}
