import React from "react";
import { SlidersHorizontal } from "lucide-react";

const orders = [
  {
    id: 1,
    name: "MacBook Pro 13”",
    variants: "2 Variants",
    image: "/home/harsh/Dashboard-React/src/assets/WhatsApp Image 2025-11-14 at 3.06.30 PM.jpeg",
    category: "Laptop",
    price: "$2399.00",
    status: "Delivered",
  },
  {
    id: 2,
    name: "Apple Watch Ultra",
    variants: "1 Variant",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE53ref_VW_34FR+watch-case-40-alum-midnight-nc-se_VW_34FR_WF_CO_GEO_US?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1661027744873",
    category: "Watch",
    price: "$879.00",
    status: "Pending",
  },
  {
    id: 3,
    name: "iPhone 15 Pro Max",
    variants: "2 Variants",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-family-hero?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1693087131834",
    category: "SmartPhone",
    price: "$1869.00",
    status: "Delivered",
  },
  {
    id: 4,
    name: "iPad Pro 3rd Gen",
    variants: "2 Variants",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-12-wifi-silver-2018?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1548451195569",
    category: "Electronics",
    price: "$1699.00",
    status: "Canceled",
  },
  {
    id: 5,
    name: "AirPods Pro 2nd Gen",
    variants: "1 Variant",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1660803978187",
    category: "Accessories",
    price: "$240.00",
    status: "Delivered",
  },
];

const statusClasses = {
  Delivered: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Canceled: "bg-red-100 text-red-600",
};

export default function RecentOrdersTable() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition text-gray-700 text-sm">
            <SlidersHorizontal size={16} /> Filter
          </button>
          <button className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition text-gray-700 text-sm">
            See all
          </button>
        </div>
      </div>

      {/* Table Head */}
      <div className="grid grid-cols-4 text-sm font-semibold text-gray-500 border-b pb-3">
        <p>Products</p>
        <p>Category</p>
        <p>Price</p>
        <p>Status</p>
      </div>

      {/* Table Rows */}
      <div className="mt-4 space-y-5">
        {orders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-4 items-center py-4 border-b last:border-b-0"
          >
            {/* Product */}
            <div className="flex items-center gap-4">
              <img
                src={order.image}
                alt={order.name}
                className="w-14 h-14 object-cover rounded-lg border"
              />
              <div>
                <p className="font-medium text-gray-900">{order.name}</p>
                <p className="text-gray-500 text-sm">{order.variants}</p>
              </div>
            </div>

            {/* Category */}
            <p className="text-gray-700">{order.category}</p>

            {/* Price */}
            <p className="text-gray-700">{order.price}</p>

            {/* Status */}
            <span
              className={`px-3 py-1 text-sm rounded-full font-medium ${statusClasses[order.status]}`}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
