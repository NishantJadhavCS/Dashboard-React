// src/components/Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Sidebar.css";

import FullLogo from "../assets/tailadmin.svg";
import ShortLogo from "../assets/logo-short.svg";

import {
    HiOutlineHome,
    HiOutlineShoppingBag,
    HiOutlineCpuChip,
    HiOutlineCalendar,
    HiOutlineUser,
    HiOutlineClipboardDocumentCheck,
    HiOutlineDocumentText,
    HiOutlineTableCells,
    HiOutlineDocumentDuplicate,
    HiOutlineChartPie,
    HiOutlinePuzzlePiece,
    HiOutlineChatBubbleLeftRight,
    HiOutlineTicket,
    HiOutlineEnvelope,
} from "react-icons/hi2";

const IconChevron = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9l6 6 6-6" />
    </svg>
);

function NewBadge() {
    return <span className="sa-new-badge">NEW</span>;
}

/**
 * Leaf supports two modes:
 * - link mode: pass `to` prop -> uses NavLink for navigation
 * - button mode: no `to` -> uses a normal button and calls onClick(id)
 */
function Leaf({ id, label, icon, active, onClick, to }) {
    const baseClasses = "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium w-full text-left";
    const activeClass = "sa-leaf-active";
    const inactiveClass = "sa-leaf-inactive";

    if (to) {
        return (
            <NavLink
                to={to}
                className={({ isActive }) => `${baseClasses} ${isActive ? activeClass : inactiveClass}`}
                onClick={() => onClick?.(id)}
            >
                {icon}
                <span className="sa-leaf-label">{label}</span>
            </NavLink>
        );
    }

    return (
        <button
            type="button"
            onClick={() => onClick?.(id)}
            className={`${baseClasses} ${active ? activeClass : inactiveClass}`}
        >
            {icon}
            <span className="sa-leaf-label">{label}</span>
        </button>
    );
}

/** SubItem also supports NavLink via `to` prop. */
function SubItem({ id, label, active, onClick, to }) {
    const base = "px-3 py-2 rounded-lg text-sm w-full text-left block";
    if (to) {
        return (
            <NavLink
                to={to}
                className={({ isActive }) => `${base} ${isActive ? "sa-sub-active" : "sa-sub-inactive"}`}
                onClick={() => onClick?.(id)}
            >
                {label}
            </NavLink>
        );
    }
    return (
        <button
            type="button"
            onClick={() => onClick?.(id)}
            className={`${base} ${active ? "sa-sub-active" : "sa-sub-inactive"}`}
        >
            {label}
        </button>
    );
}

