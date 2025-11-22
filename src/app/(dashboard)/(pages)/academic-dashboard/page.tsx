"use client";
import Footer from "@/components/footer";
import "../../style/page.css";
import Header from "../../components/header";
import Sidebar, { MenuItem } from "../../components/sidebar";
import { useState } from "react";
import { FaTachometerAlt, FaCalendarAlt, FaBullhorn, FaClipboardList, FaChartBar, FaBook} from "react-icons/fa";

export default function AcademicDashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState("overview");

  // Academic dashboard menu
  const menuItems: MenuItem[] = [
    { id: "overview", label: "Overview", icon: <FaTachometerAlt /> },
    { id: "timetable", label: "Timetable", icon: <FaCalendarAlt /> },
    { id: "announcements", label: "Announcements", icon: <FaBullhorn /> },
    { id: "examclaims", label: "Exam Claims", icon: <FaClipboardList /> },
    { id: "courses", label: "My Courses", icon: <FaBook /> },
    { id: "analytics", label: "Analytics", icon: <FaChartBar /> },
  ];

  // Academic dashboard content
  let content;
  if (selectedMenu === "overview") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Academic Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Courses</h3>
            <p className="text-3xl font-bold mt-2">8</p>
            <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">Teaching this semester</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Students</h3>
            <p className="text-3xl font-bold mt-2">248</p>
            <p className="text-sm text-green-600 dark:text-green-300 mt-1">Total enrollment</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">Pending Claims</h3>
            <p className="text-3xl font-bold mt-2">12</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-1">Exam claims to review</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">Announcements</h3>
            <p className="text-3xl font-bold mt-2">5</p>
            <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">Published this month</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
              Create Announcement
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
              Review Exam Claims
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition">
              View Class List
            </button>
          </div>
        </div>
      </div>
    );
  } else if (selectedMenu === "timetable") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Teaching Timetable</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <select className="w-full sm:w-48 px-4 py-2 border border-gray-300 dark:border-dark3 rounded-lg bg-white dark:bg-dark3/20 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Week 1 - Aug 12-18</option>
                <option>Week 2 - Aug 19-25</option>
                <option>Week 3 - Aug 26-Sep 1</option>
              </select>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition whitespace-nowrap">
              Download Timetable
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
                    <div className="font-semibold">Mathematics 101</div>
                    <div className="text-sm">Room 205</div>
                    <div className="text-sm">Year 1 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Physics 202</div>
                    <div className="text-sm">Lab 3</div>
                    <div className="text-sm">Year 2 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-lg">
                    <div className="font-semibold">English Lit</div>
                    <div className="text-sm">Room 102</div>
                    <div className="text-sm">Year 1 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Computer Sci</div>
                    <div className="text-sm">Lab 7</div>
                    <div className="text-sm">Year 3 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-lg">
                    <div className="font-semibold">History</div>
                    <div className="text-sm">Room 301</div>
                    <div className="text-sm">Year 1 Students</div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4 font-medium">11:00 - 12:30</td>
                <td className="py-3 px-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Physics 202</div>
                    <div className="text-sm">Room 108</div>
                    <div className="text-sm">Year 2 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-lg">
                    <div className="font-semibold">English Lit</div>
                    <div className="text-sm">Room 102</div>
                    <div className="text-sm">Year 1 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Mathematics 101</div>
                    <div className="text-sm">Room 205</div>
                    <div className="text-sm">Year 1 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-lg">
                    <div className="font-semibold">History</div>
                    <div className="text-sm">Room 301</div>
                    <div className="text-sm">Year 1 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Computer Sci</div>
                    <div className="text-sm">Lab 7</div>
                    <div className="text-sm">Year 3 Students</div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4 font-medium">14:00 - 15:30</td>
                <td className="py-3 px-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Computer Sci</div>
                    <div className="text-sm">Lab 7</div>
                    <div className="text-sm">Year 3 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Mathematics 101</div>
                    <div className="text-sm">Room 205</div>
                    <div className="text-sm">Year 1 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Physics 202</div>
                    <div className="text-sm">Lab 3</div>
                    <div className="text-sm">Year 2 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-lg">
                    <div className="font-semibold">English Lit</div>
                    <div className="text-sm">Room 102</div>
                    <div className="text-sm">Year 1 Students</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Chemistry Lab</div>
                    <div className="text-sm">Lab 5</div>
                    <div className="text-sm">Year 2 Students</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (selectedMenu === "announcements") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Announcements</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
              Create New Announcement
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-dark3/60">
              <tr>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Audience</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Midterm Exam Schedule</td>
                <td className="py-3 px-4">2025-08-10</td>
                <td className="py-3 px-4">All Students</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Published</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Library Closure Notice</td>
                <td className="py-3 px-4">2025-08-05</td>
                <td className="py-3 px-4">All Students</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Published</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">New Course Materials Available</td>
                <td className="py-3 px-4">2025-08-01</td>
                <td className="py-3 px-4">Mathematics 101</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Published</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">Guest Lecture - Quantum Computing</td>
                <td className="py-3 px-4">2025-07-28</td>
                <td className="py-3 px-4">Computer Science</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Draft</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (selectedMenu === "examclaims") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Exam Claims</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search claims..."
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-dark3 rounded-lg bg-white dark:bg-dark3/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition whitespace-nowrap">
              Filter by Course
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-dark3/60">
              <tr>
                <th className="py-3 px-4 text-left">Student</th>
                <th className="py-3 px-4 text-left">Course</th>
                <th className="py-3 px-4 text-left">Claim Type</th>
                <th className="py-3 px-4 text-left">Date Submitted</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">John Smith</td>
                <td className="py-3 px-4">Mathematics 101</td>
                <td className="py-3 px-4">Extension Request</td>
                <td className="py-3 px-4">2025-08-10</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pending</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Review
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Sarah Johnson</td>
                <td className="py-3 px-4">Physics 202</td>
                <td className="py-3 px-4">Special Arrangements</td>
                <td className="py-3 px-4">2025-08-08</td>
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
                <td className="py-3 px-4">Computer Science</td>
                <td className="py-3 px-4">Alternative Assessment</td>
                <td className="py-3 px-4">2025-08-05</td>
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
                <td className="py-3 px-4">English Literature</td>
                <td className="py-3 px-4">Extension Request</td>
                <td className="py-3 px-4">2025-08-03</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pending</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    Review
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (selectedMenu === "courses") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">My Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Mathematics 101</h3>
            <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">Semester 1</p>
            <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">Year 1 Students</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">Core</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
            </div>
          </div>
          <div className="bg-green-100 dark:bg-green-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Physics 202</h3>
            <p className="text-sm text-green-600 dark:text-green-300 mt-1">Semester 1</p>
            <p className="text-sm text-green-600 dark:text-green-300 mt-1">Year 2 Students</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Science</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
            </div>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">English Literature</h3>
            <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-1">Semester 1</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-1">Year 1 Students</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">Humanities</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
            </div>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">Computer Science</h3>
            <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">Semester 2</p>
            <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">Year 3 Students</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded">Elective</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
            </div>
          </div>
          <div className="bg-red-100 dark:bg-red-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">History</h3>
            <p className="text-sm text-red-600 dark:text-red-300 mt-1">Semester 2</p>
            <p className="text-sm text-red-600 dark:text-red-300 mt-1">Year 1 Students</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Humanities</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
            </div>
          </div>
          <div className="bg-indigo-100 dark:bg-indigo-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200">Chemistry Lab</h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-300 mt-1">Semester 1</p>
            <p className="text-sm text-indigo-600 dark:text-indigo-300 mt-1">Year 2 Students</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded">Lab</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Course Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
              Create New Course
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
              View Course Materials
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition">
              Access Library
            </button>
          </div>
        </div>
      </div>
    );
  } else if (selectedMenu === "analytics") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Academic Analytics</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Student Performance</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-dark3/20 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">Student Performance Chart</p>
            </div>
          </div>
          <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Course Enrollment</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-dark3/20 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">Course Enrollment Chart</p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="flex justify-between border-b border-gray-200 dark:border-dark3/30 pb-2">
              <span>New exam claim submitted for Mathematics 101</span>
              <span className="text-gray-500 dark:text-gray-400">2 hours ago</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 dark:border-dark3/30 pb-2">
              <span>Announcement published for all students</span>
              <span className="text-gray-500 dark:text-gray-400">5 hours ago</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 dark:border-dark3/30 pb-2">
              <span>Grade submissions deadline approaching</span>
              <span className="text-gray-500 dark:text-gray-400">1 day ago</span>
            </li>
            <li className="flex justify-between pb-2">
              <span>New student enrolled in Computer Science</span>
              <span className="text-gray-500 dark:text-gray-400">2 days ago</span>
            </li>
          </ul>
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