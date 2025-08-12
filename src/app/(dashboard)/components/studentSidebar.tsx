import { useState } from "react";
import { FaChartBar, FaChevronLeft, FaChevronRight, FaCog, FaTachometerAlt, FaUsers } from "react-icons/fa";

export default function StudentSidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <div
            className={`transition-all duration-300 ease-in-out bg-dark5/40 dark:bg-dark1/40 backdrop-blur-md rounded-xl shadow-lg m-2 flex flex-col justify-between
                            ${isSidebarOpen ? "w-[15%] min-w-[64px] max-w-[220px] p-4" : "w-16 min-w-[64px] max-w-[64px] p-2 items-center"}
                        `}
        >
            {/* Fold/Unfold Button */}
            <button
                onClick={() => setIsSidebarOpen((open) => !open)}
                className="mb-4 p-1 rounded bg-dark3/20 dark:bg-dark3/30 hover:bg-dark3/40 dark:hover:bg-dark3/50 transition self-end"
                title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
                {isSidebarOpen ? (
                    <FaChevronLeft />
                ) : (
                    <FaChevronRight />
                )}
            </button>
            <div className={`flex-1 w-full`}>
                <nav>
                    <ul className={`space-y-3 ${isSidebarOpen ? "" : "space-y-6"}`}>
                        <li>
                            <a href="/dashboard/overview" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-dark3/20 dark:hover:bg-dark3/10 transition">
                                <FaTachometerAlt />
                                {isSidebarOpen && <span>Overview</span>}
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/users" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-dark3/20 dark:hover:bg-dark3/10 transition">
                                <FaUsers />
                                {isSidebarOpen && <span>Manage Users</span>}
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/analytics" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-dark3/20 dark:hover:bg-dark3/10 transition">
                                <FaChartBar />
                                {isSidebarOpen && <span>Analytics</span>}
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/settings" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-dark3/20 dark:hover:bg-dark3/10 transition">
                                <FaCog />
                                {isSidebarOpen && <span>Settings</span>}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Profile section at the bottom */}
            <div className={`flex items-center gap-3 mt-8 p-2 rounded-lg bg-dark3/10 dark:bg-dark3/20 ${isSidebarOpen ? "" : "flex-col"} justify-center md:justify-start`}>
            <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-dark3"
            />
            {isSidebarOpen && (
                <div>
                    <div className="font-semibold text-dark5 dark:text-dark3">John Doe</div>
                    <div className="text-xs text-dark3 dark:text-dark3/80">Admin</div>
                </div>
            )}
        </div>
        </div>
    );
}