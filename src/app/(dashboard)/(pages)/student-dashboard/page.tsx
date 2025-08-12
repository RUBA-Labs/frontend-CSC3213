
import Footer from "@/components/footer";
import React from "react";
import "../../style/page.css";
import StudentDashboard from "../../components/studentDashboard";

export default function StudentDashboardPage() {
    return (
        <div className="pagebackground min-h-screen flex flex-col">
           
            {/* Middle - Main Content */}
            <div className="pageflexbox flex flex-1 justify-center items-start">
                <div className="w-full flex justify-center">
                    <div className="scale-90 sm:scale-95 lg:scale-100 w-full">
                        <StudentDashboard />
                    </div>
                </div>
            </div>

            {/* Bottom - Footer */}
            <Footer />
        </div>
    );
}
