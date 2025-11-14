// src/components/Sidebar.jsx
import React, { useState } from "react";
import "./css/Sidebar.css"; // <-- component-specific CSS (put file at src/css/Sidebar.css)
import LogoIcon from "../assets/tailadmin.svg";

const IconLogo = () => (
    <img
        src={LogoIcon}
        alt="TailAdmin Logo"
        className="h-10 w-auto"
    />
);


const IconGrid = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
);

const IconBox = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4.73a2 2 0 0 0 2 0l7-4.73A2 2 0 0 0 21 16z" />
    </svg>
);

const IconChevron = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M6 9l6 6 6-6" />
    </svg>
);

/* NEW badge component */
function NewBadge() {
    return <span className="sa-new-badge">NEW</span>;
}

/* Leaf with icon */
function Leaf({ id, label, icon, active, onClick }) {
    const base = "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium w-full text-left";
    return (
        <button
            type="button"
            onClick={() => onClick?.(id)}
            className={`${base} ${active ? "sa-leaf-active" : "sa-leaf-inactive"}`}
            aria-pressed={active ? "true" : "false"}
        >
            {icon}
            <span className="sa-leaf-label">{label}</span>
        </button>
    );
}

/* Submenu item (no icon) */
function SubItem({ id, label, active, onClick }) {
    const base = "px-3 py-2 rounded-lg text-sm w-full text-left";
    return (
        <button
            type="button"
            onClick={() => onClick?.(id)}
            className={`${base} ${active ? "sa-sub-active" : "sa-sub-inactive"}`}
            aria-pressed={active ? "true" : "false"}
        >
            {label}
        </button>
    );
}

export default function Sidebar({ onItemClick }) {
    const [open, setOpen] = useState({ dashboard: true, ecommerce: false });
    const [activeId, setActiveId] = useState("dashboard");

    const toggle = (k) => setOpen((s) => ({ ...s, [k]: !s[k] }));
    const handleClick = (id) => {
        setActiveId(id);
        if (typeof onItemClick === "function") onItemClick(id);
        else console.log("Sidebar clicked:", id);
    };

    return (
        <aside className="sidebar w-72 min-h-screen sticky top-0 bg-white/95 border-r border-slate-100 px-6 py-8">
            {/* header */}
            <div className="mb-8">
                <div className="flex items-center">
                    <IconLogo />
                </div>
            </div>

            <nav className="text-slate-700">
                {/* MENU */}
                <div className="mb-6">
                    <div className="text-xs font-semibold uppercase text-slate-400 mb-3">Menu</div>

                    {/* Dashboard parent */}
                    <div>
                        <div className="flex items-center justify-between">
                            <Leaf
                                id="dashboard"
                                label="Dashboard"
                                icon={<IconGrid />}
                                active={activeId === "dashboard"}
                                onClick={handleClick}
                            />
                            <button
                                type="button"
                                className="ml-2 p-1 rounded-full text-slate-400 hover:bg-slate-50"
                                onClick={() => toggle("dashboard")}
                                aria-expanded={open.dashboard}
                                title="Toggle Dashboard submenu"
                            >
                                <div className={`${open.dashboard ? "rotate-180" : ""} transition-transform`}>
                                    <IconChevron />
                                </div>
                            </button>
                        </div>

                        {open.dashboard && (
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

                    {/* TOP-LEVEL Ecommerce (separate) */}
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <Leaf
                                id="ecommerce"
                                label="Ecommerce"
                                icon={<IconBox />}
                                active={activeId === "ecommerce" || activeId?.startsWith("ecommerce.")}
                                onClick={() => handleClick("ecommerce")}
                            />
                            <button
                                type="button"
                                className="ml-2 p-1 rounded-full text-slate-400 hover:bg-slate-50"
                                onClick={() => toggle("ecommerce")}
                                aria-expanded={open.ecommerce}
                                title="Toggle Ecommerce submenu"
                            >
                                <div className={`${open.ecommerce ? "rotate-180" : ""} transition-transform`}>
                                    <IconChevron />
                                </div>
                            </button>
                        </div>

                        {/* Ecommerce nested items (Products + Create Product) */}
                        {open.ecommerce && (
                            <div className="mt-2 ml-8 flex flex-col gap-1">
                                <SubItem id="ecommerce.products" label="Products" active={activeId === "ecommerce.products"} onClick={handleClick} />
                                <SubItem id="ecommerce.create" label="Create Product" active={activeId === "ecommerce.create"} onClick={handleClick} />
                            </div>
                        )}
                    </div>

                    {/* Other top-level leaves */}
                    <div className="mt-6">
                        <div className="flex items-center">
                            <Leaf id="ai" label="AI Assistant" icon={<IconBox />} active={activeId === "ai"} onClick={handleClick} />
                            <NewBadge />
                        </div>
                    </div>

                    <div className="mt-2">
                        <Leaf id="calendar" label="Calendar" icon={<IconBox />} active={activeId === "calendar"} onClick={handleClick} />
                    </div>
                    <div className="mt-2">
                        <Leaf id="user" label="User Profile" icon={<IconBox />} active={activeId === "user"} onClick={handleClick} />
                    </div>
                    <div className="mt-2">
                        <Leaf id="task" label="Task" icon={<IconBox />} active={activeId === "task"} onClick={handleClick} />
                    </div>
                    <div className="mt-2">
                        <Leaf id="forms" label="Forms" icon={<IconBox />} active={activeId === "forms"} onClick={handleClick} />
                    </div>
                    <div className="mt-2">
                        <Leaf id="tables" label="Tables" icon={<IconBox />} active={activeId === "tables"} onClick={handleClick} />
                    </div>
                    <div className="mt-2">
                        <Leaf id="pages" label="Pages" icon={<IconBox />} active={activeId === "pages"} onClick={handleClick} />
                    </div>
                </div>

                {/* SUPPORT */}
                <div className="mb-6">
                    <div className="text-xs font-semibold uppercase text-slate-400 mb-3">Support</div>
                    <div className="space-y-2">
                        <Leaf id="chat" label="Chat" icon={<IconBox />} active={activeId === "chat"} onClick={handleClick} />
                        <Leaf id="support-ticket" label="Support Ticket" icon={<IconBox />} active={activeId === "support-ticket"} onClick={handleClick} />
                        <Leaf id="email" label="Email" icon={<IconBox />} active={activeId === "email"} onClick={handleClick} />
                    </div>
                </div>

                {/* OTHERS */}
                <div>
                    <div className="text-xs font-semibold uppercase text-slate-400 mb-3">Others</div>
                    <div className="space-y-2">
                        <Leaf id="charts" label="Charts" icon={<IconBox />} active={activeId === "charts"} onClick={handleClick} />
                        <Leaf id="ui-elements" label="UI Elements" icon={<IconBox />} active={activeId === "ui-elements"} onClick={handleClick} />
                    </div>
                </div>
            </nav>
        </aside>
    );
}
