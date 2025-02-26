import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/Logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
          <Link to="/community" className="text-gray-600 hover:text-gray-900">Community</Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3">
          <button
            onClick={() => navigate("/register")}
            className="px-5 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-white shadow-md transition-all duration-300`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/features" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/community" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Community</Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Pricing</Link>
          <button
            onClick={() => { navigate("/register"); setIsOpen(false); }}
            className="px-5 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Register
          </button>
          <button
            onClick={() => { navigate("/login"); setIsOpen(false); }}
            className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
