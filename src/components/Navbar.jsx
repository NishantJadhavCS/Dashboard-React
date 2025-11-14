// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import "./css/Navbar.css"; // component CSS (src/css/Navbar.css)
import {
    HiOutlineUser,
    HiOutlineCog6Tooth,
    HiOutlineInformationCircle,
    HiOutlineArrowRightOnRectangle
} from "react-icons/hi2";

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

/* small helper to generate example notifications */
function sampleNotifications() {
    return [
        {
            id: 1,
            name: "Lionel Messi",
            text: "Won his 8th Ballon D'or - France Football",
            meta: "Paris • 5 min ago",
            color: "#34D399", // green dot
        },
        {
            id: 2,
            name: "Cristiano Ronaldo",
            text: "Joined Manchester United - ESPN",
            meta: "Premeir League • 8 min ago",
            color: "#34D399",
        },
        {
            id: 3,
            name: "Neymar Junior",
            text: "Injured at half time - Injury FC",
            meta: "Project • 15 min ago",
            color: "#F87171",
        },
        {
            id: 4,
            name: "Lionel Messi",
            text: "Won the FIFA World Cup - FIFA",
            meta: "Project • 1 hr ago",
            color: "#34D399", 
        },
    ];
}

export default function Navbar({
    onToggleSidebar,
    avatarSrc,
    userName = "Messi",
    onSearch,
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const q = e.target.search?.value ?? "";
        if (typeof onSearch === "function") onSearch(q);
        else console.log("search:", q);
    };

    // notification menu state + refs for click-outside handling
    const [notifOpen, setNotifOpen] = useState(false);
    const notifRef = useRef(null);
    const notifBtnRef = useRef(null);
    const [notifications] = useState(sampleNotifications());

    // profile menu state + refs
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef(null);
    const profileBtnRef = useRef(null);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") {
                setNotifOpen(false);
                setProfileOpen(false);
            }
        }
        function onDocClick(e) {
            // close notif menu if clicking outside both menu and its button
            if (notifRef.current && notifBtnRef.current) {
                if (!notifRef.current.contains(e.target) && !notifBtnRef.current.contains(e.target)) {
                    setNotifOpen(false);
                }
            }
            // close profile menu if clicking outside both menu and its button
            if (profileRef.current && profileBtnRef.current) {
                if (!profileRef.current.contains(e.target) && !profileBtnRef.current.contains(e.target)) {
                    setProfileOpen(false);
                }
            }
        }
        document.addEventListener("click", onDocClick);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("click", onDocClick);
            document.removeEventListener("keydown", onKey);
        };
    }, []);

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
                        className="p-2 super-rounded hover:bg-slate-50 text-slate-600"
                        title="Toggle theme"
                    >
                        <IconMoon />
                    </button>

                    {/* Notifications: button + menu */}
                    <div className="relative" ref={notifRef}>
                        <button
                            ref={notifBtnRef}
                            type="button"
                            aria-label="Notifications"
                            aria-expanded={notifOpen}
                            onClick={() => {
                                // toggle notif and ensure profile closes
                                setNotifOpen((s) => !s);
                                setProfileOpen(false);
                            }}
                            className="p-2 super-rounded hover:bg-slate-50 text-slate-600"
                        >
                            <IconBell />
                        </button>
                        <span className="notif-dot" aria-hidden></span>

                        {/* Notification menu */}
                        {notifOpen && (
                            <div
                                className="notif-menu"
                                role="dialog"
                                aria-label="Notifications"
                                aria-modal="false"
                                onClick={(e) => e.stopPropagation()}
                                ref={notifRef}
                            >
                                <div className="notif-header">
                                    <strong>Notification</strong>
                                    <button
                                        type="button"
                                        className="notif-close"
                                        aria-label="Close notifications"
                                        onClick={() => setNotifOpen(false)}
                                    >
                                        ×
                                    </button>
                                </div>

                                <div className="notif-list">
                                    {notifications.map((n) => (
                                        <div className="notif-item" key={n.id}>
                                            <div className="notif-left">
                                                <div className="notif-avatar" aria-hidden>
                                                    <span>{n.name.split(" ").map(s => s[0]).slice(0, 2).join("")}</span>
                                                </div>
                                                <div className="notif-content">
                                                    <div className="notif-title">
                                                        <span className="notif-name">{n.name}</span>
                                                        <span className="notif-text"> {n.text}</span>
                                                    </div>
                                                    <div className="notif-meta">{n.meta}</div>
                                                </div>
                                            </div>

                                            <div className="notif-dot-inline" style={{ background: n.color }} aria-hidden />
                                        </div>
                                    ))}
                                </div>

                                <div className="notif-footer">
                                    <button type="button" className="view-all-btn">View All Notifications</button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Profile: avatar + name + dropdown */}
                    <div className="profile-wrap" ref={profileRef}>
                        <div className="profile flex items-center gap-3 pl-2 border-l border-slate-100">
                            {avatarSrc ? (
                                <img
                                    src={avatarSrc}
                                    alt={`${userName} avatar`}
                                    className="h-9 w-9 rounded-full object-cover cursor-pointer"
                                    ref={profileBtnRef}
                                    onClick={() => {
                                        setProfileOpen((s) => !s);
                                        setNotifOpen(false);
                                    }}
                                />
                            ) : (
                                <div
                                    ref={profileBtnRef}
                                    onClick={() => {
                                        setProfileOpen((s) => !s);
                                        setNotifOpen(false);
                                    }}
                                    className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-sm font-semibold text-slate-700 cursor-pointer"
                                >
                                    {userName?.split(" ")?.map(s => s[0]).slice(0, 2).join("")}
                                </div>
                            )}

                            <div className="hidden sm:flex flex-col leading-tight cursor-pointer" onClick={() => {
                                setProfileOpen((s) => !s);
                                setNotifOpen(false);
                            }}>
                                <span className="text-sm font-medium text-slate-800">{userName}</span>
                            </div>

                            <button
                                type="button"
                                aria-label="Open profile menu"
                                className="p-1 rounded-md text-slate-400 hover:text-slate-600"
                                onClick={() => {
                                    setProfileOpen((s) => !s);
                                    setNotifOpen(false);
                                }}
                                ref={profileBtnRef}
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        {profileOpen && (
                            <div className="profile-menu" role="menu" aria-label="User menu" onClick={(e) => e.stopPropagation()}>
                                <div className="profile-menu-head">
                                    <div className="profile-menu-avatar">
                                        {avatarSrc ? (
                                            <img src={avatarSrc} alt={`${userName} avatar`} />
                                        ) : (
                                            <span>{userName?.split(" ").map(s => s[0]).slice(0, 2).join("")}</span>
                                        )}
                                    </div>
                                    <div className="profile-menu-info">
                                        <div className="profile-menu-name">{userName}</div>
                                        <div className="profile-menu-email">messi@fifa.com</div>
                                    </div>
                                </div>

                                <div className="profile-menu-list">
                                    <button type="button" className="profile-menu-item" role="menuitem">
                                        <HiOutlineUser className="menu-item-icon react-icon" />
                                        <span>Edit profile</span>
                                    </button>

                                    <button type="button" className="profile-menu-item" role="menuitem">
                                        <HiOutlineCog6Tooth className="menu-item-icon react-icon" />
                                        <span>Account settings</span>
                                    </button>

                                    <button type="button" className="profile-menu-item" role="menuitem">
                                        <HiOutlineInformationCircle className="menu-item-icon react-icon" />
                                        <span>Support</span>
                                    </button>
                                </div>

                                <div className="profile-menu-sep" />

                                <div className="profile-menu-bottom">
                                    <button type="button" className="profile-menu-logout" role="menuitem">
                                        <HiOutlineArrowRightOnRectangle className="menu-item-icon react-icon" />
                                        <span className="text-black">Sign out</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
