'use client'
import LoginForm from '../components/loginForm'


export default function login() {

    const handleLogin = (userData: { email: string; password: string }) => {
        console.log("User Email:", userData.email);
        console.log("User Password:", userData.password);
        // You can send this data to an API or process it further
    };

    return (
        <div className="flex justify-evenly items-center min-h-screen bg-gradient-to-br from-fuchsia-950 to-purple-950">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our App</h1>

            <LoginForm onLogin={handleLogin}/>
        </div>
    )

}