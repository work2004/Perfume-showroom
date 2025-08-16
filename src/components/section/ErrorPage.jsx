import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-violet-100 to-indigo-100 text-center px-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="160"
          viewBox="0 0 64 80"
          fill="none"
        >
          <rect x="16" y="20" width="32" height="40" rx="6" ry="6" fill="#C084FC" />
          <rect x="24" y="8" width="16" height="12" rx="3" ry="3" fill="#E9D5FF" />
          <circle cx="32" cy="50" r="10" fill="#A855F7" />
          <line x1="32" y1="20" x2="32" y2="10" stroke="#7E22CE" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* 404 text */}
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-6xl font-extrabold text-purple-800 mb-4"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl md:text-2xl text-purple-700 mb-2"
      >
        Lost in the fragrance?
      </motion.p>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-sm md:text-base text-purple-600 max-w-md mb-6"
      >
        The page you’re looking for has evaporated like the last drop of your favorite scent.
      </motion.p>

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          to="/"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-all"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
