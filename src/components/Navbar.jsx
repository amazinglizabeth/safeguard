import React from "react";
import Safelogo from "../assets/images/safelogo.png";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={Safelogo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-gray-800">SecureGuard</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-500">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-500">
              Services
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-yellow-500">
              Products
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-yellow-500">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
