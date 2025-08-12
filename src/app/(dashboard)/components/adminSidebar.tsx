"use client";
import { useState } from "react";
import { FaChartBar, FaChevronLeft, FaChevronRight, FaCog, FaTachometerAlt, FaUsers } from "react-icons/fa";



export default function AdminSidebar({ onMenuSelect, selectedMenu }: { onMenuSelect: (menu: "overview" | "users" | "analytics" | "settings") => void; selectedMenu: "overview" | "users" | "analytics" | "settings" }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div
            className={`
                flex
                transition-all duration-300 ease-in-out
                bg-dark3/15 dark:bg-dark1/40 backdrop-blur-md rounded-xl shadow-lg m-2
                ${isSidebarOpen 
                    ? "flex-row md:flex-col h-auto md:h-auto w-full md:w-[15%] min-w-0 md:min-w-[64px] max-w-full md:max-w-[220px] p-2 md:p-4"
                    : "flex-row md:flex-col h-16 md:h-auto w-full md:w-16 min-w-0 md:min-w-[64px] max-w-full md:max-w-[64px] p-2 items-center"
                }
            `}
        >
            {/* Fold/Unfold Button */}
            <button
                onClick={() => setIsSidebarOpen((open) => !open)}
                className="mr-2 md:mr-0 mb-0 md:mb-4 p-1 rounded bg-dark3/20 dark:bg-dark3/30 hover:bg-dark3/40 dark:hover:bg-dark3/50 transition"
                title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
                {/* Chevron direction changes based on screen size and open state */}
                <span className="block md:hidden">
                    {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
                </span>
                <span className="hidden md:block">
                    {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
                </span>
            </button>
            <nav className="flex-1 w-full">
                <ul className={`flex ${isSidebarOpen ? "flex-col" : "flex-row"} md:flex-col gap-2 md:gap-3 w-full`}>
                    <li>
                        <button
                            onClick={() => onMenuSelect("overview")}
                            className={`flex items-center gap-2 px-2 py-1 rounded w-full hover:bg-dark3/20 dark:hover:bg-dark3/10 transition 
                                ${selectedMenu === "overview" ? "bg-dark3/20 dark:bg-dark3/10 font-bold" : ""}
                                justify-center md:justify-start
                            `}
                        >
                            <FaTachometerAlt />
                            <span className={`
                                ${isSidebarOpen ? "inline" : "hidden"}
                                transition-all duration-200
                                ${isSidebarOpen ? "w-auto opacity-100 ml-2" : "w-0 opacity-0 ml-0"}
                            `}>
                                Overview
                            </span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onMenuSelect("users")}
                            className={`flex items-center gap-2 px-2 py-1 rounded w-full hover:bg-dark3/20 dark:hover:bg-dark3/10 transition 
                                ${selectedMenu === "users" ? "bg-dark3/20 dark:bg-dark3/10 font-bold" : ""}
                                justify-center md:justify-start
                            `}
                        >
                            <FaUsers />
                            <span className={`
                                ${isSidebarOpen ? "inline" : "hidden"}
                                transition-all duration-200
                                ${isSidebarOpen ? "w-auto opacity-100 ml-2" : "w-0 opacity-0 ml-0"}
                            `}>
                                Manage Users
                            </span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onMenuSelect("analytics")}
                            className={`flex items-center gap-2 px-2 py-1 rounded w-full hover:bg-dark3/20 dark:hover:bg-dark3/10 transition 
                                ${selectedMenu === "analytics" ? "bg-dark3/20 dark:bg-dark3/10 font-bold" : ""}
                                justify-center md:justify-start
                            `}
                        >
                            <FaChartBar />
                            <span className={`
                                ${isSidebarOpen ? "inline" : "hidden"}
                                transition-all duration-200
                                ${isSidebarOpen ? "w-auto opacity-100 ml-2" : "w-0 opacity-0 ml-0"}
                            `}>
                                Analytics
                            </span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => onMenuSelect("settings")}
                            className={`flex items-center gap-2 px-2 py-1 rounded w-full hover:bg-dark3/20 dark:hover:bg-dark3/10 transition 
                                ${selectedMenu === "settings" ? "bg-dark3/20 dark:bg-dark3/10 font-bold" : ""}
                                justify-center md:justify-start
                            `}
                        >
                            <FaCog />
                            <span className={`
                                ${isSidebarOpen ? "inline" : "hidden"}
                                transition-all duration-200
                                ${isSidebarOpen ? "w-auto opacity-100 ml-2" : "w-0 opacity-0 ml-0"}
                            `}>
                                Settings
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
            {/* Profile section at the bottom (hide on mobile for space) */}
            <div
                className={`
                    flex items-center gap-3 mt-4 p-2 rounded-lg bg-dark3/10 dark:bg-dark3/20
                    ${isSidebarOpen ? "" : "flex-col"}
                    justify-center md:justify-start
                `}
            >
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-dark3"
                />
                {isSidebarOpen && (
                    <div className="text-center md:text-left">
                        <div className="font-semibold text-dark5 dark:text-dark3">John Doe</div>
                        <div className="text-xs text-dark3 dark:text-dark3/80">Admin</div>
                    </div>
                )}
            </div>
        </div>
    );
}