"use client";
import Footer from "@/components/footer";
import PrivateRoute from "@/components/PrivateRoute";
import React, { useState } from "react";
import "../../style/page.css";
import Header from "../../components/header";
import Sidebar, { MenuItem } from "../../components/sidebar";
import { FaTachometerAlt, FaCalendarAlt, FaFlask, FaClipboardList, FaChartBar, FaWrench } from "react-icons/fa";

export default function LabAllocationAdminDashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState("overview");

  // Lab allocation dashboard menu
  const menuItems: MenuItem[] = [
    { id: "overview", label: "Overview", icon: <FaTachometerAlt /> },
    { id: "schedule", label: "Lab Schedule", icon: <FaCalendarAlt /> },
    { id: "equipment", label: "Equipment", icon: <FaFlask /> },
    { id: "requests", label: "Allocation Requests", icon: <FaClipboardList /> },
    { id: "reports", label: "Lab Reports", icon: <FaChartBar /> },
    { id: "maintenance", label: "Maintenance", icon: <FaWrench /> },
  ];

  // Lab allocation dashboard content
  let content;
  if (selectedMenu === "overview") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Computer Lab Allocation Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Active Labs</h3>
            <p className="text-3xl font-bold mt-2">8</p>
            <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">Currently in use</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Available Labs</h3>
            <p className="text-3xl font-bold mt-2">4</p>
            <p className="text-sm text-green-600 dark:text-green-300 mt-1">Ready for allocation</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">Pending Requests</h3>
            <p className="text-3xl font-bold mt-2">12</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-1">Awaiting approval</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">Equipment Status</h3>
            <p className="text-3xl font-bold mt-2">96%</p>
            <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">Operational</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
              Allocate Lab
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
              View Schedule
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition">
              Equipment Check
            </button>
          </div>
        </div>
      </div>
    );
  } else if (selectedMenu === "schedule") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Computer Lab Schedule</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <select className="w-full sm:w-48 px-4 py-2 border border-gray-300 dark:border-dark3 rounded-lg bg-white dark:bg-dark3/20 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Week 1 - Aug 12-18</option>
                <option>Week 2 - Aug 19-25</option>
                <option>Week 3 - Aug 26-Sep 1</option>
              </select>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition whitespace-nowrap">
              Download Schedule
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-dark3/60">
              <tr>
                <th className="py-3 px-4 text-left">Time</th>
                <th className="py-3 px-4 text-left">Monday</th>
                <th className="py-3 px-4 text-left">Tuesday</th>
                <th className="py-3 px-4 text-left">Wednesday</th>
                <th className="py-3 px-4 text-left">Thursday</th>
                <th className="py-3 px-4 text-left">Friday</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4 font-medium">09:00 - 11:00</td>
                <td className="py-3 px-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Programming Lab A</div>
                    <div className="text-sm">Dr. Smith</div>
                    <div className="text-sm">Year 2 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Networking Lab B</div>
                    <div className="text-sm">Prof. Johnson</div>
                    <div className="text-sm">Year 3 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Database Lab C</div>
                    <div className="text-sm">Dr. Williams</div>
                    <div className="text-sm">Year 2 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Graphics Lab D</div>
                    <div className="text-sm">Prof. Brown</div>
                    <div className="text-sm">Year 3 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-lg">
                    <div className="font-semibold">AI Lab E</div>
                    <div className="text-sm">Dr. Davis</div>
                    <div className="text-sm">Year 4 Students</div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4 font-medium">11:30 - 13:30</td>
                <td className="py-3 px-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Networking Lab B</div>
                    <div className="text-sm">Prof. Johnson</div>
                    <div className="text-sm">Year 3 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Database Lab C</div>
                    <div className="text-sm">Dr. Williams</div>
                    <div className="text-sm">Year 2 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Programming Lab A</div>
                    <div className="text-sm">Dr. Smith</div>
                    <div className="text-sm">Year 2 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-lg">
                    <div className="font-semibold">AI Lab E</div>
                    <div className="text-sm">Dr. Davis</div>
                    <div className="text-sm">Year 4 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Graphics Lab D</div>
                    <div className="text-sm">Prof. Brown</div>
                    <div className="text-sm">Year 3 Students</div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4 font-medium">14:30 - 16:30</td>
                <td className="py-3 px-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Graphics Lab D</div>
                    <div className="text-sm">Prof. Brown</div>
                    <div className="text-sm">Year 3 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Programming Lab A</div>
                    <div className="text-sm">Dr. Smith</div>
                    <div className="text-sm">Year 2 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Networking Lab B</div>
                    <div className="text-sm">Prof. Johnson</div>
                    <div className="text-sm">Year 3 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Database Lab C</div>
                    <div className="text-sm">Dr. Williams</div>
                    <div className="text-sm">Year 2 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Research Lab F</div>
                    <div className="text-sm">Dr. Miller</div>
                    <div className="text-sm">Postgrad Students</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (selectedMenu === "equipment") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Computer Equipment Management</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
              Add New Equipment
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-dark3/60">
              <tr>
                <th className="py-3 px-4 text-left">Equipment</th>
                <th className="py-3 px-4 text-left">Lab</th>
                <th className="py-3 px-4 text-left">Quantity</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Last Maintenance</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">High-Performance Workstations</td>
                <td className="py-3 px-4">Graphics Lab D</td>
                <td className="py-3 px-4">20</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Operational</span>
                </td>
                <td className="py-3 px-4">2025-07-15</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    Schedule
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Networking Equipment</td>
                <td className="py-3 px-4">Networking Lab B</td>
                <td className="py-3 px-4">15</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Maintenance</span>
                </td>
                <td className="py-3 px-4">2025-06-20</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    Schedule
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Database Servers</td>
                <td className="py-3 px-4">Database Lab C</td>
                <td className="py-3 px-4">8</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Operational</span>
                </td>
                <td className="py-3 px-4">2025-07-22</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    Schedule
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">AI Workstations</td>
                <td className="py-3 px-4">AI Lab E</td>
                <td className="py-3 px-4">12</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Operational</span>
                </td>
                <td className="py-3 px-4">2025-08-01</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    Schedule
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (selectedMenu === "requests") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Computer Lab Allocation Requests</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search requests..."
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-dark3 rounded-lg bg-white dark:bg-dark3/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition whitespace-nowrap">
              Filter by Lab
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-dark3/60">
              <tr>
                <th className="py-3 px-4 text-left">Requester</th>
                <th className="py-3 px-4 text-left">Lab</th>
                <th className="py-3 px-4 text-left">Date/Time</th>
                <th className="py-3 px-4 text-left">Purpose</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">John Smith</td>
                <td className="py-3 px-4">Programming Lab A</td>
                <td className="py-3 px-4">2025-08-15 09:00-11:00</td>
                <td className="py-3 px-4">Data Structures Workshop</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pending</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-green-500 hover:text-green-700 mr-2 p-1 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30">
                    Approve
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    Reject
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Sarah Johnson</td>
                <td className="py-3 px-4">Networking Lab B</td>
                <td className="py-3 px-4">2025-08-16 14:30-16:30</td>
                <td className="py-3 px-4">Network Security Lab</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Approved</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Michael Brown</td>
                <td className="py-3 px-4">Graphics Lab D</td>
                <td className="py-3 px-4">2025-08-17 11:30-13:30</td>
                <td className="py-3 px-4">3D Modeling Workshop</td>
                <td className="py-3 px-4">
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Rejected</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">Emily Davis</td>
                <td className="py-3 px-4">Database Lab C</td>
                <td className="py-3 px-4">2025-08-18 09:00-11:00</td>
                <td className="py-3 px-4">SQL Optimization Lab</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pending</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-green-500 hover:text-green-700 mr-2 p-1 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30">
                    Approve
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (selectedMenu === "reports") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Computer Lab Reports</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Lab Utilization</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-dark3/20 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">Lab Utilization Chart</p>
            </div>
          </div>
          <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Equipment Usage</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-dark3/20 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">Equipment Usage Chart</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="flex justify-between border-b border-gray-200 dark:border-dark3/30 pb-2">
              <span>New lab allocation request for Programming Lab A</span>
              <span className="text-gray-500 dark:text-gray-400">2 hours ago</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 dark:border-dark3/30 pb-2">
              <span>Equipment maintenance completed for Networking Equipment</span>
              <span className="text-gray-500 dark:text-gray-400">5 hours ago</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 dark:border-dark3/30 pb-2">
              <span>Lab schedule updated for next week</span>
              <span className="text-gray-500 dark:text-gray-400">1 day ago</span>
            </li>
            <li className="flex justify-between pb-2">
              <span>New equipment added to AI Lab E</span>
              <span className="text-gray-500 dark:text-gray-400">2 days ago</span>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (selectedMenu === "maintenance") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Computer Equipment Maintenance</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
              Schedule Maintenance
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-dark3/60">
              <tr>
                <th className="py-3 px-4 text-left">Equipment</th>
                <th className="py-3 px-4 text-left">Lab</th>
                <th className="py-3 px-4 text-left">Last Maintenance</th>
                <th className="py-3 px-4 text-left">Next Due</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">High-Performance Workstations</td>
                <td className="py-3 px-4">Graphics Lab D</td>
                <td className="py-3 px-4">2025-07-15</td>
                <td className="py-3 px-4">2025-10-15</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">On Schedule</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Log
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Networking Equipment</td>
                <td className="py-3 px-4">Networking Lab B</td>
                <td className="py-3 px-4">2025-06-20</td>
                <td className="py-3 px-4">2025-08-20</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Due Soon</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Schedule
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Database Servers</td>
                <td className="py-3 px-4">Database Lab C</td>
                <td className="py-3 px-4">2025-07-22</td>
                <td className="py-3 px-4">2025-10-22</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">On Schedule</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Log
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">AI Workstations</td>
                <td className="py-3 px-4">AI Lab E</td>
                <td className="py-3 px-4">2025-08-01</td>
                <td className="py-3 px-4">2025-11-01</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">On Schedule</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Log
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <PrivateRoute>
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
    </PrivateRoute>
  );
}
