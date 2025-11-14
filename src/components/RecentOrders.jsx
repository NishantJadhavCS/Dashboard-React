// src/components/RecentOrder.jsx
import React from "react";

// import your product images
import product01 from "../assets/product-01.jpg";
import product02 from "../assets/product-02.jpg";
import product03 from "../assets/product-03.jpg";
import product04 from "../assets/product-04.jpg";
import product05 from "../assets/product-05.jpg";

function StatusBadge({ status }) {
    const map = {
        Delivered: "bg-emerald-100 text-emerald-700",
        Pending: "bg-amber-100 text-amber-700",
        Canceled: "bg-rose-100 text-rose-700",
    };
    const cls = map[status] ?? "bg-slate-100 text-slate-700";
    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${cls}`}>
            {status}
        </span>
    );
}

export default function RecentOrder({ items }) {
    const sample = items ?? [
        {
            id: "ORD-1001",
            product: "MacBook Pro 13”",
            variants: "2 Variants",
            price: "$2399.00",
            category: "Laptop",
            status: "Delivered",
            thumb: product01,
        },
        {
            id: "ORD-1002",
            product: "Apple Watch Ultra",
            variants: "1 Variant",
            price: "$879.00",
            category: "Watch",
            status: "Pending",
            thumb: product02,
        },
        {
            id: "ORD-1003",
            product: "iPhone 15 Pro Max",
            variants: "2 Variants",
            price: "$1869.00",
            category: "SmartPhone",
            status: "Delivered",
            thumb: product03,
        },
        {
            id: "ORD-1004",
            product: "iPad Pro 3rd Gen",
            variants: "2 Variants",
            price: "$1699.00",
            category: "Electronics",
            status: "Canceled",
            thumb: product04,
        },
        {
            id: "ORD-1005",
            product: "AirPods Pro 2nd Gen",
            variants: "1 Variant",
            price: "$240.00",
            category: "Accessories",
            status: "Delivered",
            thumb: product05,
        },
    ];

    return (
        <section className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
            {/* header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-800">Recent Orders</h3>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                        aria-label="Filter"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 6H2" strokeLinecap="round" />
                            <path d="M19 12H5" strokeLinecap="round" />
                            <path d="M16 18H8" strokeLinecap="round" />
                        </svg>
                        <span>Filter</span>
                    </button>

                    <button
                        type="button"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
                    >
                        See all
                    </button>
                </div>
            </div>

            <div className="border-t border-slate-100" />

            {/* table header */}
            <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_1fr] gap-4 text-sm text-slate-500 py-3 px-1 border-b border-slate-100 mt-4">
                <div>Products</div>
                <div>Category</div>
                <div>Price</div>
                <div>Status</div>
            </div>

            {/* rows */}
            <div className="divide-y divide-slate-100 mt-2">
                {sample.map((row) => (
                    <div key={row.id} className="py-4 flex items-center gap-4">
                        {/* product cell */}
                        <div className="flex-1 flex items-center gap-3 min-w-0">
                            <img
                                src={row.thumb}
                                alt={row.product}
                                className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-slate-100"
                            />
                            <div className="min-w-0">
                                <div className="text-sm font-semibold text-slate-800 truncate">{row.product}</div>
                                <div className="text-xs text-slate-400 mt-1">{row.variants}</div>
                            </div>
                        </div>

                        {/* category */}
                        <div className="w-28 hidden md:block text-sm text-slate-600">{row.category}</div>

                        {/* price */}
                        <div className="w-28 hidden md:block text-sm text-slate-700">{row.price}</div>

                        {/* status */}
                        <div className="w-32 flex justify-start md:justify-start">
                            <StatusBadge status={row.status} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
