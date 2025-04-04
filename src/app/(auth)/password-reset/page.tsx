export default function password_reset(){
    return (
        <div className="bg-cyan-950 text-align-center flex flex-col justify-center items-center h-screen ">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our App</h1>
            password reset page
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4 hover:shadow-2xl transition-shadow border border-gray-300">
                <div className="p-4 border border-gray-400 rounded-xl bg-white bg-opacity-50">
                    <h2 className="text-xl font-semibold mb-2">Card Title</h2>
                    <p className="text-gray-600">This is a brief description of the card. It provides useful information.</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}