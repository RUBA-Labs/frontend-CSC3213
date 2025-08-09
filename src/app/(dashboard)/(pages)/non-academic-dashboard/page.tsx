
import Footer from "@/components/footer";
import React from "react";
import "../../style/page.css";
import NonAcademicDashboard from "../../components/nonAcademicDashboard";

export default function NonAcademicDashboardPage() {
    return (
        <div className="pagebackground min-h-screen flex flex-col">
            {/* Middle - Main Content */}
            <div className="pageflexbox flex flex-1 justify-center items-start">
                <div className="w-full flex justify-center">
                    <div className="scale-90 sm:scale-95 lg:scale-100 w-full">
                        <NonAcademicDashboard />
                    </div>
                </div>
            </div>
            {/* Bottom - Footer */}
            <Footer />
        </div>
    );
}
