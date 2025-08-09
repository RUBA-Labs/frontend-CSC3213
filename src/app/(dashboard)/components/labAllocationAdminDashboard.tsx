// import Link from "next/link";
// import { FaLock } from "react-icons/fa";
import "../style/page.css";
import ThemeSwitch from "@/components/ThemeSwitch";
import Footer from "@/components/footer";
import React from "react";


export default function LabAllocationAdminDashboard() {
    return (
        <div className="pagebackground">
            {/* Top - Theme Switcher */}
            <div className="themeSwitchContainer">
                <ThemeSwitch />
            </div>

            {/* Middle - Main Content */}
            <div className="pageflexbox">
                {/* Lab Allocation Admin Dashboard Content */}
                <div className="w-full flex justify-center">
                    <div className="scale-90 sm:scale-95 lg:scale-100">
                        {/* TODO: Add lab allocation admin dashboard widgets and content here */}
                        <h2 className="text-2xl font-bold">Welcome to the Lab Allocation Admin Dashboard</h2>
                        <p className="mt-2">Your lab allocation admin dashboard content goes here.</p>
                    </div>
                </div>
            </div>

            {/* Bottom - Footer */}
            <Footer />
        </div>
    );
}