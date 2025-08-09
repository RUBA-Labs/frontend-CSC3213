'use client';
import Link from "next/link";
import Input from "./input";
import Button from "./button";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "../style/form.css";
import { useState } from "react";

export default function ResetPasswordForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="formContainer">
            <h2 className="formTitle">Reset Your Password</h2>
            <form className="mt-4 space-y-4">
                {/* Email Input */}
                <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    icon={<FaEnvelope />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* New Password Input */}
                <Input
                    label="New Password"
                    type="password"
                    placeholder="Enter your new password"
                    icon={<FaLock />}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* Confirm New Password Input */}
                <Input
                    label="Confirm New Password"
                    type="password"
                    placeholder="Re-enter your new password"
                    icon={<FaLock />}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {/* Submit Button */}
                <Button type="submit" label="Reset Password" />
            </form>
            {/* Link to Login */}
            <p className="text-center text-sm mt-4">
                Remembered your password?{" "}
                <Link href="/login" className="text-primary hover:underline">
                    Log In
                </Link>
            </p>
        </div>
    );
}