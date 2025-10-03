import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaGooglePay,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-red-600 text-white pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-2xl font-extrabold">Gift<span className="text-white">Store</span></h2>
          <p className="mt-3 text-red-100 text-sm">
            🎁 Celebrate every moment with love & joy.  
            Unique gifts for every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-red-100">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-200"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-200"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Payment Options */}
        <div>
          <h3 className="text-lg font-semibold mb-4">We Accept</h3>
          <div className="flex space-x-4 text-3xl">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaGooglePay />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-red-400 pt-4 text-center text-sm text-red-100">
        © {new Date().getFullYear()} GiftStore. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
