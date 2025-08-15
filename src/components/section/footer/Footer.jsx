import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-900 via-purple-800 to-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Brand */}
                <motion.div
                    className="flex flex-col items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-2">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/009/003/747/non_2x/luxury-perfume-bottle-logo-design-illustration-for-cosmetics-beauty-salon-company-products-free-vector.jpg"
                            alt="Logo"
                            className="h-12 w-12 rounded-full border border-white/50"
                        />
                        <span className="text-lg font-bold">Perfume</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                        Curating the finest luxury perfumes for your signature scent experience.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="hover:text-purple-400 transition"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-purple-400 transition"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-purple-400 transition"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-purple-400 transition"><Mail className="w-5 h-5" /></a>
                    </div>
                </motion.div>
                <motion.div
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <NavLink to="/" className="text-gray-300 hover:text-purple-400 transition">Home</NavLink>
                    <NavLink to="/shop" className="text-gray-300 hover:text-purple-400 transition">Shop</NavLink>
                    <NavLink to="/blog" className="text-gray-300 hover:text-purple-400 transition">Blog</NavLink>
                    <NavLink to="/gallary" className="text-gray-300 hover:text-purple-400 transition">Gallery</NavLink>
                </motion.div>

                {/* Customer Service */}
                <motion.div
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h3 className="font-semibold mb-2">Customer Service</h3>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition">Shipping Policy</a>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition">Returns & Exchanges</a>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition">FAQ</a>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition">Contact Us</a>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <h3 className="font-semibold mb-2">Subscribe</h3>
                    <p className="text-gray-300 text-sm">Get the latest updates on new arrivals and exclusive offers.</p>
                    <form className="mt-2 flex gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-3 py-2 rounded-lg text-gray-900 focus:outline-none"
                        />
                        <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 transition font-semibold">
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </div>

            <div className="mt-12 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Perfume. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
