"use client";
import { CheckCircle, CircleAlert, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export const SimpleAlert: React.FC = () => (
  <div
    className="bg-blue-50/90 dark:bg-gray-800/90 rounded-xl shadow-sm 
    border border-blue-100 dark:border-blue-950 px-6 py-4 max-w-md mx-auto sm:max-w-sm lg:max-w-lg"
    role="alert"
  >
    <div className="flex flex-col space-y-1">
      <p className="text-base font-medium text-blue-900 dark:text-blue-100">
        Informational Alert
      </p>
      <p className="text-sm font-regular text-blue-700 dark:text-blue-300 leading-relaxed">
        Some additional information for the user.
      </p>
    </div>
  </div>
);

export const DismissableAlert: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const dismissAlert = () => setIsVisible(false);

  useEffect(() => {
    if (!isVisible) {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [isVisible]);

  return (
    <div className="max-w-md mx-auto sm:max-w-sm lg:max-w-lg">
      {isVisible ? (
        <div
          className="relative bg-white/90 dark:bg-gray-900/90 
          border border-red-100 dark:border-red-950
          shadow-sm rounded-xl px-6 py-4"
          role="alert"
        >
          <div className="pr-8">
            <p className="text-base font-medium text-red-600 dark:text-red-400 mb-1">
              Error
            </p>
            <p className="text-sm text-red-600/90 dark:text-red-300/90 leading-relaxed">
              Something went wrong, please try again.
            </p>
          </div>
          <button
            className="absolute top-4 right-4 p-1 rounded-full 
            text-red-500 dark:text-red-400 
            hover:bg-red-50 dark:hover:bg-red-950 
            transition-colors duration-200"
            onClick={dismissAlert}
            aria-label="Dismiss alert"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-4">
          Hang tight! The alert will reappear shortly for you to interact with
          it again.
        </div>
      )}
    </div>
  );
};

export const CustomAlert: React.FC = () => (
  <div
    className="bg-yellow-50/90 dark:bg-gray-800/90 
    border border-yellow-100 dark:border-yellow-950
    rounded-xl shadow-sm px-6 py-4 max-w-md mx-auto sm:max-w-sm lg:max-w-lg"
    role="alert"
  >
    <div className="flex items-start space-x-3">
      <CircleAlert className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
      <div className="flex-grow">
        <p className="text-base font-medium text-yellow-800 dark:text-yellow-200 mb-1">
          Warning
        </p>
        <p className="text-sm text-yellow-700 dark:text-yellow-300 leading-relaxed">
          There might be potential issues with your action.
        </p>
      </div>
    </div>
  </div>
);

export const FloatingAlert: React.FC = () => (
  <div
    className="fixed bottom-6 right-6
    bg-white/90 dark:bg-gray-900/90 
    border border-green-100 dark:border-green-900
    text-green-600 dark:text-green-400 
    px-6 py-4 rounded-xl shadow-lg 
    transform transition-all duration-300 ease-out"
    role="alert"
    aria-live="assertive"
  >
    <div className="flex items-center space-x-3">
      <CheckCircle className="h-5 w-5 flex-shrink-0" />
      <div>
        <p className="text-base font-medium">Success</p>
        <p className="text-sm text-green-600/90 dark:text-green-400/90">
          Your changes have been saved.
        </p>
      </div>
    </div>
  </div>
);
