import Link from "next/link";
import Input from "./input";
import Button from "./button";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import "../style/form.css";

export default function SignUpForm() {
    return (
        <div className="formContainer">
            <h2 className="formTitle">Create an Account</h2>
            <form className="mt-4 space-y-4">
                {/* Full Name Input */}
                <Input
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                    icon={<FaUser />}
                />
                {/* Email Input */}
                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    icon={<FaEnvelope />}
                />
                {/* Password Input */}
                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    icon={<FaLock />}
                />
                {/* Confirm Password Input */}
                <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Re-enter your password"
                    icon={<FaLock />}
                />
                {/* Submit Button */}
                <Button type="submit" label="Sign Up" />
            </form>
            {/* Link to Login */}
            <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:underline">
                    Log In
                </Link>
            </p>
        </div>
    );
}