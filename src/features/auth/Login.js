import AuthWrapper from "./AuthWrapper";

function Login() {
    return (
        <AuthWrapper>
            <form action="" className="space-y-6">
                <div>
                    <h1 className="underline decoration-sky-500">Login as user</h1>
                </div>
                <div>
                    <label htmlFor="" className="txt-sm font-bold text-gray-600 block">Enter email</label>
                    <input
                        
                        name="email" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label htmlFor="" className="txt-sm font-bold text-gray-600 block">Enter password</label>
                    <input
                        
                        name="password" type="password" className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <button
                        className="
                         w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm
                        "
                    >
                        Login
                    </button>
                </div>
            </form>
        </AuthWrapper>
    )
}

export default Login;