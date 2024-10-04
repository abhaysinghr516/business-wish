"use client";

import React, { useState } from "react";
import { Menu, Search, User, X } from "lucide-react";

export const BasicHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white dark:text-gray-200">
            Logo
          </div>
          <button
            className="text-white dark:text-gray-200 md:hidden z-20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div
            className={`fixed inset-0 bg-gray-800 dark:bg-gray-900 bg-opacity-95 z-10 transition-transform duration-300 ease-in-out
              ${isOpen ? "translate-x-0" : "translate-x-full"}
              md:relative md:inset-auto md:bg-transparent md:dark:bg-transparent md:translate-x-0`}
          >
            <div className="flex flex-col h-full justify-center items-center space-y-8 md:space-y-0 md:flex-row md:items-center md:space-x-8">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-2xl md:text-base text-white dark:text-gray-200 hover:text-gray-300 dark:hover:text-gray-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const HeaderwithSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900 dark:text-white">
            Logo
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                className="rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search
                  size={20}
                  className="text-gray-500 dark:text-gray-400"
                />
              </button>
            </div>
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-500">
              <User size={24} />
            </button>
            <button
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-500 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export const HeaderwithAnimation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 dark:bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white dark:text-gray-200">
            Logo
          </div>
          <button
            className="text-white dark:text-gray-200 md:hidden z-20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div
            className={`fixed inset-0 bg-gray-900 dark:bg-gray-800 bg-opacity-95 z-10 transition-transform duration-300 ease-in-out
              ${isOpen ? "translate-x-0" : "translate-x-full"}
              md:relative md:inset-auto md:bg-transparent md:dark:bg-transparent md:translate-x-0`}
          >
            <div className="flex flex-col h-full justify-center items-center space-y-8 md:space-y-0 md:flex-row md:items-center md:space-x-8">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-2xl md:text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200
                    relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 
                    after:bg-white dark:after:bg-gray-200 after:transition-all after:duration-300 hover:after:scale-x-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const CenteredAlignedHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            Logo
          </div>
          <button
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-500 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div
            className={`w-full md:flex md:w-auto md:items-center ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col mt-4 md:mt-0 md:flex-row md:items-center md:space-x-6">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-500 py-2 md:py-0"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 transition-colors"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="rounded bg-transparent px-4 py-2 font-semibold text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
            >
              Login
            </a>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 flex flex-col space-y-2 md:hidden">
            <a
              href="#"
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 transition-colors text-center"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="rounded bg-transparent px-4 py-2 font-semibold text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-500 text-center"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
