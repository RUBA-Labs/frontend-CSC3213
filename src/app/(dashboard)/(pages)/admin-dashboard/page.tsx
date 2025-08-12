"use client";
import Footer from "@/components/footer";
import "../../style/page.css";
import Header from "../../components/header";
import Sidebar, { MenuItem } from "../../components/sidebar";
import { useState } from "react";
import { FaChartBar, FaCog, FaTachometerAlt, FaUsers } from "react-icons/fa";

export default function AdminDashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState("overview");

  const menuItems: MenuItem[] = [
    { id: "overview", label: "Overview", icon: <FaTachometerAlt /> },
    { id: "users", label: "Manage Users", icon: <FaUsers /> },
    { id: "analytics", label: "Analytics", icon: <FaChartBar /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
  ];

  let content;
  if (selectedMenu === "overview") {
    content = <p>Overview Content</p>;
  } else if (selectedMenu === "users") {
    content = <p>Users Content</p>;
  } else if (selectedMenu === "analytics") {
    content = <p>Analytics Content</p>;
  } else if (selectedMenu === "settings") {
    content = <p>Settings Content</p>;
  }

  return (
    <div className="pagebackground min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row w-full">
        <Sidebar
          menuItems={menuItems}
          onMenuSelect={setSelectedMenu}
          selectedMenu={selectedMenu}
        />
        <div className="flex-1 flex justify-center items-start p-4">
          <div className="w-full bg-white/40 dark:bg-dark3/30 rounded-xl p-4 shadow-lg">
            {content}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
