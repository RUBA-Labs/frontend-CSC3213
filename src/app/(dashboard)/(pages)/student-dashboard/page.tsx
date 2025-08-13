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
<<<<<<< HEAD
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
                  defaultValue="+94 71 234 5678"
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
            <h3 className="text-lg font-semibold mb-4">Current GPA: 3.75 <span className="text-sm font-normal text-gray-600 dark:text-gray-300">(Credits: 18)</span></h3>
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
                <span>English</span>
                <span className="font-bold">A</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-dark3/30">
                <span>Computer Science</span>
                <span className="font-bold">A</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Statistics</span>
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
=======
    content = <p>Your student profile information will be here.</p>;
>>>>>>> 3eb140d4947584180cadc60fa19928ba76d76d72
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
