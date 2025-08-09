"use client";
import Link from "next/link";
import Input from "./input";
import Button from "./button";
import { FaLock } from "react-icons/fa";
import "../style/form.css";
import { useState } from "react";


export default function EmailCodeForm() {
    const [code, setCode] = useState("");
    return (
        <div className="formContainer">
            <h2 className="formTitle">Verify Your Email</h2>
            <form className="mt-4 space-y-4">
                {/* Verification Code Input */}
                <Input
                    label="Verification Code"
                    type="text"
                    placeholder="Enter the code sent to your email"
                    icon={<FaLock />}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                {/* Submit Button */}
                <Button type="submit" label="Verify" />
            </form>
            {/* Link to Resend Code */}
            <p className="text-center text-sm mt-4">
                Didn&#39;t receive the code?{" "}
                <Link href="/resend-code" className="text-primary hover:underline">
                    Resend Code
                </Link>
            </p>
        </div>
    );
}
