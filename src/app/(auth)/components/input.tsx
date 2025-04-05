"use client";
import { ReactNode, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    icon?: ReactNode;
}

export default function Input({ label, type, placeholder, icon }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="relative mb-4">
      <label className="block text-white mb-2">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
    );
}