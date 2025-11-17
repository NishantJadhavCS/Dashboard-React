// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import Calendar from "./pages/Calendar";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* index route -> rendered at "/" */}
        <Route index element={<Dashboard />} />

        {/* nested routes -> path becomes "/products" etc */}
        <Route path="products" element={<Products />} />
        <Route path="products/new" element={<NewProduct />} />
        <Route path="calendar" element={<Calendar />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
