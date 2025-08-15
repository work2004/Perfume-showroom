import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const validUser = {
        username: "admin",
        password: "123456",
    };
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === validUser.username && password === validUser.password) {
            localStorage.setItem("authToken", "loggedin123"); // Token set
            const redirectPath = location.state?.from?.pathname || "/";
            navigate(redirectPath, { replace: true });
        } else {
            alert("Invalid username or password!");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-6 rounded-lg shadow-lg w-80"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full mb-3 p-2 border border-gray-300 rounded"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-3 p-2 border border-gray-300 rounded"
                />

                <button
                    type="submit"
                    className="w-full bg-rose-500 text-white p-2 rounded hover:bg-rose-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
