// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/categories", label: "Categories" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-red-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            Gift<span className="text-white">Store</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-semibold">
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-yellow-300 border-b-2 border-yellow-300"
                      : "hover:text-red-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-red-600 font-semibold px-4 py-3 space-y-3 shadow-lg">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `block transition ${
                  isActive
                    ? "text-red-800 font-bold underline"
                    : "hover:text-red-800"
                }`
              }
              onClick={() => setIsOpen(false)} // close menu after click
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
