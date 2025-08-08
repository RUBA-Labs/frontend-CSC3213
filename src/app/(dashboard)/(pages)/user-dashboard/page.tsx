
import PrivateRoute from "@/components/PrivateRoute";
import Footer from "@/components/footer";
import React from "react";
import "../../style/page.css";
import UserDashboard from "../../components/userDashboard";

export default function UserDashboardPage() {
    return (
        <PrivateRoute>
            <div className="pagebackground min-h-screen flex flex-col">
                {/* Middle - Main Content */}
                <div className="pageflexbox flex flex-1 justify-center items-start">
                    <div className="w-full flex justify-center">
                        <div className="scale-90 sm:scale-95 lg:scale-100 w-full">
                            <UserDashboard />
                        </div>
                    </div>
                </div>
                {/* Bottom - Footer */}
                <Footer />
            </div>
        </PrivateRoute>
    );
}
