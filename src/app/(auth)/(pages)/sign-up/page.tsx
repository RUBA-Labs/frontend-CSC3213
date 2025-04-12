import SignUpForm from '../../components/signUpForm';
import ImageSlider from '../../components/imageslider';
import ThemeSwitch from "@/components/ThemeSwitch";
import Footer from "@/components/footer";
import React from "react";
import "../../style/page.css";

export default function SignUp() {
    return (
        <div className="pagebackground ">
            
            {/* Top - Theme Switcher */}
            <div className="themeSwitchContainer">
                <ThemeSwitch />
            </div>

            {/* Middle - Main Content */}
            <div className="pageflexbox"> {/* Reduced height to 70% of the viewport */}
                {/* Login Form */}
                <div className="w-1/2 flex justify-center">
                    <div className="scale-75 sm:scale-90 lg:scale-95"> {/* Adjusted scaling for smaller details */}
                        <SignUpForm />
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
