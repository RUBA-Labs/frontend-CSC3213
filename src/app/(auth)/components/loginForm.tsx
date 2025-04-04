import Link from "next/link";
import Input from "./input";
import Button from "./button";
import "./form.css";

export default function LoginForm() {
    return (
        <div className="formContainer">
            <h2 className="formTitle">Login</h2>
            <form className="mt-4">
                <Input label="Email" type="email" placeholder="Enter your email"/>
                <Input label="Password" type="password" placeholder="Enter your password" />
                <p className="text-left text-white/80 mb-3">
                    Forget password <Link href='/password-reset' className="text-white underline">Reset password</Link>
                </p>
                <Button type='submit' label="Login" />
            </form>
            <p className="text-center text-white/80 mt-3">
                Don&apos;t have an account? <Link href='/sign-up' className="text-white underline">Sign Up</Link>
            </p>
        </div>

    );
}