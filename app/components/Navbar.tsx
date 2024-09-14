'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white shadow-lg">
      <nav className="flex items-center justify-between max-w-6xl mx-auto p-4">
        {/* Logo as a Link to the Homepage */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/cbilogo.png" 
            alt="Cleveland Business Internet Logo" 
            width={150}
            height={50}
            priority
          />
        </Link>

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
          <li><Link href="/" className="text-gray-700 text-xl font-bold hover:text-blue-600">Home</Link></li>
          <li><Link href="/about" className="text-gray-700 text-xl font-bold hover:text-blue-600">About</Link></li>
        </ul>

        {/* Call-to-Action Button - Hidden on mobile, shown on larger screens */}
        <Link href="/contact" className="hidden sm:inline-block px-6 py-3 text-xl font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Contact Us
        </Link>
      </nav>

      {/* Mobile Menu - Visible when isOpen is true */}
      {isOpen && (
        <div className="sm:hidden bg-white w-full text-center py-4">
          <ul className="space-y-4">
            <li><Link href="/" className="block text-gray-700 text-xl font-bold hover:text-blue-600">Home</Link></li>
            <li><Link href="/about" className="block text-gray-700 text-xl font-bold hover:text-blue-600">About</Link></li>
            <li><Link href="/contact" className="block px-4 py-2 text-xl font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
