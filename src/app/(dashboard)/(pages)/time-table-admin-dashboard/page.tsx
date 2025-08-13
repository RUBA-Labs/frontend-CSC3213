
import Footer from "@/components/footer";
import PrivateRoute from "@/components/PrivateRoute";
import React from "react";
import "../../style/page.css";


export default function TimeTableAdminDashboardPage() {
    return (
        <PrivateRoute>
            <div className="pagebackground min-h-screen flex flex-col">
                {/* Middle - Main Content */}
                <div className="pageflexbox flex flex-1 justify-center items-start">
                    <div className="w-full flex justify-center">
                        <div className="scale-90 sm:scale-95 lg:scale-100 w-full">
                      
                        </div>
                    </div>
                </div>
                {/* Bottom - Footer */}
                <Footer />
            </div>
        </PrivateRoute>
    );
}
