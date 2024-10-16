import React from "react";

export const BasicBanner: React.FC = () => (
  <div className="bg-blue-100 dark:bg-gray-900 text-blue-800 dark:text-blue-200 px-4 py-3 rounded-lg max-w-xl mx-auto">
    <div className="text-sm">This is a basic banner component.</div>
  </div>
);

export const BannerwithActions: React.FC = () => (
  <div className="bg-indigo-100 dark:bg-gray-900 text-indigo-800 dark:text-indigo-100 px-4 py-3 rounded-lg flex flex-col sm:flex-row items-center justify-between max-w-2xl mx-auto">
    <div className="mb-2 sm:mb-0">
      <p className="text-sm">This is a banner with actions.</p>
    </div>
    <div className="flex items-center justify-center sm:justify-end space-x-2">
      <button className="bg-indigo-500 dark:bg-indigo-600 text-white px-3 py-2 rounded-md text-sm hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors">
        Action 1
      </button>
      <button className="bg-indigo-200 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-200 px-3 py-2 rounded-md text-sm hover:bg-indigo-300 dark:hover:bg-indigo-600 transition-colors">
        Action 2
      </button>
    </div>
  </div>
);

export const BannerwithHeadingAndButton: React.FC = () => (
  <div className="bg-blue-200 dark:bg-gray-800 p-6 max-w-xl mx-auto rounded-lg">
    <div className="mb-4 text-2xl font-bold text-blue-800 dark:text-blue-100">
      Special Offer!
    </div>
    <div className="text-base text-blue-700 dark:text-blue-200">
      Get 20% off on selected items. Limited time only.
    </div>
    <button className="text-base mt-4 rounded bg-white dark:bg-blue-700 px-4 py-2 text-blue-600 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-600 transition-colors">
      Shop Now
    </button>
  </div>
);
