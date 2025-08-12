import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";
import uopLogo from "../asset/uop-logo.png"; // Import the logo as a module
import Button from "./button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
    const router = useRouter();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    return (
        <header className="w-full flex items-center justify-between px-6 py-3 bg-white/60 dark:bg-dark1/60 backdrop-blur-md shadow-md rounded-b-xl mb-4">
            {/* Left: UOP Logo and Title */}
            <div className="flex items-center gap-3">
                <Image
                    src={uopLogo}
                    alt="UOP Logo"
                    width={40}
                    height={40}
                    className="rounded-full bg-white"
                    priority
                />
                <span className="font-bold text-lg text-dark5 dark:text-white tracking-wide">
                    Faculty Of Arts
                </span>
            </div>
            {/* Right: Logout Button and Theme Switcher */}
            <div className="flex items-center gap-4 space-x-15">
                <Button 
                    type="button"
                    label="Logout"
                    onClick={handleLogout}
                    className="px-4 py-2 bg-dark5 hover:bg-dark1 text-white font-semibold rounded-lg shadow-sm transition-all duration-200"
                />
                <ThemeSwitch/>
            </div>
        </header>
    );
}