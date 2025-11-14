// src/components/Navbar.jsx
import React from "react";
import "./css/Navbar.css"; // component CSS (src/css/Navbar.css)

/**
 * Navbar
 * - left: hamburger + search
 * - right: theme toggle, notifications, profile
 *
 * Props:
 *  - onToggleSidebar?: () => void
 *  - avatarSrc?: string
 *  - userName?: string
 *  - onSearch?: (q:string) => void
 */

function IconHamburger() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function IconSearch() {
    return (
        <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="11" cy="11" r="6" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function IconMoon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function IconBell() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function Navbar({
    onToggleSidebar,
    avatarSrc,
    userName = "Musharof",
    onSearch,
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const q = e.target.search?.value ?? "";
        if (typeof onSearch === "function") onSearch(q);
        else console.log("search:", q);
    };

    return (
        <header className="navbar">
            {/* centered container with constrained width */}
            <div className="max-w-container">
                {/* LEFT: hamburger + search */}
                <div className="nav-left flex items-center gap-4">
                    <button
                        type="button"
                        aria-label="Toggle sidebar"
                        onClick={onToggleSidebar}
                        className="p-2 rounded-lg hover:bg-slate-50 text-slate-600"
                    >
                        <IconHamburger />
                    </button>

                    {/* search form - left aligned and grows */}
                    <form onSubmit={handleSubmit} role="search" aria-label="Site search" className="w-full max-w-[420px]">
                        <label className="relative block">
                            <span className="sr-only">Search</span>
                            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                <IconSearch />
                            </div>

                            <input
                                name="search"
                                className="search-input block w-full rounded-xl border border-slate-100 bg-white px-10 py-3 text-sm placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                                placeholder="Search or type command..."
                                aria-label="Search or type command"
                                autoComplete="off"
                            />

                            <span className="kbd-hint absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">
                                ⌘K
                            </span>
                        </label>
                    </form>
                </div>

                {/* RIGHT: icons + profile */}
                <div className="nav-right flex items-center gap-4">
                    <button
                        type="button"
                        aria-label="Toggle theme"
                        className="p-2 rounded-lg hover:bg-slate-50 text-slate-600"
                        title="Toggle theme"
                    >
                        <IconMoon />
                    </button>

                    <div className="relative">
                        <button
                            type="button"
                            aria-label="Notifications"
                            className="p-2 rounded-lg hover:bg-slate-50 text-slate-600"
                        >
                            <IconBell />
                        </button>
                        <span className="notif-dot" aria-hidden></span>
                    </div>

                    <div className="profile flex items-center gap-3 pl-2 border-l border-slate-100">
                        {avatarSrc ? (
                            <img src={avatarSrc} alt={`${userName} avatar`} className="h-9 w-9 rounded-full object-cover" />
                        ) : (
                            <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-sm font-semibold text-slate-700">
                                {userName?.split(" ")?.map(s => s[0]).slice(0, 2).join("")}
                            </div>
                        )}

                        <div className="hidden sm:flex flex-col leading-tight">
                            <span className="text-sm font-medium text-slate-800">{userName}</span>
                            <span className="text-xs text-slate-400">Admin</span>
                        </div>

                        <button
                            type="button"
                            aria-label="Open profile menu"
                            className="p-1 rounded-md text-slate-400 hover:text-slate-600"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
