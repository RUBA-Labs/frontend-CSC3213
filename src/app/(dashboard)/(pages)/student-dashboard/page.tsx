"use client";
import Footer from "@/components/footer";
import PrivateRoute from "@/components/PrivateRoute";
import "../../style/page.css";
import Header from "../../components/header";
import Sidebar, { MenuItem } from "../../components/sidebar";
import { useState } from "react";
import { FaBook, FaCalendarAlt, FaClipboardList, FaUserGraduate, FaChartLine, FaBell } from "react-icons/fa";

export default function StudentDashboardPage() {
  const [selectedMenu, setSelectedMenu] = useState("courses");

  // Student-specific menu
  const menuItems: MenuItem[] = [
    { id: "courses", label: "My Courses", icon: <FaBook /> },
    { id: "timetable", label: "Timetable", icon: <FaCalendarAlt /> },
    { id: "assignments", label: "Assignments", icon: <FaClipboardList /> },
    { id: "profile", label: "Profile", icon: <FaUserGraduate /> },
    { id: "grades", label: "Grades", icon: <FaChartLine /> },
    { id: "notifications", label: "Notifications", icon: <FaBell /> },
  ];

  // Student-specific content
  let content;
  if (selectedMenu === "courses") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">My Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Mathematics 101</h3>
            <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">Dr. Sarah Johnson</p>
            <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">Semester 1</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">Core</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
            </div>
          </div>
          <div className="bg-green-100 dark:bg-green-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">Physics 202</h3>
            <p className="text-sm text-green-600 dark:text-green-300 mt-1">Prof. Michael Chen</p>
            <p className="text-sm text-green-600 dark:text-green-300 mt-1">Semester 1</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Science</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
            </div>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">English Literature</h3>
            <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-1">Dr. Emily Roberts</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-1">Semester 1</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">Humanities</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
            </div>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-200">Computer Science</h3>
            <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">Prof. David Wilson</p>
            <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">Semester 2</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded">Elective</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
            </div>
          </div>
          <div className="bg-red-100 dark:bg-red-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">History</h3>
            <p className="text-sm text-red-600 dark:text-red-300 mt-1">Dr. James Miller</p>
            <p className="text-sm text-red-600 dark:text-red-300 mt-1">Semester 2</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Humanities</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Active</span>
            </div>
          </div>
          <div className="bg-indigo-100 dark:bg-indigo-900/50 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200">Chemistry Lab</h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-300 mt-1">Prof. Lisa Anderson</p>
            <p className="text-sm text-indigo-600 dark:text-indigo-300 mt-1">Semester 1</p>
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
              Enroll in New Course
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
  } else if (selectedMenu === "timetable") {
    content = (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Weekly Timetable</h1>
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
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Physics 202</div>
                    <div className="text-sm">Lab 3</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-lg">
                    <div className="font-semibold">English Lit</div>
                    <div className="text-sm">Room 102</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Computer Sci</div>
                    <div className="text-sm">Lab 7</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-lg">
                    <div className="font-semibold">History</div>
                    <div className="text-sm">Room 301</div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4 font-medium">11:00 - 12:30</td>
                <td className="py-3 px-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Physics 202</div>
                    <div className="text-sm">Room 108</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-lg">
                    <div className="font-semibold">English Lit</div>
                    <div className="text-sm">Room 102</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Mathematics 101</div>
                    <div className="text-sm">Room 205</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-red-100 dark:bg-red-900/50 p-3 rounded-lg">
                    <div className="font-semibold">History</div>
                    <div className="text-sm">Room 301</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Computer Sci</div>
                    <div className="text-sm">Lab 7</div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4 font-medium">14:00 - 15:30</td>
                <td className="py-3 px-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Computer Sci</div>
                    <div className="text-sm">Lab 7</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Mathematics 101</div>
                    <div className="text-sm">Room 205</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Physics 202</div>
                    <div className="text-sm">Lab 3</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 p-3 rounded-lg">
                    <div className="font-semibold">English Lit</div>
                    <div className="text-sm">Room 102</div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
                    <div className="font-semibold">Chemistry Lab</div>
                    <div className="text-sm">Lab 5</div>
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
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">My Assignments</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search assignments..."
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 dark:border-dark3 rounded-lg bg-white dark:bg-dark3/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition whitespace-nowrap">
              View All Courses
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
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Calculus Problem Set 3</td>
                <td className="py-3 px-4">Mathematics 101</td>
                <td className="py-3 px-4">2025-08-18 23:59</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pending</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    View Details
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Physics Lab Report 2</td>
                <td className="py-3 px-4">Physics 202</td>
                <td className="py-3 px-4">2025-08-20 23:59</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pending</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    View Details
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-dark3/30">
                <td className="py-3 px-4">Literary Analysis Essay</td>
                <td className="py-3 px-4">English Literature</td>
                <td className="py-3 px-4">2025-08-25 23:59</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pending</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    View Details
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">Programming Project 1</td>
                <td className="py-3 px-4">Computer Science</td>
                <td className="py-3 px-4">2025-09-01 23:59</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Submitted</span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:text-blue-700 mr-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30">
                    View Feedback
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (selectedMenu === "profile") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Student Profile</h1>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-6 mb-6">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
              />
              <div>
                <h2 className="text-xl font-bold">Alex Morgan</h2>
                <p className="text-gray-600 dark:text-gray-300">Student ID: STU123456</p>
                <p className="text-gray-600 dark:text-gray-300">Computer Science Major</p>
              </div>
            </div>
            
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="Alex Morgan"
                  className="w-full p-2 border border-gray-300 dark:border-dark3 rounded bg-white dark:bg-dark3/20"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Student ID</label>
                <input
                  type="text"
                  defaultValue="STU123456"
                  disabled
                  className="w-full p-2 border border-gray-300 dark:border-dark3 rounded bg-white dark:bg-dark3/20"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="alex.morgan@student.university.edu"
                  className="w-full p-2 border border-gray-300 dark:border-dark3 rounded bg-white dark:bg-dark3/20"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full p-2 border border-gray-300 dark:border-dark3 rounded bg-white dark:bg-dark3/20"
                />
              </div>
            </div>
            
            <h2 className="text-lg font-semibold mb-4">Academic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Major</label>
                <input
                  type="text"
                  defaultValue="Computer Science"
                  className="w-full p-2 border border-gray-300 dark:border-dark3 rounded bg-white dark:bg-dark3/20"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Year</label>
                <select className="w-full p-2 border border-gray-300 dark:border-dark3 rounded bg-white dark:bg-dark3/20">
                  <option>First Year</option>
                  <option>Second Year</option>
                  <option>Third Year</option>
                  <option>Fourth Year</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">GPA</label>
                <input
                  type="text"
                  defaultValue="3.75"
                  disabled
                  className="w-full p-2 border border-gray-300 dark:border-dark3 rounded bg-white dark:bg-dark3/20"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Advisor</label>
                <input
                  type="text"
                  defaultValue="Dr. Robert Johnson"
                  disabled
                  className="w-full p-2 border border-gray-300 dark:border-dark3 rounded bg-white dark:bg-dark3/20"
                />
              </div>
            </div>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    );
  } else if (selectedMenu === "grades") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">My Grades</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Current GPA: 3.75</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-dark3/30">
                <span>Mathematics 101</span>
                <span className="font-bold">A-</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-dark3/30">
                <span>Physics 202</span>
                <span className="font-bold">B+</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-dark3/30">
                <span>English Literature</span>
                <span className="font-bold">A</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-dark3/30">
                <span>Computer Science</span>
                <span className="font-bold">A</span>
              </div>
              <div className="flex justify-between items-center">
                <span>History</span>
                <span className="font-bold">B</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-dark3/40 p-6 rounded-xl shadow lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Grade Distribution</h2>
            <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-dark3/20 rounded-lg">
              <p className="text-gray-500 dark:text-gray-400">Grade Distribution Chart</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (selectedMenu === "notifications") {
    content = (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Notifications</h1>
        <div className="bg-white dark:bg-dark3/40 rounded-xl shadow overflow-hidden">
          <ul className="divide-y divide-gray-200 dark:divide-dark3/30">
            <li className="p-4 hover:bg-gray-50 dark:hover:bg-dark3/20">
              <div className="flex justify-between">
                <h3 className="font-medium">Assignment Due Reminder</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Calculus Problem Set 3 is due on August 18th</p>
              <div className="mt-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Assignment</span>
              </div>
            </li>
            <li className="p-4 hover:bg-gray-50 dark:hover:bg-dark3/20">
              <div className="flex justify-between">
                <h3 className="font-medium">New Course Material Available</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">1 day ago</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Dr. Sarah Johnson has uploaded new lecture notes for Mathematics 101</p>
              <div className="mt-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Course</span>
              </div>
            </li>
            <li className="p-4 hover:bg-gray-50 dark:hover:bg-dark3/20">
              <div className="flex justify-between">
                <h3 className="font-medium">Exam Schedule Published</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">2 days ago</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Final exam schedule for Semester 1 is now available</p>
              <div className="mt-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Exam</span>
              </div>
            </li>
            <li className="p-4 hover:bg-gray-50 dark:hover:bg-dark3/20">
              <div className="flex justify-between">
                <h3 className="font-medium">Library Workshop</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">3 days ago</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Research Skills Workshop on August 20th at 14:00 in Library Room 101</p>
              <div className="mt-2">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Event</span>
              </div>
            </li>
          </ul>
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
