"use client";
import {
  AlertCircle,
  Ghost,
  HelpCircle,
  Home,
  Loader2,
  Search,
  ArrowRight,
} from "lucide-react";
import React, { useState } from "react";

export const Minimal404Section: React.FC = () => (
  <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
    <div className="text-center px-4 max-w-2xl mx-auto">
      <p className="text-[180px] font-light leading-none text-gray-900 dark:text-gray-100">
        404
      </p>
      <p className="mt-8 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        Page not found
      </p>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
        The page you're looking for isn't available. Perhaps you'd like to try
        returning home or exploring our features.
      </p>
      <div className="mt-10 group cursor-pointer inline-flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-gray-100">
        <span>Return to homepage</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </div>
);

export const Playful404Section: React.FC = () => (
  <div className="flex flex-col h-screen items-center justify-center bg-white dark:bg-black">
    <div className="relative">
      <Ghost className="w-32 h-32 text-gray-900 dark:text-gray-100 animate-bounce" />
      <div className="absolute -bottom-4 w-20 h-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent blur-sm" />
    </div>
    <p className="mt-12 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
      Page not found
    </p>
    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
      This page appears to have wandered off
    </p>
    <div className="mt-10 group cursor-pointer inline-flex items-center px-6 py-3 rounded-full bg-gray-900 dark:bg-gray-100 transition-transform hover:scale-105">
      <span className="text-sm font-medium text-white dark:text-black">
        Return home
      </span>
    </div>
  </div>
);

export const Informative404Section: React.FC = () => (
  <div className="flex flex-col h-screen items-center justify-center px-4 bg-white dark:bg-black">
    <AlertCircle className="w-20 h-20 text-red-500 mb-8" />
    <p className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
      404 - Page Not Found
    </p>
    <p className="text-center text-lg mb-12 max-w-xl text-gray-500 dark:text-gray-400">
      We couldn't find what you're looking for. Here are some helpful options to
      get you back on track.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
      <div className="group flex flex-col items-center p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer">
        <Home className="w-8 h-8 mb-4 text-gray-900 dark:text-gray-100 transition-transform group-hover:scale-110" />
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Homepage
        </span>
      </div>
      <div className="group flex flex-col items-center p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer">
        <Search className="w-8 h-8 mb-4 text-gray-900 dark:text-gray-100 transition-transform group-hover:scale-110" />
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Search
        </span>
      </div>
      <div className="group flex flex-col items-center p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:bg-gray-50 dark:hover:bg-gray-900 cursor-pointer">
        <HelpCircle className="w-8 h-8 mb-4 text-gray-900 dark:text-gray-100 transition-transform group-hover:scale-110" />
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Help Center
        </span>
      </div>
    </div>
  </div>
);

export const Interactive404Section: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchComplete, setSearchComplete] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setSearchComplete(true);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
          Page not found
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-12">
          Let's help you find what you're looking for
        </p>

        {!isSearching && !searchComplete && (
          <button
            onClick={handleSearch}
            className="inline-flex items-center px-8 py-4 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-black transition-transform hover:scale-105"
          >
            <Search className="w-5 h-5 mr-2" />
            Search
          </button>
        )}

        {isSearching && (
          <div className="flex items-center justify-center space-x-3 text-gray-900 dark:text-gray-100">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-lg">Searching...</span>
          </div>
        )}

        {searchComplete && (
          <div className="space-y-8">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Here are some suggested pages that might help:
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
              {["Home", "Help", "Contact", "Support"].map((item) => (
                <button
                  key={item}
                  className="group flex items-center justify-center p-4 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all hover:bg-gray-50 dark:hover:bg-gray-900"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {item}
                  </span>
                  <ArrowRight className="w-4 h-4 ml-2 text-gray-400 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
