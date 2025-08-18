import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false); // boolean rakhenge
    const navigate = useNavigate();
    const location = useLocation();

    const validUser = {
        username: "admin",
        password: "123456",
    };

    const playSound = () => {
        const audio = new Audio("/login.wav");
        audio.volume = 0.5;
        audio.play();
    };

    const loginError = () => {
        const audio = new Audio("/loginError.wav");
        audio.volume = 0.5;
        audio.play();
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === validUser.username && password === validUser.password) {
            setError(false);
            setLoading(true);
            playSound();

            setTimeout(() => {
                localStorage.setItem("authToken", "loggedin123");
                const redirectPath = location.state?.from?.pathname || "/";
                navigate(redirectPath, { replace: true });
            }, 2500);
        } else {
            setError(true);
            loginError();
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <motion.img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCEec4S4fp_P_FGH0iaTnykOYBgurHPIsrhrnSMfKNUZ5I2G53iPjL_3vxBNrPUCtmoc&usqp=CAU"
                    alt="Loading..."
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
                    className="w-32 h-32 rounded-full"
                />
            </div>
        );
    }

    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/loginBack.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/70"></div>


            {error && (
                <div className="absolute inset-0 flex flex-col items-center justify-start mt-10 z-20 pointer-events-none">

                    {/* Cry Emoji */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-6xl"
                    >
                        😭
                    </motion.div>

                    {/* Aansu ke Drops */}
                    <div className="relative w-full flex justify-center">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-3 h-3 bg-cyan-300 rounded-full opacity-70"
                                initial={{ y: -10, x: Math.random() * 40 - 20, scale: 0.5 }}
                                animate={{ y: "90vh", scale: 1 }}
                                transition={{ duration: 2 + Math.random() * 2, delay: i * 0.4, repeat: Infinity }}
                            />
                        ))}
                    </div>
                </div>
            )}


            <motion.form
                onSubmit={handleLogin}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/30 shadow-2xl p-10 rounded-3xl w-full max-w-sm z-10"
            >
                <h2 className="text-3xl font-extrabold text-center text-rose-300 mb-6 drop-shadow">
                    Perfume Login
                </h2>

                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full mb-4 p-3 rounded-xl border border-rose-400/40 bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-2 p-3 rounded-xl border border-rose-400/40 bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />

                {error && (
                    <p className="text-red-400 text-sm mb-4 text-center font-semibold">
                        Invalid username or password!
                    </p>
                )}

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    type="submit"
                    className="w-full bg-rose-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-rose-600 transition"
                >
                    Login
                </motion.button>

                <p className="text-center text-gray-300 text-sm mt-4">
                    Don’t have an account?{" "}
                    <span className="underline cursor-pointer text-rose-400 hover:text-rose-200">
                        Sign up
                    </span>
                </p>
            </motion.form>
        </div>
    );
}

export default Login;
