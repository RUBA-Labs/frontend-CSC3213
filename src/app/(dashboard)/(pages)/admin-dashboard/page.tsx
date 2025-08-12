"use client";
import Footer from "@/components/footer";
import "../../style/page.css";
import Header from "../../components/header";
import Sidebar, { MenuItem } from "../../components/sidebar";
import { useState } from "react";
import { FaChartBar, FaCog, FaEdit, FaTachometerAlt, FaTrash, FaUsers } from "react-icons/fa";


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
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Admin Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Total Users</h3>
            <p className="text-3xl font-bold mt-2">1,248</p>
            <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">+12% from last month</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Active Sessions</h3>
            <p className="text-3xl font-bold mt-2">342</p>
            <p className="text-sm text-green-600 dark:text-green-300 mt-1">+5% from last hour</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">Pending Requests</h3>
            <p className="text-3xl font-bold mt-2">24</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-1">3 require immediate attention</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">System Status</h3>
            <p className="text-3xl font-bold mt-2">Operational</p>
            <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">All systems running smoothly</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
              Add New User
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
              Generate Report
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition">
              System Settings
            </button>
          </div>
        </div>
      </div>
    );
  } else if (selectedMenu === "users") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">User Management</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-dark3 rounded-lg bg-white dark:bg-dark3/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition whitespace-nowrap">
              Add New User
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-dark3/60">
              <tr>
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Last login</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">John Doe</td>
                <td className="py-3 px-4">Administrator</td>
                <td className="py-3 px-4">
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">john12@gmail.com</span>
                </td>
                <td className="py-3 px-4">2023-05-15 14:30</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Jane Smith</td>
                <td className="py-3 px-4">Editor</td>
                <td className="py-3 px-4">
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">smith9@gmail.com</span>
                </td>
                <td className="py-3 px-4">2023-05-14 09:15</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">Robert Johnson</td>
                <td className="py-3 px-4">Viewer</td>
                <td className="py-3 px-4">
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">rbjohn@gmail.com</span>
                </td>
                <td className="py-3 px-4">2023-05-10 16:45</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    <FaEdit />
                  </button>

                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (selectedMenu === "analytics") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Analytics Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">User Activity</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-dark3/20 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">User Activity Chart</p>
            </div>
          </div>
          <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">System Performance</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-dark3/20 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">Performance Metrics Chart</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="flex justify-between border-b border-gray-200 dark:border-dark3/30 pb-2">
              <span>New user registered</span>
              <span className="text-gray-500 dark:text-gray-400">2 hours ago</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 dark:border-dark3/30 pb-2">
              <span>Report generated</span>
              <span className="text-gray-500 dark:text-gray-400">5 hours ago</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 dark:border-dark3/30 pb-2">
              <span>Settings updated</span>
              <span className="text-gray-500 dark:text-gray-400">1 day ago</span>
            </li>
            <li className="flex justify-between pb-2">
              <span>Security scan completed</span>
              <span className="text-gray-500 dark:text-gray-400">2 days ago</span>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (selectedMenu === "settings") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">System Settings</h1>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">General Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Site Name</label>
                <input
                  type="text"
                  defaultValue="Admin Dashboard"
                  className="w-full p-2 border border-gray-300 dark:border-dark3 rounded bg-white dark:bg-dark3/20"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Admin Email</label>
                <input
                  type="email"
                  defaultValue="admin@example.com"
                  className="w-full p-2 border border-gray-300 dark:border-dark3 rounded bg-white dark:bg-dark3/20"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Maintenance Mode</label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="maintenance"
                    className="mr-2"
                  />
                  <label htmlFor="maintenance" className="text-gray-700 dark:text-gray-300">
                    Enable maintenance mode
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 dark:border-dark3/30">
            <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Session Timeout (minutes)</label>
                <input
                  type="number"
                  defaultValue="30"
                  className="w-full p-2 border border-gray-300 dark:border-dark3 rounded bg-white dark:bg-dark3/20"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Two-Factor Authentication</label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="2fa"
                    defaultChecked
                    className="mr-2"
                  />
                  <label htmlFor="2fa" className="text-gray-700 dark:text-gray-300">
                    Require 2FA for all admin users
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 dark:border-dark3/30">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pagebackground min-h-screen flex flex-col">

      <Header />

      <div className="flex flex-1 flex-col md:flex-row w-full pt-20">
        <Sidebar
          menuItems={menuItems}
          onMenuSelect={setSelectedMenu}
          selectedMenu={selectedMenu}
        />
        <div className="flex-1 flex justify-center items-start p-4 mt-4">
          <div className="w-full bg-white/40 dark:bg-dark3/30 rounded-xl p-4 shadow-lg overflow-y-auto max-h-[calc(100vh-120px)]">
            {content}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
