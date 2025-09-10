import React from "react";

export const BasicSettingsPage: React.FC = () => (
  <div className="min-h-screen text-base bg-gray-100 dark:bg-gray-900 p-8">
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <p className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Settings
      </p>

      <div className="mb-6">
        <p className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Account Information
        </p>
        <div className="mb-4">
          <label className="block text-gray-600 dark:text-gray-300 mb-2">
            Username
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="mb-6">
        <p className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Preferences
        </p>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            className="h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-gray-600 dark:text-gray-300">
            Receive Email Notifications
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-5 w-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-gray-600 dark:text-gray-300">
            Receive SMS Alerts
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200">
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

export const SettingsPagewithTabs: React.FC = () => (
  <div className="bg-gray-100 dark:bg-gray-900 text-base min-h-screen p-8">
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <p className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Settings
      </p>

      <div className="flex space-x-4 mb-6">
        <button className="py-2 px-4 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded transition-colors duration-200">
          General
        </button>
        <button className="py-2 px-4 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors duration-200">
          Account
        </button>
        <button className="py-2 px-4 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors duration-200">
          Privacy
        </button>
      </div>

      <div>
        <p className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          General Settings
        </p>
        <div className="mb-4">
          <label className="block text-gray-600 dark:text-gray-300 mb-2">
            Username
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
);
