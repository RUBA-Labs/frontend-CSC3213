'use client'

import Link from "next/link";
import React, {useState} from "react";

interface LoginFormProps {
    onLogin?: (userData: { email: string; password: string }) => void
}

export default function LoginForm({onLogin}: LoginFormProps) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent page reload
        if (onLogin) {
            onLogin({email, password});
        } // Pass values to parent component
    };


    return (
        <div className="w-96 p-6 rounded-2xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg">
            <h2 className="text-2xl font-bold text-white text-center">Login</h2>
            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-white/80 mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)} // Update state
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white/80 mb-0.5">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <p className="text-left text-white/80 mb-3">
                    Forget password <Link href='/password-reset' className="text-white underline">Reset password</Link>
                </p>
                <button
                    type="submit"
                    className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/40 transition duration-300"
                >
                    Login
                </button>
            </form>
            <p className="text-center text-white/80 mt-3">
                Don&apos;t have an account? <Link href='/sign-up' className="text-white underline">Sign Up</Link>
            </p>
        </div>

    );
}
