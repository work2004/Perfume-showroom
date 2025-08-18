import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Bell, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("authToken");

    const navData = [
        { link: "/", path: "Home" },
        { link: "shop", path: "Shop" },
        { link: "blog", path: "Blog" },
        { link: "gallary", path: "Gallary" },
    ];

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    };

    const messageCount = 5;

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function navsound(){
                const audio = new Audio("/navbar.wav"); // put file in public/sounds/
        audio.play().catch(err => console.log("Sound play blocked:", err));
    }

    return (
        <>
            <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
                    ${scrolled
                        ? "bg-gradient-to-r from-[#b38755] via-[#5a3b1f] to-[#1a0f0a] backdrop-blur-md bg-black/80 shadow-lg"
                        : "bg-gradient-to-r from-amber-900 via-[#2c1810] to-black"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2"
                        >
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/009/003/747/non_2x/luxury-perfume-bottle-logo-design-illustration-for-cosmetics-beauty-salon-company-products-free-vector.jpg"
                                alt="Logo"
                                className="h-14 w-14 rounded-full border border-white/50"
                            />
                            <span className="text-white font-bold text-lg tracking-wide">
                                Perfume
                            </span>
                        </motion.div>
                        <div className="hidden md:flex items-center gap-6 text-white font-medium">
                            {navData.map((navItem, i) => (
                                <motion.div key={i} whileHover={{ scale: 1.1 }}>
                                    <NavLink
                                        to={navItem.link}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-amber-400 font-bold border-b-2 border-amber-400"
                                                : "text-white hover:text-amber-300 transition"
                                        }
                                        onClick={navsound}
                                    >
                                        {navItem.path}
                                    </NavLink>
                                </motion.div>
                            ))}
                            <motion.div
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                className="relative inline-block"
                            >
                                <Bell className="w-7 h-7 text-white cursor-pointer" />
                                {messageCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg"
                                    >
                                        {messageCount}
                                    </motion.span>
                                )}
                            </motion.div>
                            {token ? (
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    onClick={handleLogout}
                                    className="bg-white text-rose-500 px-4 py-1 rounded-lg hover:bg-yellow-200 transition"
                                >
                                    Logout
                                </motion.button>
                            ) : (
                                <motion.div whileHover={{ scale: 1.05 }}>
                                    <Link
                                        to="/login"
                                        className="bg-white text-rose-500 px-4 py-1 rounded-lg hover:bg-yellow-200 transition"
                                    >
                                        Login
                                    </Link>
                                </motion.div>
                            )}
                        </div>
                        <div className="md:hidden flex items-center gap-3">
                            <Bell className="w-5 h-5 text-white cursor-pointer" />
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="md:hidden bg-gradient-to-b from-[#2c1810] via-black to-black backdrop-blur-lg text-white px-4 py-3 space-y-3"
                        >
                            {navData.map((navItem, i) => (
                                <NavLink
                                    key={i}
                                    to={navItem.link}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-amber-400 block hover:text-yellow-300 font-bold border-b-2 border-amber-400"
                                            : "text-white block hover:text-yellow-300"
                                    }
                                >
                                    {navItem.path}
                                </NavLink>
                            ))}

                            {token ? (
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setIsOpen(false);
                                    }}
                                    className="w-full bg-white text-rose-500 px-4 py-1 rounded-lg hover:bg-yellow-200 transition"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="block bg-white text-rose-500 px-4 py-1 rounded-lg hover:bg-yellow-200 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Login
                                </Link>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}
export default Navbar;
