import LoginForm from '../components/loginForm';
import Image from 'next/image';
import myImage from '../asset/7707558_3722303.svg';
import ThemeSwitch from "@/components/ThemeSwitch";
import React from "react";



export default function Login() {
    return (
        <div className="flex flex-col
        lg:flex-row justify-center
        items-center
        min-h-screen
        bg-gradient-to-br from-dark1/50 to-dark3
        dark:bg-gradient-to-br dark:from-dark1 dark:to-dark5 px-4">
            {/* Form Section */}
            <div className="w-full lg:w-1/3 flex justify-center mb-2 sm:mb-1 lg:mb-0">
                <div className="scale-75 sm:scale-90 md:scale-100 lg:scale-100"> {/* Scales down the form for mobile */}
                    <LoginForm />
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:order-first">
                <ThemeSwitch/>
                <Image
                    src={myImage}
                    alt="/My SVG Icon"
                    width={500} // Default size
                    height={500} // Default size
                    priority
                    className="max-w-[60%] sm:max-w-[50%] md:max-w-[40%] lg:max-w-full h-auto"
                    style={{ transform: "scaleY(-1) rotate(180deg)" }}
                />
            </div>
            {/*<MyIcon className="w-full h-auto" />*/}
        </div>
    );
}