"use client";

import {
  Copy,
  Facebook,
  Link,
  Linkedin,
  Share,
  Twitter,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const FABSocialShare: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        className="rounded-full p-3 bg-blue-600 text-white shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close share menu" : "Open share menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Share className="h-6 w-6" />}
      </button>
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white shadow-lg rounded-lg p-2 flex flex-col space-y-2 dark:bg-gray-800">
          <button
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label="Share on Facebook"
          >
            <Facebook className="mr-2 h-4 w-4 text-blue-600" />
            Facebook
          </button>
          <button
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label="Share on Twitter"
          >
            <Twitter className="mr-2 h-4 w-4 text-blue-400" />
            Twitter
          </button>
          <button
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="mr-2 h-4 w-4 text-blue-700" />
            LinkedIn
          </button>
          <button
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
            aria-label="Copy link"
          >
            <Link className="mr-1 h-4 w-4 text-gray-600" />
            Copy Link
          </button>
        </div>
      )}
    </div>
  );
};

export const DropdownSocialShare: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <Share className="mr-2 h-4 w-4" />
          Share
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-gray-800">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left dark:text-gray-300 dark:hover:bg-gray-700"
                role="menuitem"
              >
                <Facebook className="mr-3 h-5 w-5 text-blue-600" />
                Facebook
              </button>
              <button
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left dark:text-gray-300 dark:hover:bg-gray-700"
                role="menuitem"
              >
                <Twitter className="mr-3 h-5 w-5 text-blue-400" />
                Twitter
              </button>
              <button
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left dark:text-gray-300 dark:hover:bg-gray-700"
                role="menuitem"
              >
                <Linkedin className="mr-3 h-5 w-5 text-blue-700" />
                LinkedIn
              </button>
              <button
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left dark:text-gray-300 dark:hover:bg-gray-700"
                role="menuitem"
              >
                <Link className="mr-3 h-5 w-5 text-gray-600" />
                Copy Link
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ModalSocialShare: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <Share className="mr-2 h-4 w-4" />
          Share
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full dark:bg-gray-800">
            <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
              <h3 className="text-lg font-medium">Share this content</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <input
                  type="text"
                  value="https://business-wish.vercel.app/"
                  readOnly
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
                />
                <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  <Copy className="h-5 w-5" />
                </button>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </button>
                <button
                  className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 dark:bg-blue-300 dark:hover:bg-blue-400"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button
                  className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
