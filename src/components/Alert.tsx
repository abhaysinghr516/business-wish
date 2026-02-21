"use client";
import { CheckCircle, CircleAlert, X, Info, AlertTriangle } from "lucide-react";
import React, { useEffect, useState } from "react";

export const SimpleAlert: React.FC = () => (
  <div
    className="bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl shadow-sm border border-transparent dark:border-blue-900/20 px-5 py-4 max-w-md mx-auto sm:max-w-sm lg:max-w-lg transition-colors duration-300"
    role="alert"
  >
    <div className="flex items-start space-x-3">
      <Info className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
      <div className="flex-grow">
        <p className="text-[15px] font-medium text-blue-900 dark:text-blue-100 mb-0.5">
          New Feature Available
        </p>
        <p className="text-[14px] text-blue-700 dark:text-blue-300/80 leading-relaxed">
          You can now sync your data across all your devices seamlessly.
        </p>
      </div>
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
      <div
        className={`relative bg-red-50/50 dark:bg-red-900/10 rounded-2xl border border-transparent dark:border-red-900/20 px-5 py-4 transition-all duration-300 ease-in-out origin-top ${
          isVisible ? "opacity-100 scale-100 mb-4" : "opacity-0 scale-95 h-0 overflow-hidden py-0 my-0 border-0"
        }`}
        role="alert"
      >
        <div className="flex items-start space-x-3 pr-8">
           <AlertTriangle className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
           <div>
              <p className="text-[15px] font-medium text-red-900 dark:text-red-100 mb-0.5">
                Connection Lost
              </p>
              <p className="text-[14px] text-red-700 dark:text-red-300/80 leading-relaxed">
                We're having trouble connecting to the server. Please check your internet.
              </p>
           </div>
        </div>
        <button
          className="absolute top-4 right-4 p-1.5 rounded-full text-red-500/70 dark:text-red-400/70 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-300 transition-colors duration-200"
          onClick={dismissAlert}
          aria-label="Dismiss alert"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export const CustomAlert: React.FC = () => (
  <div
    className="bg-amber-50/50 dark:bg-amber-900/10 rounded-2xl border border-transparent dark:border-amber-900/20 px-5 py-4 max-w-md mx-auto sm:max-w-sm lg:max-w-lg transition-colors duration-300"
    role="alert"
  >
    <div className="flex items-start space-x-3">
      <CircleAlert className="w-5 h-5 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
      <div className="flex-grow">
        <p className="text-[15px] font-medium text-amber-900 dark:text-amber-100 mb-0.5">
          Payment Method Expiring
        </p>
        <p className="text-[14px] text-amber-700 dark:text-amber-300/80 leading-relaxed">
          The credit card ending in 4242 will expire next month. Please update your billing info.
        </p>
      </div>
    </div>
  </div>
);

export const FloatingAlert: React.FC = () => (
  <div
    className="fixed bottom-6 right-6 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] px-5 py-4 transform transition-all duration-500 ease-in-out hover:-translate-y-1"
    role="alert"
    aria-live="assertive"
  >
    <div className="flex items-center space-x-3">
      <CheckCircle className="h-5 w-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
      <div>
        <p className="text-[15px] font-medium text-neutral-900 dark:text-neutral-100 mb-0.5 mt-0.5">Profile Updated</p>
        <p className="text-[14px] text-neutral-500 dark:text-neutral-400">
          Your changes have been saved successfully.
        </p>
      </div>
    </div>
  </div>
);

export const GhostAlert: React.FC = () => (
  <div
    className="bg-transparent rounded-2xl px-5 py-4 max-w-md mx-auto sm:max-w-sm lg:max-w-lg transition-colors duration-300 group hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
    role="alert"
  >
    <div className="flex items-start space-x-3">
      <Info className="w-5 h-5 text-neutral-500 dark:text-neutral-400 mt-0.5 flex-shrink-0" />
      <div className="flex-grow">
        <p className="text-[15px] font-medium text-neutral-900 dark:text-neutral-100 mb-0.5">
          Did you know?
        </p>
        <p className="text-[14px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
          You can use keyboard shortcuts to navigate through the app much faster.
        </p>
      </div>
    </div>
  </div>
);

export const OutlineAlert: React.FC = () => (
  <div
    className="bg-transparent border border-neutral-200 dark:border-neutral-800 rounded-2xl px-5 py-4 max-w-md mx-auto sm:max-w-sm lg:max-w-lg transition-colors duration-300"
    role="alert"
  >
    <div className="flex items-start space-x-3">
      <AlertTriangle className="w-5 h-5 text-neutral-500 dark:text-neutral-400 mt-0.5 flex-shrink-0" />
      <div className="flex-grow">
        <p className="text-[15px] font-medium text-neutral-900 dark:text-neutral-100 mb-0.5">
          Action Required
        </p>
        <p className="text-[14px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Please complete your profile to access all premium features.
        </p>
      </div>
    </div>
  </div>
);
