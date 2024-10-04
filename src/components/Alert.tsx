"use client";
import { CheckCircle, CircleAlert, X } from "lucide-react";
import React, { useEffect, useState } from "react";

// Simple informational alert
export const SimpleAlert: React.FC = () => (
  <div
    className="bg-blue-50 dark:bg-gray-900 border-t-4 border-blue-500 rounded-b text-blue-900 dark:text-blue-100 px-4 py-3 max-w-md mx-auto sm:max-w-sm lg:max-w-lg"
    role="alert"
  >
    <div className="flex flex-col sm:flex-row">
      <div className="flex-grow">
        <p className="m-0 text-lg font-bold">Informational Alert</p>
        <p className="m-0 text-sm">Some additional information for the user.</p>
      </div>
    </div>
  </div>
);

// Dismissable alert with a close button
export const DismissableAlert: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const dismissAlert = () => setIsVisible(false);

  // Automatically bring back the alert after 3 seconds
  useEffect(() => {
    if (!isVisible) {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timeoutId); // Clean up the timeout if the component unmounts or visibility changes
    }
  }, [isVisible]);

  return (
    <div className="max-w-md mx-auto sm:max-w-sm lg:max-w-lg">
      {isVisible ? (
        <div
          className="relative border text-base border-red-400 dark:border-red-600 text-red-500 dark:text-red-400 px-4 py-3 rounded mb-4 bg-white dark:bg-gray-950"
          role="alert"
        >
          <strong className="font-bold text-red-500 dark:text-red-400 mr-2">
            Error!
          </strong>
          <span className="block sm:inline">
            Something went wrong, please try again.
          </span>
          <button
            className="absolute top-0 bottom-0 right-0 px-4 py-3 text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 focus:outline-none"
            onClick={dismissAlert}
            aria-label="Dismiss alert"
          >
            <X />
          </button>
        </div>
      ) : (
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Hang tight! The alert will reappear shortly for you to interact with
          it again.
        </div>
      )}
    </div>
  );
};

// Custom warning alert
export const CustomAlert: React.FC = () => (
  <div
    className="bg-yellow-50 dark:bg-gray-900 border-l-4 border-yellow-400 p-4 max-w-md mx-auto sm:max-w-sm lg:max-w-lg"
    role="alert"
  >
    <div className="flex items-center">
      <CircleAlert className="w-6 h-6 text-yellow-700 dark:text-yellow-300" />
      <div className="ml-3">
        <p className="text-sm text-yellow-700 dark:text-yellow-200">
          Warning! There might be potential issues with your action.
        </p>
      </div>
    </div>
  </div>
);

// Floating alert for success notification
export const FloatingAlert: React.FC = () => (
  <div
    className="fixed bottom-4 right-4 bg-green-500 dark:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-2"
    role="alert"
    aria-live="assertive"
  >
    <CheckCircle className="h-6 w-6" />
    <p className="font-bold text-sm">Success!</p>
  </div>
);
