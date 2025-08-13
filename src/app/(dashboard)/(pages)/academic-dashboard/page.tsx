"use client";
import Footer from "@/components/footer";
import "../../style/page.css";
import Header from "../../components/header";
import Sidebar, { MenuItem } from "../../components/sidebar";
import { useState } from "react";
import { 
  FaTachometerAlt, 
  FaBook, 
  FaCalendarAlt, 
  FaClipboardList, 
  FaUsers, 
  FaChartBar,
  FaEdit,
  FaTrash,
  FaPlus,
  FaSearch,
  FaDownload
} from "react-icons/fa";

export default function AcademicDashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState("overview");

  // Academic-specific menu
  const menuItems: MenuItem[] = [
    { id: "overview", label: "Overview", icon: <FaTachometerAlt /> },
    { id: "courses", label: "Courses", icon: <FaBook /> },
    { id: "timetable", label: "Timetable", icon: <FaCalendarAlt /> },
    { id: "assignments", label: "Assignments", icon: <FaClipboardList /> },
    { id: "students", label: "Students", icon: <FaUsers /> },
    { id: "reports", label: "Reports", icon: <FaChartBar /> },
  ];

  // Academic-specific content
  let content;
  if (selectedMenu === "overview") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Academic Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Total Courses</h3>
            <p className="text-3xl font-bold mt-2">42</p>
            <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">8 active this semester</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Total Students</h3>
            <p className="text-3xl font-bold mt-2">1,842</p>
            <p className="text-sm text-green-600 dark:text-green-300 mt-1">+12% from last semester</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">Active Assignments</h3>
            <p className="text-3xl font-bold mt-2">24</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-1">4 due this week</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">Pending Reviews</h3>
            <p className="text-3xl font-bold mt-2">8</p>
            <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">2 require immediate attention</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition flex items-center gap-2">
              <FaPlus /> Create New Course
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition flex items-center gap-2">
              <FaPlus /> Add Assignment
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition flex items-center gap-2">
              <FaDownload /> Generate Report
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h2>
          <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
            <ul className="divide-y divide-gray-200 dark:divide-dark3/30">
              <li className="p-4 hover:bg-gray-50 dark:hover:bg-dark3/20">
                <div className="flex justify-between">
                  <h3 className="font-medium">New course created</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Advanced Web Development (CS401) added to curriculum</p>
              </li>
              <li className="p-4 hover:bg-gray-50 dark:hover:bg-dark3/20">
                <div className="flex justify-between">
                  <h3 className="font-medium">Assignment submitted</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">4 hours ago</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Database Design Project submitted by John Smith</p>
              </li>
              <li className="p-4 hover:bg-gray-50 dark:hover:bg-dark3/20">
                <div className="flex justify-between">
                  <h3 className="font-medium">Grade updated</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">1 day ago</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Final exam grades updated for Mathematics 101</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (selectedMenu === "courses") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Course Management</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-dark3 rounded-lg bg-white dark:bg-dark3/20 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition whitespace-nowrap flex items-center gap-2">
              <FaPlus /> New Course
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-dark3/60">
              <tr>
                <th className="py-3 px-4 text-left">Course</th>
                <th className="py-3 px-4 text-left">Code</th>
                <th className="py-3 px-4 text-left">Instructor</th>
                <th className="py-3 px-4 text-left">Students</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Advanced Mathematics</td>
                <td className="py-3 px-4">MATH301</td>
                <td className="py-3 px-4">Dr. Sarah Johnson</td>
                <td className="py-3 px-4">87</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
                </td>
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
                <td className="py-3 px-4">Database Systems</td>
                <td className="py-3 px-4">CS202</td>
                <td className="py-3 px-4">Prof. Michael Chen</td>
                <td className="py-3 px-4">92</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
                </td>
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
                <td className="py-3 px-4">Literature & Composition</td>
                <td className="py-3 px-4">ENG101</td>
                <td className="py-3 px-4">Dr. Emily Roberts</td>
                <td className="py-3 px-4">76</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Planned</span>
                </td>
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
                <td className="py-3 px-4">Computer Networks</td>
                <td className="py-3 px-4">CS305</td>
                <td className="py-3 px-4">Prof. David Wilson</td>
                <td className="py-3 px-4">65</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
                </td>
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
  } else if (selectedMenu === "timetable") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Academic Timetable</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <select className="w-full sm:w-48 px-4 py-2 border border-gray-300 dark:border-dark3 rounded-lg bg-white dark:bg-dark3/20 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Semester 1 - 2025</option>
                <option>Semester 2 - 2025</option>
                <option>Summer - 2025</option>
              </select>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition whitespace-nowrap flex items-center gap-2">
              <FaDownload /> Export Timetable
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
                <td className="py-3 px-4 font-medium">09:00 - 10:30</td>
                <td className="py-3 px-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Advanced Mathematics</div>
                    <div className="text-sm">MATH301 - Room 205</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Database Systems</div>
                    <div className="text-sm">CS202 - Lab 3</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Literature & Composition</div>
                    <div className="text-sm">ENG101 - Room 102</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Computer Networks</div>
                    <div className="text-sm">CS305 - Lab 7</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Statistics</div>
                    <div className="text-sm">STAT201 - Room 301</div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4 font-medium">11:00 - 12:30</td>
                <td className="py-3 px-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Database Systems</div>
                    <div className="text-sm">CS202 - Room 108</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Literature & Composition</div>
                    <div className="text-sm">ENG101 - Room 102</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Advanced Mathematics</div>
                    <div className="text-sm">MATH301 - Room 205</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Statistics</div>
                    <div className="text-sm">STAT201 - Room 301</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Computer Networks</div>
                    <div className="text-sm">CS305 - Lab 7</div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4 font-medium">14:00 - 15:30</td>
                <td className="py-3 px-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Computer Networks</div>
                    <div className="text-sm">CS305 - Lab 7</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Advanced Mathematics</div>
                    <div className="text-sm">MATH301 - Room 205</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Database Systems</div>
                    <div className="text-sm">CS202 - Lab 3</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Literature & Composition</div>
                    <div className="text-sm">ENG101 - Room 102</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Chemistry Lab</div>
                    <div className="text-sm">CHEM101 - Lab 5</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (selectedMenu === "assignments") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Assignment Management</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search assignments..."
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-dark3 rounded-lg bg-white dark:bg-dark3/20 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition whitespace-nowrap flex items-center gap-2">
              <FaPlus /> New Assignment
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-dark3/60">
              <tr>
                <th className="py-3 px-4 text-left">Assignment</th>
                <th className="py-3 px-4 text-left">Course</th>
                <th className="py-3 px-4 text-left">Due Date</th>
                <th className="py-3 px-4 text-left">Submitted</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Database Design Project</td>
                <td className="py-3 px-4">Database Systems</td>
                <td className="py-3 px-4">2025-08-18 23:59</td>
                <td className="py-3 px-4">42/92</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Open</span>
                </td>
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
                <td className="py-3 px-4">Literary Analysis Essay</td>
                <td className="py-3 px-4">Literature & Composition</td>
                <td className="py-3 px-4">2025-08-20 23:59</td>
                <td className="py-3 px-4">38/76</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Open</span>
                </td>
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
                <td className="py-3 px-4">Network Security Report</td>
                <td className="py-3 px-4">Computer Networks</td>
                <td className="py-3 px-4">2025-08-25 23:59</td>
                <td className="py-3 px-4">24/65</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Grading</span>
                </td>
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
                <td className="py-3 px-4">Calculus Problem Set</td>
                <td className="py-3 px-4">Advanced Mathematics</td>
                <td className="py-3 px-4">2025-09-01 23:59</td>
                <td className="py-3 px-4">87/87</td>
                <td className="py-3 px-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Completed</span>
                </td>
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
  } else if (selectedMenu === "students") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Student Management</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search students..."
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-dark3 rounded-lg bg-white dark:bg-dark3/20 focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition whitespace-nowrap flex items-center gap-2">
              <FaPlus /> Add Student
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-dark3/60">
              <tr>
                <th className="py-3 px-4 text-left">Student</th>
                <th className="py-3 px-4 text-left">Student ID</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Program</th>
                <th className="py-3 px-4 text-left">Enrolled Courses</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Student"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>John Smith</span>
                  </div>
                </td>
                <td className="py-3 px-4">STU123456</td>
                <td className="py-3 px-4">
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">john.smith@student.university.edu</span>
                </td>
                <td className="py-3 px-4">Computer Science</td>
                <td className="py-3 px-4">5</td>
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
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Student"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>Emily Johnson</span>
                  </div>
                </td>
                <td className="py-3 px-4">STU234567</td>
                <td className="py-3 px-4">
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">emily.j@student.university.edu</span>
                </td>
                <td className="py-3 px-4">Mathematics</td>
                <td className="py-3 px-4">4</td>
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
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/67.jpg"
                      alt="Student"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>Michael Brown</span>
                  </div>
                </td>
                <td className="py-3 px-4">STU345678</td>
                <td className="py-3 px-4">
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">m.brown@student.university.edu</span>
                </td>
                <td className="py-3 px-4">English Literature</td>
                <td className="py-3 px-4">6</td>
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
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Student"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>Sarah Davis</span>
                  </div>
                </td>
                <td className="py-3 px-4">STU456789</td>
                <td className="py-3 px-4">
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">sarah.d@student.university.edu</span>
                </td>
                <td className="py-3 px-4">Computer Networks</td>
                <td className="py-3 px-4">3</td>
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
  } else if (selectedMenu === "reports") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Academic Reports & Analytics</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Course Enrollment</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-dark3/20 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">Course Enrollment Chart</p>
            </div>
          </div>
          <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Grade Distribution</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-dark3/20 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">Grade Distribution Chart</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Performance Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">87%</p>
              <p className="text-sm text-blue-800 dark:text-blue-200">Average Attendance</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">92%</p>
              <p className="text-sm text-green-800 dark:text-green-200">Assignment Submission</p>
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-900/50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">3.7</p>
              <p className="text-sm text-yellow-800 dark:text-yellow-200">Average GPA</p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">94%</p>
              <p className="text-sm text-purple-800 dark:text-purple-200">Course Completion</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            Generate Enrollment Report
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
            Generate Grade Report
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition">
            Generate Performance Report
          </button>
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
