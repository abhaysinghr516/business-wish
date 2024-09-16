"use client";
import {
  AlertCircle,
  Ghost,
  HelpCircle,
  Home,
  Loader2,
  Search,
} from "lucide-react";
import React, { useState } from "react";

export const Minimal404Section: React.FC = () => (
  <div className="flex h-screen items-center justify-center bg-gray-100">
    <div className="text-center px-4">
      <p className="text-4xl sm:text-6xl lg:text-9xl font-bold text-gray-800">
        404
      </p>
      <p className="mt-4 text-xl sm:text-2xl font-semibold text-gray-600">
        Page not found
      </p>
      <p className="mt-2 text-gray-500">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <div className="cursor-pointer mt-6 inline-block rounded-md bg-black px-6 py-2 text-sm font-semibold text-white">
        Go Back Home
      </div>
    </div>
  </div>
);

export const Playful404Section: React.FC = () => (
  <div className="flex flex-col h-screen items-center justify-center py-10 sm:py-16 lg:py-20">
    <Ghost className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-black animate-bounce" />
    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-6 sm:mt-8">
      Whoops! Page not found
    </p>
    <p className="text-lg sm:text-xl mt-4">
      Looks like this page has vanished into thin air!
    </p>
    <div className="cursor-pointer mt-6 bg-gray-900 text-sm font-semibold text-white py-2 px-6 rounded-md">
      Let&apos;s go back home
    </div>
  </div>
);

export const Informative404Section: React.FC = () => (
  <div className="flex flex-col h-screen items-center justify-center py-10 sm:py-16 lg:py-20 px-4">
    <AlertCircle className="w-16 h-16 sm:w-20 sm:h-20 text-red-500 mb-6 sm:mb-8" />
    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
      404 - Page Not Found
    </p>
    <p className="text-center text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-md">
      The page you are looking for might have been removed, had its name
      changed, or is temporarily unavailable.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-xl">
      <div className="flex items-center border px-4 py-2 rounded-md cursor-pointer hover:bg-gray-50">
        <Home className="mr-2" />
        <span className="text-sm font-semibold">Go to Homepage</span>
      </div>
      <div className="flex items-center border px-4 py-2 rounded-md cursor-pointer hover:bg-gray-50">
        <Search className="mr-2" />
        <span className="text-sm font-semibold">Search our site</span>
      </div>
      <div className="flex items-center border px-4 py-2 rounded-md cursor-pointer hover:bg-gray-50">
        <HelpCircle className="mr-2" />
        <span className="text-sm font-semibold">Visit Help Center</span>
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
    <div className="flex flex-col items-center h-screen justify-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">Oops! Page not found</h1>
      <p className="text-xl mb-8">
        Let&apos;s see if we can find what you&apos;re looking for...
      </p>
      {!isSearching && !searchComplete && (
        <button
          onClick={handleSearch}
          className="bg-gray-900 text-white py-2 px-6 rounded-md cursor-pointer"
        >
          Search for page
        </button>
      )}
      {isSearching && (
        <div className="flex items-center mb-4">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Searching...
        </div>
      )}
      {searchComplete && (
        <div className="text-center mb-8">
          <p className="mb-4">
            We couldn&apos;t find the exact page, but here are some helpful
            links:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="flex justify-center items-center border px-4 py-2 rounded-md cursor-pointer hover:bg-gray-50">
              Home
            </button>
            <button className="flex justify-center items-center border px-4 py-2 rounded-md cursor-pointer hover:bg-gray-50">
              Sitemap
            </button>
            <button className="flex justify-center items-center border px-4 py-2 rounded-md cursor-pointer hover:bg-gray-50">
              Contact Us
            </button>
            <button className="flex justify-center items-center border px-4 py-2 rounded-md cursor-pointer hover:bg-gray-50">
              FAQ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
