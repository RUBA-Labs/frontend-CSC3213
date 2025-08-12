"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

interface SidebarProps {
  menuItems: MenuItem[];
  onMenuSelect: (menuId: string) => void;
  selectedMenu: string;
}

export default function Sidebar({ menuItems, onMenuSelect, selectedMenu }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      className={`
        flex transition-all duration-300 ease-in-out
        bg-dark3/15 dark:bg-dark1/40 backdrop-blur-md rounded-xl shadow-lg m-2
        ${isSidebarOpen
          ? "flex-row md:flex-col w-full md:w-[15%] max-w-full md:max-w-[220px] p-2 md:p-4"
          : "flex-row md:flex-col w-full md:w-16 max-w-full md:max-w-[64px] p-2 items-center"
        }
      `}
    >
      {/* Fold/Unfold Button */}
      <button
        onClick={() => setIsSidebarOpen((open) => !open)}
        className="mr-2 md:mr-0 mb-0 md:mb-4 p-1 rounded bg-dark3/20 dark:bg-dark3/30 hover:bg-dark3/40 dark:hover:bg-dark3/50 transition"
        title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      {/* Dynamic Menu */}
      <nav className="flex-1 w-full">
        <ul className={`flex ${isSidebarOpen ? "flex-col" : "flex-row"} md:flex-col gap-2 md:gap-3 w-full`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onMenuSelect(item.id)}
                className={`flex items-center gap-2 px-2 py-1 rounded w-full hover:bg-dark3/20 dark:hover:bg-dark3/10 transition
                  ${selectedMenu === item.id ? "bg-dark3/20 dark:bg-dark3/10 font-bold" : ""}
                  justify-center md:justify-start
                `}
              >
                {item.icon}
                <span
                  className={`${isSidebarOpen ? "inline" : "hidden"} transition-all duration-200`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Profile section stays fixed */}
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
