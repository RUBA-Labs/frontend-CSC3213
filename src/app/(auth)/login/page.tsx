import LoginForm from '../components/loginForm'

export default function login() {

    return (
        <div className="flex justify-evenly items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our App</h1>

            <LoginForm/>
        </div>
    )

}