"use client";
import Footer from "@/components/footer";
import "../../style/page.css";
import Header from "../../components/header";
import AdminSidebar from "../../components/adminSidebar";
import { useState } from "react";

export default function AdminDashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState<"overview" | "users" | "analytics" | "settings">("overview");

  let content;
  if (selectedMenu === "overview") {
    content = (
      <>
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-lg">
          Welcome to the admin dashboard. Here you can manage users, view
          analytics, and perform administrative tasks.
        </p>
      </>
    );
  } else if (selectedMenu === "users") {
    content = (
      <>
        <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
        <p className="text-lg">Here you can add, edit, or remove users.</p>
      </>
    );
  } else if (selectedMenu === "analytics") {
    content = (
      <>
        <h1 className="text-2xl font-bold mb-4">Analytics</h1>
        <p className="text-lg">View analytics and reports here.</p>
      </>
    );
  } else if (selectedMenu === "settings") {
    content = (
      <>
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <p className="text-lg">Adjust your dashboard settings here.</p>
      </>
    );
  }

  return (
    <div className="pagebackground min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Middle - Main Content */}
      <div className="flex flex-1 flex-col md:flex-row w-full">
        {/* Left Sidebar with fold/unfold */}
        <AdminSidebar
          onMenuSelect={(menu) => setSelectedMenu(menu)}
          selectedMenu={selectedMenu}
        />
        {/* Right Main Content */}
        <div className="flex-1 flex justify-center items-start p-2 sm:p-4 md:p-6">
          <div className="w-full bg-white/40 dark:bg-dark3/30 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 m-1 sm:m-2 scale-100">
            {content}
          </div>
        </div>
      </div>
      {/* Bottom - Footer */}
      <Footer />
    </div>
  );
}