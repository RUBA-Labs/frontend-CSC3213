"use client";
import Link from "next/link";
import Input from "./input";
import Button from "./button";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "../style/form.css";
import { useState } from "react";
import { login } from "../../../services/Auth/login";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login: authLogin } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await login(email, password);
      console.log("Login successful:", response);
      authLogin(response.access_token, response.user);
      router.push("/user-dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error (e.g., display error message to user)
    }
  };
  
  return (
    <div className="formContainer">
      <h2 className="formTitle">Login</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          icon={<FaEnvelope />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={<FaLock />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-left text-dark5 dark:text-dark3 mb-3 flex items-center justify-between">
           {/* Remember Me */}
           <label className="flex items-center text-dark5 dark:text-dark3">
                        <input
                            type="checkbox"
                            className="mr-2 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                        />
                        Remember me
            </label>
             {/* Forget Password */}

          
          <Link
            href="/password-reset"
            className="text-dark5 dark:text-dark3 underline"
          >
            Forgot password?
          </Link>
        </p>
        <Button type="submit" label="Login" />
      </form>
      <p className="text-center text-dark5 dark:text-dark3 mt-3">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="text-dark5 dark:text-dark3 underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}