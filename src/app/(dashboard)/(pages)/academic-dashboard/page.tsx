"use client";
import Footer from "@/components/footer";
import "../../style/page.css";
import Header from "../../components/header";
import Sidebar, { MenuItem } from "../../components/sidebar";
import { useState } from "react";
import { FaTachometerAlt, FaCalendarAlt, FaBullhorn, FaClipboardList } from "react-icons/fa";

export default function AcademicDashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState("overview");

  // Academic dashboard menu
  const menuItems: MenuItem[] = [
    { id: "overview", label: "Overview", icon: <FaTachometerAlt /> },
    { id: "timetable", label: "Timetable", icon: <FaCalendarAlt /> },
    { id: "announcements", label: "Announcements", icon: <FaBullhorn /> },
    { id: "examclaims", label: "Exam Claims", icon: <FaClipboardList /> },
  ];

  // Academic dashboard content
  let content;
  if (selectedMenu === "overview") {
    content = (
      <>
        <h1 className="text-2xl font-bold mb-4">Academic Dashboard Overview</h1>
        <p className="text-lg">Welcome to the academic dashboard. Here you can view your timetable, announcements, and exam claims.</p>
      </>
    );
  } else if (selectedMenu === "timetable") {
    content = (
      <>
        <h1 className="text-2xl font-bold mb-4">Timetable</h1>
        <p className="text-lg">Your class timetable will appear here.</p>
      </>
    );
  } else if (selectedMenu === "announcements") {
    content = (
      <>
        <h1 className="text-2xl font-bold mb-4">Announcements</h1>
        <p className="text-lg">View and manage announcements here.</p>
      </>
    );
  } else if (selectedMenu === "examclaims") {
    content = (
      <>
        <h1 className="text-2xl font-bold mb-4">Exam Claims</h1>
        <p className="text-lg">View and manage exam claims here.</p>
      </>
    );
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