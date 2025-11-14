// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RecentOrder from "./components/RecentOrders";

export default function App() {
  const EXPANDED_WIDTH = 288;
  const COLLAPSED_WIDTH = 80;

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* SIDEBAR */}
      <Sidebar collapsed={collapsed} />

      {/* MAIN AREA */}
      <div
        className="flex flex-col w-full transition-all duration-300"
        style={{
          marginLeft: collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH,
        }}
      >
        <Navbar
          collapsed={collapsed}
          onToggleSidebar={() => setCollapsed((s) => !s)}
        />

        <div className="pt-20 px-6 transition-all duration-300">
          <RecentOrder />
        </div>
      </div>
    </div>
  );
}
