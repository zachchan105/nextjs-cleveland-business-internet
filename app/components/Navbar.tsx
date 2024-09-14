'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Using useRouter from next/navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Using useRouter for navigation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path); // Navigate to the new route
    setIsOpen(false);  // Close the mobile menu
  };

  return (
    <header className="w-full bg-white shadow-lg">
      <nav className="flex items-center justify-between max-w-6xl mx-auto p-4">
        {/* Logo as a Link to the Homepage */}
        <button onClick={() => handleNavigation("/")} className="flex items-center">
          <Image 
            src="/cbilogo.png" 
            alt="Cleveland Business Internet Logo" 
            width={150}
            height={50}
            priority
          />
        </button>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            )}
          </button>
        </div>

        {/* Navigation Links - Hidden on mobile, shown on larger screens */}
        <ul className="hidden sm:flex space-x-6">
          <li>
            <button onClick={() => handleNavigation("/")} className="text-gray-700 text-xl font-bold hover:text-[#e84c42]">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation("/about")} className="text-gray-700 text-xl font-bold hover:text-[#e84c42]">
              About
            </button>
          </li>
        </ul>

        {/* Call-to-Action Button - Hidden on mobile, shown on larger screens */}
        <button 
          onClick={() => handleNavigation("/contact")} 
          className="hidden sm:inline-block px-6 py-3 text-xl font-bold text-white bg-[#e84c42] rounded-lg hover:bg-[#d43a34]"
        >
          Contact Us
        </button>
      </nav>

      {/* Mobile Menu - Visible when isOpen is true */}
      {isOpen && (
        <div className="sm:hidden bg-white w-full text-center py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <button onClick={() => handleNavigation("/")} className="block text-gray-700 text-xl font-bold hover:text-[#e84c42] text-center">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/about")} className="block text-gray-700 text-xl font-bold hover:text-[#e84c42] text-center">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigation("/contact")} className="block text-gray-700 text-xl font-bold hover:text-[#e84c42] text-center">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
