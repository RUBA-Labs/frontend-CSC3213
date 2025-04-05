import LoginForm from '../components/loginForm';
import Image from 'next/image';

export default function Login() {
    return (
        <div className="flex justify-evenly items-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-900">
            <Image src='/7707558_3722303.svg' alt="/My SVG Icon" width={500} height={500} priority  style={{ transform: "scaleY(-1) rotate(180deg)"}}  />
            <LoginForm />
        </div>
    );
}
