"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="text-xl text-purple-600 font-bold mb-4 lg:mb-0 cursor-pointer">
              Business Wish
            </div>
          </Link>
          <div className="block md:hidden relative">
            {isOpen ? (
              <FaTimes
                onClick={toggleMenu}
                className="text-gray-600 cursor-pointer"
              />
            ) : (
              <FaBars
                onClick={toggleMenu}
                className="text-gray-600 cursor-pointer"
              />
            )}
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-md">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link
                    href="/components"
                    className="text-gray-600 hover:bg-purple-200 hover:text-purple-700 block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Component
                  </Link>
                  <Link
                    href="/templates"
                    className="text-gray-600 hover:bg-purple-200 hover:text-purple-700 block px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Templates
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/components"
                className="text-gray-600 hover:bg-purple-200 hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Component
              </Link>
              <Link
                href="/templates"
                className="text-gray-600 hover:bg-purple-200 hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Templates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
