"use client";
import { useState } from "react";

export const BasicTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 transition-all duration-300 relative
              ${
                activeTab === tab
                  ? "text-blue-600 font-medium dark:text-blue-400"
                  : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-100 transition-transform duration-300" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export const TabswithUnderline: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex space-x-6 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-3 transition-all duration-300 relative
              ${
                activeTab === tab
                  ? "text-blue-600 font-medium dark:text-blue-400"
                  : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-100 transition-transform duration-300" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export const TabswithPill: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex p-1 space-x-1 bg-gray-100 rounded-xl dark:bg-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 px-4 py-2.5 text-sm rounded-lg transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-white text-gray-900 shadow-sm font-medium dark:bg-gray-700 dark:text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/50 dark:text-gray-300 dark:hover:bg-gray-700/50"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export const TabswithBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="inline-flex rounded-lg p-1 bg-gray-100 dark:bg-gray-800">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`px-4 py-2.5 text-sm transition-all duration-300
              ${index === 0 ? "rounded-l-lg" : ""}
              ${index === tabs.length - 1 ? "rounded-r-lg" : ""}
              ${
                activeTab === tab
                  ? "bg-white shadow-sm text-gray-900 font-medium dark:bg-gray-700 dark:text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/50 dark:text-gray-300 dark:hover:bg-gray-700/50"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};
