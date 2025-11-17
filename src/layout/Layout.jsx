// src/layout/Layout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Layout() {
    // keep collapse state here so it's preserved across pages
    const EXPANDED_WIDTH = 288;
    const COLLAPSED_WIDTH = 80;
    const [collapsed, setCollapsed] = useState(false);
    const mainOffset = collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH;

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar is shared */}
            <Sidebar collapsed={collapsed} />

            {/* Main area */}
            <div
                className="flex flex-col w-full transition-all duration-300"
                style={{ marginLeft: `${mainOffset}px`, transitionProperty: "margin-left, transform" }}
            >
                {/* Navbar is shared */}
                <Navbar collapsed={collapsed} onToggleSidebar={() => setCollapsed(s => !s)} />

                {/* The page content changes here. Outlet renders the active route's element */}
                <main className="pt-20 px-6 transition-all duration-300">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