export default function Sidebar({ collapsed, onItemClick }) {
    const [open, setOpen] = useState({ dashboard: true, ecommerce: false });
    const [activeId, setActiveId] = useState("dashboard");

    // final collapse state (hover overrides collapsed)
    const isCollapsed = collapsed;

    function toggle(key) {
        setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
    }

    function handleClick(id) {
        setActiveId(id);
        onItemClick?.(id);
    }

    return (
        <aside className={`sidebar ${isCollapsed ? "sidebar-collapsed" : ""}`}>
            <div className="mb-8 flex justify-center p-4">
                {!isCollapsed ? (
                    <img src={FullLogo} alt="Full Logo" className="h-10 w-auto transition-all" />
                ) : (
                    <img src={ShortLogo} alt="Short Logo" className="h-10 w-10 transition-all" />
                )}
            </div>

            <nav className="text-slate-700 p-2">
                {!isCollapsed && <div className="text-xs font-semibold uppercase text-slate-400 mb-3"></div>}

                {/* DASHBOARD */}
                <div>
                    <div className="flex items-center justify-between">
                        {/* Dashboard now navigates to "/" */}
                        <Leaf
                            id="dashboard"
                            label="Dashboard"
                            icon={<HiOutlineHome className="w-5 h-5" />}
                            active={activeId === "dashboard"}
                            onClick={handleClick}
                            to="/"
                        />

                        {!isCollapsed && (
                            <button
                                type="button"
                                className="ml-2 p-1 rounded-full text-slate-400 hover:bg-slate-50"
                                onClick={() => toggle("dashboard")}
                            >
                                <div className={`${open.dashboard ? "rotate-180" : ""} transition-transform`}>
                                    <IconChevron />
                                </div>
                            </button>
                        )}
                    </div>

                    {!isCollapsed && open.dashboard && (
                        <div className="mt-3 ml-8 flex flex-col gap-2">
                            <SubItem id="dashboard.analytics" label="Analytics" active={activeId === "dashboard.analytics"} onClick={handleClick} />
                            <SubItem id="dashboard.marketing" label="Marketing" active={activeId === "dashboard.marketing"} onClick={handleClick} />
                            <SubItem id="dashboard.crm" label="CRM" active={activeId === "dashboard.crm"} onClick={handleClick} />
                            <SubItem id="dashboard.stocks" label="Stocks" active={activeId === "dashboard.stocks"} onClick={handleClick} />
                            <div className="flex items-center justify-between">
                                <SubItem id="dashboard.saas" label="SaaS" active={activeId === "dashboard.saas"} onClick={handleClick} />
                                <NewBadge />
                            </div>
                            <SubItem id="dashboard.logistics" label="Logistics" active={activeId === "dashboard.logistics"} onClick={handleClick} />
                        </div>
                    )}
                </div>

                {/* ECOMMERCE */}
                <div className="mt-6">
                    <div className="flex items-center justify-between">
                        <Leaf
                            id="ecommerce"
                            label="Ecommerce"
                            icon={<HiOutlineShoppingBag className="w-5 h-5" />}
                            active={activeId === "ecommerce"}
                            onClick={handleClick}
                        />

                        {!isCollapsed && (
                            <button
                                type="button"
                                className="ml-2 p-1 rounded-full text-slate-400 hover:bg-slate-50"
                                onClick={() => toggle("ecommerce")}
                            >
                                <div className={`${open.ecommerce ? "rotate-180" : ""} transition-transform`}>
                                    <IconChevron />
                                </div>
                            </button>
                        )}
                    </div>

                    {!isCollapsed && open.ecommerce && (
                        <div className="mt-2 ml-8 flex flex-col gap-1">
                            {/* Products -> /products */}
                            <SubItem
                                id="ecommerce.products"
                                label="Products"
                                active={activeId === "ecommerce.products"}
                                onClick={handleClick}
                                to="/products"
                            />
                            {/* Create Product -> /products/new */}
                            <SubItem
                                id="ecommerce.create"
                                label="Create Product"
                                active={activeId === "ecommerce.create"}
                                onClick={handleClick}
                                to="/products/new"
                            />
                        </div>
                    )}
                </div>

                {/* MAIN ITEMS */}
                <div className="mt-6">
                    <Leaf id="ai" label="AI Assistant" icon={<HiOutlineCpuChip className="w-5 h-5" />} active={activeId === "ai"} onClick={handleClick} />
                    {!isCollapsed && <NewBadge />}
                </div>

                <div className="mt-2">
                    {/* Calendar now navigates to /calendar */}
                    <Leaf id="calendar" label="Calendar" icon={<HiOutlineCalendar className="w-5 h-5" />} active={activeId === "calendar"} onClick={handleClick} to="/calendar" />
                </div>

                <div className="mt-2">
                    <Leaf id="user" label="User Profile" icon={<HiOutlineUser className="w-5 h-5" />} active={activeId === "user"} onClick={handleClick} />
                </div>

                <div className="mt-2">
                    <Leaf id="task" label="Task" icon={<HiOutlineClipboardDocumentCheck className="w-5 h-5" />} active={activeId === "task"} onClick={handleClick} />
                </div>

                <div className="mt-2">
                    <Leaf id="forms" label="Forms" icon={<HiOutlineDocumentText className="w-5 h-5" />} active={activeId === "forms"} onClick={handleClick} />
                </div>

                <div className="mt-2">
                    <Leaf id="tables" label="Tables" icon={<HiOutlineTableCells className="w-5 h-5" />} active={activeId === "tables"} onClick={handleClick} />
                </div>

                <div className="mt-2">
                    <Leaf id="pages" label="Pages" icon={<HiOutlineDocumentDuplicate className="w-5 h-5" />} active={activeId === "pages"} onClick={handleClick} />
                </div>

                {/* SUPPORT */}
                {!isCollapsed && <div className="text-xs font-semibold uppercase text-slate-400 mt-6 mb-3">Support</div>}

                <div className="space-y-2">
                    <Leaf id="chat" label="Chat" icon={<HiOutlineChatBubbleLeftRight className="w-5 h-5" />} active={activeId === "chat"} onClick={handleClick} />
                    <Leaf id="support-ticket" label="Support Ticket" icon={<HiOutlineTicket className="w-5 h-5" />} active={activeId === "support-ticket"} onClick={handleClick} />
                    <Leaf id="email" label="Email" icon={<HiOutlineEnvelope className="w-5 h-5" />} active={activeId === "email"} onClick={handleClick} />
                </div>

                {!isCollapsed && <div className="text-xs font-semibold uppercase text-slate-400 mt-6 mb-3">Others</div>}

                <div className="space-y-2">
                    <Leaf id="charts" label="Charts" icon={<HiOutlineChartPie className="w-5 h-5" />} active={activeId === "charts"} onClick={handleClick} />
                    <Leaf id="ui-elements" label="UI Elements" icon={<HiOutlinePuzzlePiece className="w-5 h-5" />} active={activeId === "ui-elements"} onClick={handleClick} />
                </div>
            </nav>
        </aside>
    );
}
