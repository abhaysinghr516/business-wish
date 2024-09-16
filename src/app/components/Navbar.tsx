"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./theme-switch";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-950 border-b border-gray-800 py-4 px-4 md:px-20 sticky top-0 z-50 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="ml-2 text-xl font-bold text-white">
          <img src="/logo2.png" alt="logo" className="h-5" />
        </Link>
        <div
          className={`items-center space-x-6 md:flex ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <Link
            href="/docs/components/404"
            className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-gray-900 after:transition-all after:duration-300 hover:text-gray-900 hover:after:scale-x-100"
          >
            Components
          </Link>
          <Link
            href="/templates"
            className="relative text-sm after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-gray-900 after:transition-all after:duration-300 hover:text-gray-900 hover:after:scale-x-100"
          >
            Templates
          </Link>
          <Link href="https://github.com">
            <FiGithub className="h-4 w-4" />
          </Link>
          <Link href="https://twitter.com">
            <FaXTwitter className="h-4 w-4" />
          </Link>
          {/* <ThemeToggle /> */}
        </div>
        <div className="md:hidden">
          <button
            id="menu-toggle"
            onClick={toggleMenu}
            className="mr-2 text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
