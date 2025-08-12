"use client";
import Footer from "@/components/footer";
import "../../style/page.css";
import Header from "../../components/header";
import Sidebar, { MenuItem } from "../../components/sidebar";
import { useState } from "react";
import { FaBook, FaCalendarAlt, FaClipboardList, FaUserGraduate } from "react-icons/fa";

export default function StudentDashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState("courses");

  // Student-specific menu
  const menuItems: MenuItem[] = [
    { id: "courses", label: "My Courses", icon: <FaBook /> },
    { id: "timetable", label: "Timetable", icon: <FaCalendarAlt /> },
    { id: "assignments", label: "Assignments", icon: <FaClipboardList /> },
    { id: "profile", label: "Profile", icon: <FaUserGraduate /> },
  ];

  // Student-specific content
  let content;
  if (selectedMenu === "courses") {
    content = <p>List of enrolled courses will be shown here.</p>;
  } else if (selectedMenu === "timetable") {
    content = <p>Your class timetable will appear here.</p>;
  } else if (selectedMenu === "assignments") {
    content = <p>All your assignments and due dates will be shown here.</p>;
  } else if (selectedMenu === "profile") {
    content = <p>Your student profile information will be here.</p>;
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
