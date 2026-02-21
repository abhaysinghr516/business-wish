"use client";

import React, { useState, useEffect } from "react";
import { Menu, Search, User, X, ChevronDown, Command } from "lucide-react";

export const BasicHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex h-14 bg-white/0 dark:bg-black/0 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-[12px] font-bold text-white dark:text-neutral-900">BR</span>
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-neutral-900 dark:text-white">
              Brand
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Products", "Solutions", "Developers", "Resources"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[14px] font-medium md:font-normal text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors duration-200 tracking-tight"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="text-neutral-900 dark:text-white md:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu expansion */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden absolute left-0 w-full bg-white dark:bg-neutral-950 border-b border-neutral-200 rounded-b-2xl shadow-xl dark:border-neutral-800 ${
            isOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="px-6 flex flex-col gap-4">
            <div className="flex flex-col space-y-4">
              {["Products", "Solutions", "Developers", "Resources"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="py-2 text-[14px] font-medium text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors"
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
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex h-14 items-center justify-between">
          <div className="text-[15px] font-semibold tracking-tight text-neutral-900 dark:text-white">
            Brand
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="relative hidden md:flex items-center group">
              <Search className="absolute left-3 w-4 h-4 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors" strokeWidth={2} />
              <input
                type="text"
                className="w-72 rounded-full bg-neutral-100/50 dark:bg-neutral-900/50 border border-transparent focus:border-neutral-200 dark:focus:border-neutral-800 text-neutral-900 dark:text-white pl-9 pr-14 py-1.5 text-[13px] focus:outline-none focus:ring-4 focus:ring-neutral-900/5 dark:focus:ring-white/5 placeholder:text-neutral-400 transition-all"
                placeholder="Search documentation..."
              />
              <div className="absolute right-3 flex items-center gap-1">
                <kbd className="hidden sm:inline-flex items-center justify-center rounded border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-1.5 font-mono text-[10px] font-medium text-neutral-500 dark:text-neutral-400">
                  <Command className="w-3 h-3 mr-0.5" />K
                </kbd>
              </div>
            </div>

            <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
              <User className="w-4 h-4" strokeWidth={2} />
            </button>
            <button
              className="text-neutral-900 dark:text-white md:hidden p-2 -mr-2 z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu & search expansion */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden absolute left-0 w-full bg-white dark:bg-neutral-950 border-b border-neutral-200 rounded-b-2xl shadow-xl dark:border-neutral-800 ${
            isOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="px-6 flex flex-col gap-4">
            <div className="relative flex items-center">
              <Search className="absolute left-3 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                className="w-full rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white pl-9 pr-4 py-2.5 text-[14px] focus:outline-none placeholder:text-neutral-400"
                placeholder="Search..."
              />
            </div>
            <div className="flex flex-col mt-2">
              {["Profile", "Settings", "Log out"].map((item) => (
                <a key={item} href="#" className="py-2 text-[14px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const HeaderwithAnimation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md shadow-sm border-b border-neutral-100 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="text-[17px] font-bold tracking-tight text-neutral-900 dark:text-white">
            Brand
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["Discover", "Platform", "Community", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[14px] font-medium text-neutral-900 dark:text-neutral-200 transition-all duration-300
                  relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 
                  after:bg-neutral-900 dark:after:bg-white after:transition-transform after:ease-out after:duration-300 
                  hover:after:scale-x-100"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="text-neutral-900 dark:text-white md:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu expansion */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden absolute left-0 w-full bg-white dark:bg-neutral-950 border-b border-neutral-200 rounded-b-2xl shadow-xl dark:border-neutral-800 ${
            isOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="px-6 flex flex-col gap-4">
            <div className="flex flex-col space-y-4">
              {["Discover", "Platform", "Community", "Pricing"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="py-2 text-[14px] font-medium text-neutral-900 dark:text-white hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors inline-block w-fit
                    relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 
                    after:bg-neutral-900 dark:after:bg-white after:transition-transform after:ease-out after:duration-300 
                    hover:after:scale-x-100"
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
  const navItems = ["Features", "Testimonials", "Highlights", "Pricing"];

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (isOpen && !e.target.closest("nav")) setIsOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/50 backdrop-blur-xl border-b border-neutral-200/50 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 h-14 items-center">
          
          <div className="text-[15px] font-semibold text-neutral-900 dark:text-white tracking-tight flex items-center">
            Logo
          </div>

          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-end space-x-3">
            <a
              href="#"
              className="px-4 py-1.5 text-[13px] font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300"
            >
              Sign in
            </a>
            <a
              href="#"
              className="rounded-full bg-neutral-900 dark:bg-white px-4 py-1.5 text-[13px] font-medium text-white dark:text-neutral-900 hover:scale-105 transition-all duration-300 shadow-sm"
            >
              Get Started
            </a>
          </div>

          <div className="flex justify-end md:hidden">
            <button
              className="relative z-50 text-neutral-900 dark:text-white p-2"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-neutral-900/20 dark:bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute right-0 top-14 h-[calc(100vh-3.5rem)] w-64 bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6 h-full justify-between">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[15px] font-medium text-neutral-800 dark:text-neutral-200 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-3 pb-8">
              <a
                href="#"
                className="w-full text-center px-4 py-2.5 text-[14px] font-medium text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 rounded-xl transition-colors duration-300"
              >
                Sign in
              </a>
              <a
                href="#"
                className="w-full text-center rounded-xl bg-neutral-900 dark:bg-white px-4 py-2.5 text-[14px] font-medium text-white dark:text-neutral-900 transition-colors duration-300 shadow-sm"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const FloatingHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Showcase", "Docs", "Blog"];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4">
      <nav className="w-full max-w-2xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-neutral-200/50 dark:border-white/10 rounded-full shadow-lg shadow-neutral-900/5 dark:shadow-black/20">
        <div className="flex px-4 md:px-6 h-12 items-center justify-between">
          <div className="text-[15px] font-bold tracking-tight text-neutral-900 dark:text-white flex items-center">
            Logo
          </div>

          <div className="hidden md:flex items-center justify-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-end">
            <a
              href="#"
              className="text-[13px] font-medium text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 px-4 py-1.5 rounded-full hover:scale-105 transition-all shadow-sm"
            >
              Sign Up
            </a>
          </div>

          <div className="flex justify-end md:hidden">
            <button className="text-neutral-900 dark:text-white p-1" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>
      {/* Basic invisible overlay for mobile menu in this isolated context */}
      {isOpen && (
        <div className="absolute top-20 w-[90%] max-w-sm bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xl p-4 flex flex-col space-y-4 md:hidden">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-[14px] font-medium text-neutral-800 dark:text-neutral-200 text-center py-2">{item}</a>
          ))}
          <div className="h-px bg-neutral-100 dark:bg-neutral-800 my-2" />
          <a href="#" className="text-[14px] text-center font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-2.5 rounded-xl">Sign Up</a>
        </div>
      )}
    </div>
  );
};

export const MinimalStickyHeader: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/60 dark:bg-black/60 backdrop-blur-2xl border-b border-transparent transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-[15px] font-semibold text-neutral-900 dark:text-white tracking-tight">Brand.</span>
            <div className="hidden md:flex items-center space-x-6">
              {["Product", "Company", "Careers"].map((item) => (
                <a key={item} href="#" className="text-[13px] text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="hidden sm:block text-[13px] font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">Log in</a>
            <a href="#" className="text-[13px] font-medium px-4 py-1.5 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
