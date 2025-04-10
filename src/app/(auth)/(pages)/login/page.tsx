import LoginForm from '../../components/loginForm';
import ImageSlider from '../../components/imageslider';
import ThemeSwitch from "@/components/ThemeSwitch";
import Footer from "@/components/footer";
import React from "react";
import "../../style/page.css";

export default function Login() {
    return (
        <div className="pagebackground ">
            
            {/* Top - Theme Switcher */}
            <div className="themeSwitchContainer">
                <ThemeSwitch />
            </div>

            {/* Middle - Main Content */}
            <div className="pageflexbox ">
                {/* Login Form */}
                <div className="w-1/2 flex justify-center">
                    <div className="scale-90 lg:scale-100">
                        <LoginForm />
                    </div>
                </div>

                {/* Image Slider */}
                <div className="imageSliderContainer">
                    <ImageSlider />
                </div>
            </div>

            {/* Bottom - Footer */}
            <Footer/>
        </div>
    );
}
